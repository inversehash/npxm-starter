import { Component } from '@angular/core'
import { FormGroup } from '@angular/forms'
import { AdminUpdateProviderInput, Role } from '@demo/web/core/data-access'
import { WebUiFormField } from '@demo/web/ui/form'
import { AdminProviderEditStore } from './admin-provider-edit.store'
import { Router } from '@angular/router'

@Component({
  template: `
    <ng-container *ngIf="vm$ | async as vm">
      <ui-page-header [title]="'Edit provider ' + vm.item?.name" linkPath=".." linkTitle="Back"></ui-page-header>
      <ng-container *ngIf="vm.item">
        <div class="dark:bg-gray-800 px-6 py-4 rounded-md">
          <ui-form [form]="form" [fields]="fields" [model]="vm.item" (submitForm)="updateProvider($event)">
            <ui-button label="Submit" type="submit"></ui-button>
            <ui-button [class]="'mx-4 inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-red-300 bg-red-900 border-red-600 disabled:opacity-50 disabled:cursor-not-allowed hover:bg-red-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500'" label="Delete" (click)="deleteProvider($event)"></ui-button>
          </ui-form>
        </div>
      </ng-container>
    </ng-container>
  `,
  providers: [AdminProviderEditStore],
})
export class AdminProviderEditComponent {
  readonly vm$ = this.store.vm$
  readonly form = new FormGroup({})
  fields = [
    WebUiFormField.input('name', { label: 'Name', required : true}),
    WebUiFormField.input('firstName', { label: 'Middle Name' }),
    WebUiFormField.input('lastName', { label: 'Last Name' }),
  ]

  constructor(private readonly store: AdminProviderEditStore,private router:Router) {}

  updateProvider(input: AdminUpdateProviderInput) {
    const { name } = input
    this.store.updateProviderEffect({ name })
  }
  deleteProvider(input: AdminUpdateProviderInput) {
		const { name } = input
		this.store.deleteProviderEffect({ name })
		this.router.navigateByUrl('/admin/providers');
	}
}
