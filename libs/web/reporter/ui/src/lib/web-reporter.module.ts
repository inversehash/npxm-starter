import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { WebReporterComponent } from './web-reporter.component'

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
  ],
  declarations: [WebReporterComponent],
  exports: [WebReporterComponent ],
})
export class WebReporterModule {}
