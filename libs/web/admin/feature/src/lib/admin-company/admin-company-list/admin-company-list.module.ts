import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'
import { RouterModule } from '@angular/router'
import { WebUiPageHeaderModule } from '@demo/web/ui/page-header'

import { AdminCompanyListComponent } from './admin-company-list.component'

@NgModule({
  declarations: [AdminCompanyListComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([{ path: '', component: AdminCompanyListComponent }]),
    WebUiPageHeaderModule,
  ],
})
export class AdminCompanyListModule {}
