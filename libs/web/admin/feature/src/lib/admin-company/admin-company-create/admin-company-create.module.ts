import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'
import { RouterModule } from '@angular/router'
import { WebUiButtonModule } from '@demo/web/ui/button'
import { WebUiFormModule } from '@demo/web/ui/form'
import { WebUiPageHeaderModule } from '@demo/web/ui/page-header'

import { AdminCompanyCreateComponent } from './admin-company-create.component'

@NgModule({
  declarations: [AdminCompanyCreateComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([{ path: '', component: AdminCompanyCreateComponent }]),
    WebUiButtonModule,
    WebUiFormModule,
    WebUiPageHeaderModule,
  ],
})
export class AdminCompanyCreateModule {}
