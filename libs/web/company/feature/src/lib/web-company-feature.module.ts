import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { RouterModule } from '@angular/router'
import { WebUiPageModule } from '@demo/web/ui/page'

import { WebCompanyFeatureComponent } from './web-company-feature.component'

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([{ path: '', component: WebCompanyFeatureComponent }]),
    WebUiPageModule,
  ],
  declarations: [WebCompanyFeatureComponent],
})
export class WebCompanyFeatureModule {}
