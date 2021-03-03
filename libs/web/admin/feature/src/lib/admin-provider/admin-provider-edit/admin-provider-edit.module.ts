import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'
import { RouterModule } from '@angular/router'
import { WebUiButtonModule } from '@demo/web/ui/button'
import { WebUiFormModule } from '@demo/web/ui/form'
import { WebUiPageHeaderModule } from '@demo/web/ui/page-header'

import { AdminProviderEditComponent } from './admin-provider-edit.component'

@NgModule({
  declarations: [AdminProviderEditComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([{ path: '', component: AdminProviderEditComponent }]),
    WebUiButtonModule,
    WebUiFormModule,
    WebUiPageHeaderModule,
  ],
})
export class AdminProviderEditModule {}
