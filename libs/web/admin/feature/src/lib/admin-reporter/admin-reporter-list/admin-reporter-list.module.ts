import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'
import { RouterModule } from '@angular/router'
import { WebUiPageHeaderModule } from '@demo/web/ui/page-header'

import { AdminReporterListComponent } from './admin-reporter-list.component'

@NgModule({
  declarations: [AdminReporterListComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([{ path: '', component: AdminReporterListComponent }]),
    WebUiPageHeaderModule,
  ],
})
export class AdminReporterListModule {}
