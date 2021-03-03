import { Component } from '@angular/core'
import {WebCoreDataAccessService} from '@demo/web/core/data-access'

@Component({
  template: `
    <ui-page headerTitle="Providers">
      <div class="dark:bg-gray-800 px-6 py-4 mb-3 md:mb-6 rounded-lg shadow">
      <ng-container *ngIf='provider$ | async as providers'>
        <pre>{{ providers | json }}</pre>
      </ng-container>
      </div>
    </ui-page>
  `,
})
export class WebProviderFeatureComponent {
  provider$ = this.data.publicProviders();
  constructor(private readonly data:WebCoreDataAccessService) {}

}
