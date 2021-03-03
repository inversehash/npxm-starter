import { Component } from '@angular/core'
import { WebCoreDataAccessService } from '@demo/web/core/data-access'

@Component({
  template: `
    <ui-page headerTitle="Reporters">
      <div class="dark:bg-gray-800 px-6 py-4 mb-3 md:mb-6 rounded-lg shadow">
      <ng-container *ngIf='reporter$ | async as reporters'>
        <pre>{{ reporters | json }}</pre>
      </ng-container>
      </div>
    </ui-page>
  `,
})
export class WebReporterFeatureComponent {
  reporter$ = this.data.publicReporters();
  constructor(private readonly data:WebCoreDataAccessService) {}
}
