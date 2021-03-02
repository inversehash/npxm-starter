import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { WebCompanyComponent } from './web-company.component'

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
  ],
  declarations: [WebCompanyComponent],
  exports: [WebCompanyComponent ],
})
export class WebCompanyModule {}
