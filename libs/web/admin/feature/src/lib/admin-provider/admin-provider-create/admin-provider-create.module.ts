import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'
import { RouterModule } from '@angular/router'
import { WebUiButtonModule } from '@demo/web/ui/button'
import { WebUiFormModule } from '@demo/web/ui/form'
import { WebUiPageHeaderModule } from '@demo/web/ui/page-header'

import { AdminProviderCreateComponent } from './admin-provider-create.component'

@NgModule({
  declarations: [AdminProviderCreateComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([{ path: '', component: AdminProviderCreateComponent }]),
    WebUiButtonModule,
    WebUiFormModule,
    WebUiPageHeaderModule,
  ],
})
export class AdminProviderCreateModule {}
