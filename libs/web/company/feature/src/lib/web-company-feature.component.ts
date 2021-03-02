import { Component } from '@angular/core'
import {WebCoreDataAccessService} from '@demo/web/core/data-access'

@Component({
  template: `
    <ui-page headerTitle="Companys">
      <div class="dark:bg-gray-800 px-6 py-4 mb-3 md:mb-6 rounded-lg shadow">
        <ng-container *ngIf='companys$ | async as companys'>
          <pre>{{ companys | json }}</pre>
        </ng-container>
      </div>
    </ui-page>
  `,
})
export class WebCompanyFeatureComponent {
  companys$ = this.data.publicCompanys();
  constructor(private readonly data: WebCoreDataAccessService){}
}
