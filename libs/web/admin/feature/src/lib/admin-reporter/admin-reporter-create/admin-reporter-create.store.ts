import { Injectable } from '@angular/core'
import { Router } from '@angular/router'
import { AdminCreateReporterInput, WebCoreDataAccessService, Reporter } from '@demo/web/core/data-access'
import { ComponentStore, tapResponse } from '@ngrx/component-store'
import { switchMap, tap } from 'rxjs/operators'

export interface ReporterCreateState {
  errors?: any
  loading?: boolean
  item?: Reporter
}

@Injectable()
export class AdminReporterCreateStore extends ComponentStore<ReporterCreateState> {
  constructor(private readonly data: WebCoreDataAccessService, private readonly router: Router) {
    super({ loading: false })
  }

  readonly errors$ = this.select((s) => s.errors)
  readonly loading$ = this.select((s) => s.loading)
  readonly item$ = this.select((s) => s.item)
  readonly vm$ = this.select(this.errors$, this.loading$, this.item$, (errors, loading, item) => ({
    errors,
    loading,
    item,
  }))

  readonly createReporterEffect = this.effect<AdminCreateReporterInput>((input$) =>
    input$.pipe(
      tap(() => this.patchState({ loading: true })),
      switchMap((input) =>
        this.data.adminCreateReporter({ input }).pipe(
          tapResponse(
            (res) => {
              this.patchState({ item: res.data.created, errors: res.errors, loading: false })
              return this.router.navigate(['/admin/reporters', res.data?.created?.id])
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
