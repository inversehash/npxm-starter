import { Injectable } from '@angular/core'
import { ActivatedRoute } from '@angular/router'
import { ComponentStore, tapResponse } from '@ngrx/component-store'
import { WebCoreDataAccessService, Reporter } from '@demo/web/core/data-access'
import { pluck, switchMap, tap } from 'rxjs/operators'

export interface ReporterDetailState {
  errors?: any
  loading?: boolean
  item?: Reporter
}

@Injectable()
export class AdminReporterDetailStore extends ComponentStore<ReporterDetailState> {
  constructor(private readonly data: WebCoreDataAccessService, route: ActivatedRoute) {
    super({ loading: false })
    this.loadReporterEffect(route.params.pipe(pluck('reporterId')))
  }

  readonly errors$ = this.select((s) => s.errors)
  readonly loading$ = this.select((s) => s.loading)
  readonly item$ = this.select((s) => s.item)
  readonly vm$ = this.select(this.errors$, this.loading$, this.item$, (errors, loading, item) => ({
    errors,
    loading,
    item: { ...item },
  }))

  readonly loadReporterEffect = this.effect<string>((reporterId$) =>
    reporterId$.pipe(
      tap(() => this.setState({ loading: true })),
      switchMap((reporterId) =>
        this.data.adminReporter({ reporterId }).pipe(
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
