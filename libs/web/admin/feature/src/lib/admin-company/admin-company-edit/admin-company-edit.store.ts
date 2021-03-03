import { Injectable } from '@angular/core'
import { ActivatedRoute } from '@angular/router'
import { AdminUpdateCompanyInput, WebCoreDataAccessService, Company } from '@demo/web/core/data-access'
import { ComponentStore, tapResponse } from '@ngrx/component-store'
import { pluck, switchMap, tap, withLatestFrom } from 'rxjs/operators'

export interface CompanyEditState {
  errors?: any
  loading?: boolean
  item?: Company
}

@Injectable()
export class AdminCompanyEditStore extends ComponentStore<CompanyEditState> {
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

  readonly updateCompanyEffect = this.effect<AdminUpdateCompanyInput>((input$) =>
    input$.pipe(
      tap(() => this.patchState({ loading: true })),
      withLatestFrom(this.item$),
      switchMap(([input, item]) =>
        this.data.adminUpdateCompany({ input, companyId: item.id }).pipe(
          tapResponse(
            (res) => {
              this.patchState({ item: res.data.updated, errors: res.errors, loading: false })
            },
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

  readonly deleteCompanyEffect = this.effect<AdminUpdateCompanyInput>((input$) =>
    input$.pipe(
      tap(() => this.patchState({ loading: true })),
      withLatestFrom(this.item$),
      switchMap(([input, item]) =>
        this.data.adminDeleteCompany({ companyId: item.id }).pipe(
          tapResponse(
            (res) => {
              this.patchState({ item: res.data.deleted, errors: res.errors, loading: false })
            },
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
