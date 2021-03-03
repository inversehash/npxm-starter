import { Injectable } from '@angular/core'
import { ActivatedRoute } from '@angular/router'
import { ComponentStore, tapResponse } from '@ngrx/component-store'
import { WebCoreDataAccessService, Provider } from '@demo/web/core/data-access'
import { pluck, switchMap, tap } from 'rxjs/operators'

export interface ProviderDetailState {
  errors?: any
  loading?: boolean
  item?: Provider
}

@Injectable()
export class AdminProviderDetailStore extends ComponentStore<ProviderDetailState> {
  constructor(private readonly data: WebCoreDataAccessService, route: ActivatedRoute) {
    super({ loading: false })
    this.loadProviderEffect(route.params.pipe(pluck('providerId')))
  }

  readonly errors$ = this.select((s) => s.errors)
  readonly loading$ = this.select((s) => s.loading)
  readonly item$ = this.select((s) => s.item)
  readonly vm$ = this.select(this.errors$, this.loading$, this.item$, (errors, loading, item) => ({
    errors,
    loading,
    item: { ...item },
  }))

  readonly loadProviderEffect = this.effect<string>((providerId$) =>
    providerId$.pipe(
      tap(() => this.setState({ loading: true })),
      switchMap((providerId) =>
        this.data.adminProvider({ providerId }).pipe(
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
