import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'
import { RouterModule } from '@angular/router'
import { WebUiButtonModule } from '@demo/web/ui/button'
import { WebUiFormModule } from '@demo/web/ui/form'
import { AccountUiPasswordFormComponent } from './account-ui-password-form.component'

@NgModule({
  exports: [AccountUiPasswordFormComponent],
  declarations: [AccountUiPasswordFormComponent],
  imports: [CommonModule, RouterModule, WebUiFormModule, WebUiButtonModule],
})
export class AccountUiPasswordFormModule {}
