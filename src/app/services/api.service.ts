import { TokenService } from './token.service';
import { User } from './../models/user';
import { Book } from './../models/book';
import { API } from './../../environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor(private http: HttpClient, private tokenService: TokenService) {}

  getBooks() {
    const resource = 'books/';
    const url = API + resource;
    return this.http.get(url);
  }

  getBook(id: string) {
    const resource = 'books/';
    const url = API + resource + id;
    return this.http.get(url);
  }

  addBook(book: Book) {
    const resource = 'books/';
    const url = API + resource;
    return this.http.post(url, book, {
      headers: { Authorization: `Bearer ${this.tokenService.getToken()}` },
    });
  }

  deleteBook(id: string) {
    const resource = 'books/';
    const url = API + resource + id;
    return this.http.delete(url, {
      headers: {
        Authorization: `Bearer ${this.tokenService.getToken()}`,
        observe: 'response',
      },
    });
  }

  updateBook(id: string, book: Book) {
    const resource = 'books/';
    const url = API + resource + id;
    return this.http.put(url, book, {
      headers: { Authorization: `Bearer ${this.tokenService.getToken()}` },
    });
  }

  login(user: User) {
    console.log(user);

    const resource = 'login/';
    const url = API + resource;
    return this.http.post(url, user, {
      headers: { 'Content-Type': 'Application/Json' },
      observe: 'response',
    });
  }
  register(user: User) {
    const resource = 'create/';
    const url = API + resource;
    return this.http.post(url, user, {
      headers: { 'Content-Type': 'Application/Json' },
      observe: 'response',
    });
  }
}
