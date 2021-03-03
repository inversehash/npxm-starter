import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'
import { RouterModule } from '@angular/router'
import { WebUiButtonModule } from '@demo/web/ui/button'
import { WebUiPageHeaderModule } from '@demo/web/ui/page-header'

import { AdminReporterDetailComponent } from './admin-reporter-detail.component'

@NgModule({
  declarations: [AdminReporterDetailComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([{ path: '', component: AdminReporterDetailComponent }]),
    WebUiPageHeaderModule,
    WebUiButtonModule,
  ],
})
export class AdminReporterDetailModule {}
