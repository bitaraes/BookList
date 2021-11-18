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

  getBook(id: string){
    return this.http.get(API+id)
  }

  addBook(book: Book){
    return this.http.post(API, book)
  }

  deleteBook(id: string) {
    return this.http.delete(API+id)
  }

  updateBook(id: string, book: Book){
    return this.http.put(API + id, book)
  }
}
