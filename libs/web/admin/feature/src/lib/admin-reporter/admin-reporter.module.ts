import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core'

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        loadChildren: () => import('./admin-reporter-list/admin-reporter-list.module').then((m) => m.AdminReporterListModule),
      },
      {
        path: 'create',
        loadChildren: () =>
        import('./admin-reporter-create/admin-reporter-create.module').then((m) => m.AdminReporterCreateModule),
      },
      {
        path: ':reporterId',
        children: [
          {
            path: '',
            loadChildren: () =>
            import('./admin-reporter-detail/admin-reporter-detail.module').then((m) => m.AdminReporterDetailModule),
          },
          {
            path: 'edit',
            loadChildren: () =>
            import('./admin-reporter-edit/admin-reporter-edit.module').then((m) => m.AdminReporterEditModule),
          },
        ],
      },
    ]),
  ],
})
export class AdminReporterModule {}
