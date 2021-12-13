import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-submit-button',
  templateUrl: './submit-button.component.html',
  styleUrls: ['./submit-button.component.css'],
})
export class SubmitButtonComponent implements OnInit {
  @Input() btnText: string = 'Save';
  @Input() buttonDisabled: boolean = false;
  constructor() {}

  ngOnInit(): void {}
}
