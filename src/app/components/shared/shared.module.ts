import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InputFieldsComponent } from './input-fields/input-fields.component';
import { InvalidFieldMessageComponent } from './invalid-field-message/invalid-field-message.component';
import { SubmitButtonComponent } from './submit-button/submit-button.component';
import { CategorySelectComponent } from './category-select/category-select.component';

@NgModule({
  declarations: [
    InputFieldsComponent,
    InvalidFieldMessageComponent,
    SubmitButtonComponent,
    CategorySelectComponent,
  ],
  imports: [CommonModule],
  exports: [
    InputFieldsComponent,
    InvalidFieldMessageComponent,
    SubmitButtonComponent,
    CategorySelectComponent,
  ],
})
export class SharedModule {}
