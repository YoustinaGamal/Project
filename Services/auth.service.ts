import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs'
import { RegisterForm } from '../Interfaces/register-form';
import { LoginForm} from '../Interfaces/login-form'


@Injectable({
  providedIn: 'root',
})
export class AuthService {
  baseUrl : string= "https://localhost:7020"
  constructor(private _HttpClient: HttpClient) {}
  authToken : any;

  // Register Api
  register(registerForm: RegisterForm): Observable <any>{
    return this._HttpClient.post(this.baseUrl + '/api/Auth/Register',registerForm);
  }

  // Login Api
  login(LoginForm:LoginForm):Observable<any>{
    return this._HttpClient.post(this.baseUrl+'/api/Auth/Login',LoginForm)
  }
}
