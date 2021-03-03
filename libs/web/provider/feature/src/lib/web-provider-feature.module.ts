import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { RouterModule } from '@angular/router'
import { WebUiPageModule } from '@demo/web/ui/page'

import { WebProviderFeatureComponent } from './web-provider-feature.component'

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([{ path: '', component: WebProviderFeatureComponent }]),
    WebUiPageModule,
  ],
  declarations: [WebProviderFeatureComponent],
})
export class WebProviderFeatureModule {}
