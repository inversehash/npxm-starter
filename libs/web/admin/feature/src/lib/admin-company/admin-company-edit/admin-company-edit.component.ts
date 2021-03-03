import { Component } from '@angular/core'
import { FormGroup } from '@angular/forms'
import { Router } from '@angular/router'
import { AdminUpdateCompanyInput, Role } from '@demo/web/core/data-access'
import { WebUiFormField } from '@demo/web/ui/form'
import { AdminCompanyEditStore } from './admin-company-edit.store'

@Component({
  template: `
    <ng-container *ngIf="vm$ | async as vm">
      <ui-page-header [title]="'Edit company ' + vm.item?.name" linkPath=".." linkTitle="Back"></ui-page-header>
      <ng-container *ngIf="vm.item">
        <div class="dark:bg-gray-800 px-6 py-4 rounded-md">
          <ui-form [form]="form" [fields]="fields" [model]="vm.item" (submitForm)="updateCompany($event)">
            <ui-button label="Submit" type="submit"></ui-button>
            <ui-button [class]="'mx-4 inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-red-300 bg-red-900 border-red-600 disabled:opacity-50 disabled:cursor-not-allowed hover:bg-red-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500'" label="Delete" (click)="deleteCompany($event)"></ui-button>
          </ui-form>
        </div>
      </ng-container>
    </ng-container>
  `,
  providers: [AdminCompanyEditStore],
})
export class AdminCompanyEditComponent {
  readonly vm$ = this.store.vm$
  readonly form = new FormGroup({})
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

  constructor(private readonly store: AdminCompanyEditStore,private router:Router) {}

  updateCompany(input: AdminUpdateCompanyInput) {
    //const { name } = input
    const { name,addressLine1,addressLine2,city,stateOrProvince,postalCode,country,phoneNumber } = input;
    this.store.updateCompanyEffect({ 
      name,addressLine1,addressLine2,city,stateOrProvince,postalCode,country,phoneNumber
    })
  }

  deleteCompany(input: AdminUpdateCompanyInput) {
		const { name } = input
		this.store.deleteCompanyEffect({ name })
		this.router.navigateByUrl('/admin/companys');
	}
}
