import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'
import { RouterModule } from '@angular/router'
import { WebUiButtonModule } from '@demo/web/ui/button'
import { WebUiFormModule } from '@demo/web/ui/form'
import { WebUiPageHeaderModule } from '@demo/web/ui/page-header'

import { AdminReporterEditComponent } from './admin-reporter-edit.component'

@NgModule({
  declarations: [AdminReporterEditComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([{ path: '', component: AdminReporterEditComponent }]),
    WebUiButtonModule,
    WebUiFormModule,
    WebUiPageHeaderModule,
  ],
})
export class AdminReporterEditModule {}
