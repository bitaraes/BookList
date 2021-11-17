import { Book } from './../../models/book';
import { ApiService } from './../../services/api.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-books-add',
  templateUrl: './books-add.component.html',
  styleUrls: ['./books-add.component.css']
})
export class BooksAddComponent implements OnInit {
  addBook!: FormGroup;
  book!: Book;

  constructor(private formBuilder: FormBuilder, private apiService: ApiService) { }

  ngOnInit(): void {
    this.addBook = this.formBuilder.group({
      bookName: [null, [Validators.required]],
      price: [null, Validators.required],
      category: [null, Validators.required],
      author: [null, Validators.required]
    })
  }

  sendBook(){
    this.book = this.addBook.value;
    this.apiService.addBook(this.book)
  }
}
