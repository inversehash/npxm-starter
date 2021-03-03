import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'
import { RouterModule } from '@angular/router'
import { WebUiButtonModule } from '@demo/web/ui/button'
import { WebUiPageHeaderModule } from '@demo/web/ui/page-header'

import { AdminProviderDetailComponent } from './admin-provider-detail.component'

@NgModule({
  declarations: [AdminProviderDetailComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([{ path: '', component: AdminProviderDetailComponent }]),
    WebUiPageHeaderModule,
    WebUiButtonModule,
  ],
})
export class AdminProviderDetailModule {}
