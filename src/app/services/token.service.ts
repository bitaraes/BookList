import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class TokenService {
  constructor() {}

  login(token: string) {
    localStorage.setItem('token', token);
  }
  logout() {
    localStorage.removeItem('token');
  }
  getToken() {
    return localStorage.getItem('token');
  }
  isLogged() {
    return new BehaviorSubject<boolean>(!!localStorage.getItem('token'));
  }
}
