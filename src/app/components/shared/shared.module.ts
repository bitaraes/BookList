import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InputFieldsComponent } from './input-fields/input-fields.component';
import { InvalidFieldMessageComponent } from './invalid-field-message/invalid-field-message.component';

@NgModule({
  declarations: [InputFieldsComponent, InvalidFieldMessageComponent],
  imports: [CommonModule],
  exports: [InputFieldsComponent, InvalidFieldMessageComponent],
})
export class SharedModule {}
