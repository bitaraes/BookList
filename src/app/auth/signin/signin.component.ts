import { Router } from '@angular/router';
import { TokenService } from '../../services/token.service';
import { ApiService } from '../../services/api.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { HttpResponse } from '@angular/common/http';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css'],
})
export class SigninComponent implements OnInit {
  loginForm!: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private apiService: ApiService,
    private tokenService: TokenService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      login: ['admin', Validators.required],
      password: ['#Admin123', Validators.required],
    });
  }

  login() {
    this.apiService.login(this.loginForm.value).subscribe((res: any) => {
      if (res.status == 200) {
        this.tokenService.login(res.body.token);
        this.router.navigate(['/home']);
      }
    });
  }
}
