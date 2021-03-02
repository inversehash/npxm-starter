import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'
import { RouterModule } from '@angular/router'
import { WebUiButtonModule } from '@demo/web/ui/button'
import { WebUiPageHeaderModule } from '@demo/web/ui/page-header'

import { AdminCompanyDetailComponent } from './admin-company-detail.component'

@NgModule({
  declarations: [AdminCompanyDetailComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([{ path: '', component: AdminCompanyDetailComponent }]),
    WebUiPageHeaderModule,
    WebUiButtonModule,
  ],
})
export class AdminCompanyDetailModule {}
