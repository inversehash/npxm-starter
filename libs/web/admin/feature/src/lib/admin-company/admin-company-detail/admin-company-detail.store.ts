import { Injectable } from '@angular/core'
import { ActivatedRoute } from '@angular/router'
import { ComponentStore, tapResponse } from '@ngrx/component-store'
import { WebCoreDataAccessService, Company } from '@demo/web/core/data-access'
import { pluck, switchMap, tap } from 'rxjs/operators'

export interface CompanyDetailState {
  errors?: any
  loading?: boolean
  item?: Company
}

@Injectable()
export class AdminCompanyDetailStore extends ComponentStore<CompanyDetailState> {
  constructor(private readonly data: WebCoreDataAccessService, route: ActivatedRoute) {
    super({ loading: false })
    this.loadCompanyEffect(route.params.pipe(pluck('companyId')))
  }

  readonly errors$ = this.select((s) => s.errors)
  readonly loading$ = this.select((s) => s.loading)
  readonly item$ = this.select((s) => s.item)
  readonly vm$ = this.select(this.errors$, this.loading$, this.item$, (errors, loading, item) => ({
    errors,
    loading,
    item: { ...item },
  }))

  readonly loadCompanyEffect = this.effect<string>((companyId$) =>
    companyId$.pipe(
      tap(() => this.setState({ loading: true })),
      switchMap((companyId) =>
        this.data.adminCompany({ companyId }).pipe(
          tapResponse(
            (res) => this.patchState({ item: res.data.item, errors: res.errors, loading: false }),
            (errors: any) =>
              this.patchState({
                loading: false,
                errors: errors.graphQLErrors ? errors.graphQLErrors : errors,
              }),
          ),
        ),
      ),
    ),
  )
}
