import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'
import { RouterModule } from '@angular/router'
import { WebUiPageHeaderModule } from '@demo/web/ui/page-header'

import { AdminProviderListComponent } from './admin-provider-list.component'

@NgModule({
  declarations: [AdminProviderListComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([{ path: '', component: AdminProviderListComponent }]),
    WebUiPageHeaderModule,
  ],
})
export class AdminProviderListModule {}
