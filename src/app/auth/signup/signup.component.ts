import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ApiService } from './../../services/api.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
})
export class SignupComponent implements OnInit {
  registerForm!: FormGroup;

  constructor(
    private apiService: ApiService,
    private formBuilder: FormBuilder,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.registerForm = this.formBuilder.group({
      userName: [null, Validators.required],
      password: [null, Validators.required],
    });
  }

  register() {
    this.apiService.register(this.registerForm.value).subscribe((res) => {
      if (res.status == 200) {
        alert('Cadastro efetuado com sucesso');
        this.router.navigate(['']);
      } else {
        alert(
          'Não foi possível efetuar o cadastro, confira os dados e tente novamente'
        );
      }
    });
  }
}
