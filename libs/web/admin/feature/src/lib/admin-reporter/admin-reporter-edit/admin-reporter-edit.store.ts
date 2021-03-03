import { Injectable } from '@angular/core'
import { ActivatedRoute } from '@angular/router'
import { AdminUpdateReporterInput, WebCoreDataAccessService, Reporter } from '@demo/web/core/data-access'
import { ComponentStore, tapResponse } from '@ngrx/component-store'
import { pluck, switchMap, tap, withLatestFrom } from 'rxjs/operators'

export interface ReporterEditState {
  errors?: any
  loading?: boolean
  item?: Reporter
}

@Injectable()
export class AdminReporterEditStore extends ComponentStore<ReporterEditState> {
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

  readonly updateReporterEffect = this.effect<AdminUpdateReporterInput>((input$) =>
    input$.pipe(
      tap(() => this.patchState({ loading: true })),
      withLatestFrom(this.item$),
      switchMap(([input, item]) =>
        this.data.adminUpdateReporter({ input, reporterId: item.id }).pipe(
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

  readonly deleteReporterEffect = this.effect<AdminUpdateReporterInput>((input$) =>
    input$.pipe(
      tap(() => this.patchState({ loading: true })),
      withLatestFrom(this.item$),
      switchMap(([input, item]) =>
        this.data.adminDeleteReporter({ reporterId: item.id }).pipe(
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
