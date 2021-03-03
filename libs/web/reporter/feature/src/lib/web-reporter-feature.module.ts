import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { RouterModule } from '@angular/router'
import { WebUiPageModule } from '@demo/web/ui/page'

import { WebReporterFeatureComponent } from './web-reporter-feature.component'

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([{ path: '', component: WebReporterFeatureComponent }]),
    WebUiPageModule,
  ],
  declarations: [WebReporterFeatureComponent],
})
export class WebReporterFeatureModule {}
