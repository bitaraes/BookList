import { Component, forwardRef, Input, OnInit } from '@angular/core';
import { NG_VALUE_ACCESSOR, ControlValueAccessor } from '@angular/forms';

@Component({
  selector: 'app-category-select',
  templateUrl: './category-select.component.html',
  styleUrls: ['./category-select.component.css'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => CategorySelectComponent),
      multi: true,
    },
  ],
})
export class CategorySelectComponent implements ControlValueAccessor {
  @Input() selectDisabled: any = false;
  @Input() selectedField: string = 'Book Category';
  categories: string[] = [
    'fantasy',
    'fiction',
    'history',
    'novel',
    'police',
    'romance',
    'others',
  ];

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
