import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class TokenService {
  private token!: string | null;
  constructor() {}

  login(token: string) {
    localStorage.setItem('token', token);
  }
  logout() {
    localStorage.clear();
  }
  getToken() {
    return localStorage.getItem('token');
  }
  isLogged() {
    this.token = localStorage.getItem('token');
    return this.token;
  }
}
