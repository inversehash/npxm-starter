import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'
import { RouterModule } from '@angular/router'
import { WebUiButtonModule } from '@demo/web/ui/button'
import { WebUiFormModule } from '@demo/web/ui/form'
import { WebUiPageHeaderModule } from '@demo/web/ui/page-header'

import { AdminCompanyEditComponent } from './admin-company-edit.component'

@NgModule({
  declarations: [AdminCompanyEditComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([{ path: '', component: AdminCompanyEditComponent }]),
    WebUiButtonModule,
    WebUiFormModule,
    WebUiPageHeaderModule,
  ],
})
export class AdminCompanyEditModule {}
