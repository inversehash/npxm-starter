import { Component } from '@angular/core'

@Component({
  template: `
    <ui-sidebar-page headerTitle="Admin" [links]="links">
      <router-outlet></router-outlet>
    </ui-sidebar-page>
  `,
})
export class WebAdminFeatureComponent {
  links = [
    { label: 'Dashboard', path: 'dashboard', icon: '' },
{ label: 'Providers', path: 'providers', icon: '' },
{ label: 'Reporters', path: 'reporters', icon: '' },
{ label: 'Companys', path: 'companys', icon: '' },
    { label: 'Users', path: 'users', icon: '' },
  ]
}
