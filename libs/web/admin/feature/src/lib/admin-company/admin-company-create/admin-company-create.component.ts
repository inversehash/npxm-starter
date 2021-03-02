import { Component } from '@angular/core'
import { WebUiFormField } from '@demo/web/ui/form'
import { AdminCompanyCreateStore } from './admin-company-create.store'

@Component({
  template: `
    <ng-container *ngIf="vm$ | async as vm">
      <ui-page-header title="Create Company" linkPath=".." linkTitle="Back"></ui-page-header>
      <div class="dark:bg-gray-800 px-6 py-4 rounded-md">
        <ui-form [fields]="fields" [model]="{}" (submitForm)="createCompany($event)">
          <ui-button label="Submit" type="submit"></ui-button>
        </ui-form>
      </div>
    </ng-container>
  `,
  providers: [AdminCompanyCreateStore],
})
export class AdminCompanyCreateComponent {
  readonly vm$ = this.store.vm$
  fields = [
    WebUiFormField.input('name', { label: 'Name',required: true }),
    WebUiFormField.input('addressLine1', { label: 'Address' }),
    WebUiFormField.input('addressLine2', { label: 'Address (optional)' }),
    WebUiFormField.input('city', { label: 'City' }),
    WebUiFormField.input('stateOrProvince', { label: 'State' }),
    WebUiFormField.input('postalCode', { label: 'Postal Code' }),
    WebUiFormField.input('country', { label: 'Country' }),
    WebUiFormField.input('phoneNumber', { label: 'Phone Number' }),
  ]
  constructor(private readonly store: AdminCompanyCreateStore) {}

  createCompany(input) {
    this.store.createCompanyEffect(input)
  }
}
