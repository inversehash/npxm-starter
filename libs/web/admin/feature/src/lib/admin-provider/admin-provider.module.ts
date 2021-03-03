import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core'

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        loadChildren: () => import('./admin-provider-list/admin-provider-list.module').then((m) => m.AdminProviderListModule),
      },
      {
        path: 'create',
        loadChildren: () =>
        import('./admin-provider-create/admin-provider-create.module').then((m) => m.AdminProviderCreateModule),
      },
      {
        path: ':providerId',
        children: [
          {
            path: '',
            loadChildren: () =>
            import('./admin-provider-detail/admin-provider-detail.module').then((m) => m.AdminProviderDetailModule),
          },
          {
            path: 'edit',
            loadChildren: () =>
            import('./admin-provider-edit/admin-provider-edit.module').then((m) => m.AdminProviderEditModule),
          },
        ],
      },
    ]),
  ],
})
export class AdminProviderModule {}
