import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'
import { RouterModule } from '@angular/router'
import { WebUiButtonModule } from '@demo/web/ui/button'
import { WebUiFormModule } from '@demo/web/ui/form'
import { WebUiPageHeaderModule } from '@demo/web/ui/page-header'

import { AdminReporterCreateComponent } from './admin-reporter-create.component'

@NgModule({
  declarations: [AdminReporterCreateComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([{ path: '', component: AdminReporterCreateComponent }]),
    WebUiButtonModule,
    WebUiFormModule,
    WebUiPageHeaderModule,
  ],
})
export class AdminReporterCreateModule {}
