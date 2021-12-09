import { Component, forwardRef, Input, OnInit } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'app-input-fields',
  templateUrl: './input-fields.component.html',
  styleUrls: ['./input-fields.component.css'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => InputFieldsComponent),
      multi: true,
    },
  ],
})
export class InputFieldsComponent implements ControlValueAccessor {
  @Input() inputType: string = 'text';
  @Input() inputName: string = '';
  @Input() inputText: string = '';
  @Input() inputId: string = '';
  @Input() editingEnable: boolean = false;

  inputValue: string = '';
  onChange: any = (inputValue: string) => {};
  onTouched: any = () => {};

  touched: boolean = false;
  constructor() {}

  writeValue(inputValue: string): void {
    this.inputValue = inputValue;
  }
  registerOnChange(onChange: any): void {
    this.onChange = onChange;
  }
  registerOnTouched(onTouched: any): void {
    this.onTouched = onTouched;
  }

  valueChanged(event: any) {
    this.inputValue = event.target.value;
    this.onChange(this.inputValue);
  }
  hasTouched() {
    if (!this.touched) {
      this.onTouched();
      this.touched = true;
    }
  }
}
