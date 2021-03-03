import { Component } from '@angular/core'
import { FormGroup } from '@angular/forms'
import { Router } from '@angular/router';
import { AdminUpdateReporterInput, Role } from '@demo/web/core/data-access'
import { WebUiFormField } from '@demo/web/ui/form'
import { AdminReporterEditStore } from './admin-reporter-edit.store'

@Component({
  template: `
    <ng-container *ngIf="vm$ | async as vm">
      <ui-page-header [title]="'Edit reporter ' + vm.item?.name" linkPath=".." linkTitle="Back"></ui-page-header>
      <ng-container *ngIf="vm.item">
        <div class="dark:bg-gray-800 px-6 py-4 rounded-md">
          <ui-form [form]="form" [fields]="fields" [model]="vm.item" (submitForm)="updateReporter($event)">
            <ui-button label="Submit" type="submit"></ui-button>
            <ui-button [class]="'mx-4 inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-red-300 bg-red-900 border-red-600 disabled:opacity-50 disabled:cursor-not-allowed hover:bg-red-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500'" label="Delete" (click)="deleteReporter($event)"></ui-button>
          </ui-form>
        </div>
      </ng-container>
    </ng-container>
  `,
  providers: [AdminReporterEditStore],
})
export class AdminReporterEditComponent {
  readonly vm$ = this.store.vm$
  readonly form = new FormGroup({})
  fields = [
    WebUiFormField.input('name', { label: 'Name' }),
    WebUiFormField.input('addressLine1', { label: 'Address' }),
    WebUiFormField.input('addressLine2', { label: 'Other Address (optional)' }),
    WebUiFormField.input('addressCity', { label: 'City' }),
    WebUiFormField.input('addressState', { label: 'State' }),
    WebUiFormField.input('addressPostalCode', { label: 'Postal Code' }),
    WebUiFormField.input('phoneNumber', { label: 'Phone Number' }),
    WebUiFormField.input('profession', { label: 'Profession' }),
    WebUiFormField.input('faxNumber', { label: 'Fax Number' }),
  ]

  constructor(private readonly store: AdminReporterEditStore,private router: Router) {}

  updateReporter(input: AdminUpdateReporterInput) {
    const { name } = input
    this.store.updateReporterEffect({ name })
  }

  deleteReporter(input: AdminUpdateReporterInput) {
    const { name } = input
    this.store.deleteReporterEffect({ name })
    this.router.navigateByUrl('/admin/reporters');
  }
}
