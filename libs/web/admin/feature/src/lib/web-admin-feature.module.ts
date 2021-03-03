import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'
import { RouterModule } from '@angular/router'
import { WebUiSidebarPageModule } from '@demo/web/ui/sidebar-page'
import { WebAdminFeatureComponent } from './web-admin-feature.component'

@NgModule({
  declarations: [WebAdminFeatureComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        component: WebAdminFeatureComponent,
        children: [
          { path: '', pathMatch: 'full', redirectTo: 'dashboard' },
{ path: 'providers',
                  loadChildren: () => import('./admin-provider/admin-provider.module')
                    .then((m) => m.AdminProviderModule) },
        
{ path: 'reporters',
                  loadChildren: () => import('./admin-reporter/admin-reporter.module')
                    .then((m) => m.AdminReporterModule) },
        
{ path: 'companys',
                  loadChildren: () => import('./admin-company/admin-company.module')
                    .then((m) => m.AdminCompanyModule) },
        
          {
            path: 'dashboard',
            loadChildren: () => import('./admin-dashboard/admin-dashboard.module').then((m) => m.AdminDashboardModule),
          },
          {
            path: 'users',
            loadChildren: () => import('./admin-user/admin-user-feature.module').then((m) => m.AdminUserFeatureModule),
          },
        ],
      },
    ]),
    WebUiSidebarPageModule,
  ],
})
export class WebAdminFeatureModule {}
