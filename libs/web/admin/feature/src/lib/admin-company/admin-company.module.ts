import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core'

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        loadChildren: () => import('./admin-company-list/admin-company-list.module').then((m) => m.AdminCompanyListModule),
      },
      {
        path: 'create',
        loadChildren: () =>
        import('./admin-company-create/admin-company-create.module').then((m) => m.AdminCompanyCreateModule),
      },
      {
        path: ':companyId',
        children: [
          {
            path: '',
            loadChildren: () =>
            import('./admin-company-detail/admin-company-detail.module').then((m) => m.AdminCompanyDetailModule),
          },
          {
            path: 'edit',
            loadChildren: () =>
            import('./admin-company-edit/admin-company-edit.module').then((m) => m.AdminCompanyEditModule),
          },
        ],
      },
    ]),
  ],
})
export class AdminCompanyModule {}
