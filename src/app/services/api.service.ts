import { Book } from './../models/book';
import { API } from './../../environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  getBooks() {
    return this.http.get(API)
  }

  addBook(book: Book){
    this.http.post(API, book).subscribe((e)=> console.log(e)
    )
  }
}
