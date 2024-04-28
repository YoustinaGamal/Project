import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from './../../Services/auth.service';
import { response } from 'express';
import { Route, Router } from '@angular/router';
import { error } from 'console';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent {
  constructor(private _AuthService: AuthService, private _Router: Router) {}
  loginForm: FormGroup = new FormGroup({
    userName: new FormControl(null, [Validators.required]),
    password: new FormControl(null, [Validators.required]),
  });

  login() {
    console.log(this.loginForm.value);
    try {
      this._AuthService.login(this.loginForm.value).subscribe({
        next: (response) => {
          if (response.message == 'success') {
            this._Router.navigate(['/Home']);
          }
        },
        error: (err) => {
          console.log(err.error.errors.msg);
        },
      });
    } catch (error) {
      console.log(error);
    }
  }
}
