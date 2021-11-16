import { Book } from './../../models/book';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})
export class CardsComponent implements OnInit {
  @Input() book!: Book;

  constructor() { }

  ngOnInit(): void {
  }

}
