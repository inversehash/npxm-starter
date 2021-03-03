import { Component } from '@angular/core'
import { WebUiFormField } from '@demo/web/ui/form'
import { AdminProviderCreateStore } from './admin-provider-create.store'

@Component({
  template: `
    <ng-container *ngIf="vm$ | async as vm">
      <ui-page-header title="Create Provider" linkPath=".." linkTitle="Back"></ui-page-header>
      <div class="dark:bg-gray-800 px-6 py-4 rounded-md">
        <ui-form [fields]="fields" [model]="{}" (submitForm)="createProvider($event)">
          <ui-button label="Submit" type="submit"></ui-button>
        </ui-form>
      </div>
    </ng-container>
  `,
  providers: [AdminProviderCreateStore],
})
export class AdminProviderCreateComponent {
  readonly vm$ = this.store.vm$
  fields = [
    WebUiFormField.input('name', { label: 'Name', required : true}),
    WebUiFormField.input('firstName', { label: 'Middle Name' }),
    WebUiFormField.input('lastName', { label: 'Last Name' }),
  ]
  constructor(private readonly store: AdminProviderCreateStore) {}

  createProvider(input) {
    this.store.createProviderEffect(input)
  }
}
