import { Component } from '@angular/core'
import { WebUiFormField } from '@demo/web/ui/form'
import { AdminReporterCreateStore } from './admin-reporter-create.store'

@Component({
  template: `
    <ng-container *ngIf="vm$ | async as vm">
      <ui-page-header title="Create Reporter" linkPath=".." linkTitle="Back"></ui-page-header>
      <div class="dark:bg-gray-800 px-6 py-4 rounded-md">
        <ui-form [fields]="fields" [model]="{}" (submitForm)="createReporter($event)">
          <ui-button label="Submit" type="submit"></ui-button>
        </ui-form>
      </div>
    </ng-container>
  `,
  providers: [AdminReporterCreateStore],
})
export class AdminReporterCreateComponent {
  readonly vm$ = this.store.vm$
  fields = [
    WebUiFormField.input('name', { label: 'Name', required : true }),
    WebUiFormField.input('addressLine1', { label: 'Address' }),
    WebUiFormField.input('addressLine2', { label: 'Other Address (optional)' }),
    WebUiFormField.input('addressCity', { label: 'City' }),
    WebUiFormField.input('addressState', { label: 'State' }),
    WebUiFormField.input('addressPostalCode', { label: 'Postal Code' }),
    WebUiFormField.input('phoneNumber', { label: 'Phone Number' }),
    WebUiFormField.input('profession', { label: 'Profession' }),
    WebUiFormField.input('faxNumber', { label: 'Fax Number' }),
  ]
  constructor(private readonly store: AdminReporterCreateStore) {}

  createReporter(input) {
    this.store.createReporterEffect(input)
  }
}
