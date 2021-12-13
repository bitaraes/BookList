import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InputFieldsComponent } from './input-fields/input-fields.component';
import { InvalidFieldMessageComponent } from './invalid-field-message/invalid-field-message.component';
import { SubmitButtonComponent } from './submit-button/submit-button.component';

@NgModule({
  declarations: [
    InputFieldsComponent,
    InvalidFieldMessageComponent,
    SubmitButtonComponent,
  ],
  imports: [CommonModule],
  exports: [
    InputFieldsComponent,
    InvalidFieldMessageComponent,
    SubmitButtonComponent,
  ],
})
export class SharedModule {}
