import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, from, Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { map, switchMap, tap } from 'rxjs/operators';

export interface requestLogin {
  username: string
  password: string
}

interface responseLogin {
  message: string
  access_token: string
}

interface requestRegister extends requestLogin {
  email: string
  name: string
}

interface responsesRegister extends requestRegister{
  userId: string
}

@Injectable()
export class AuthService {

  BASE_API: string = environment.base_api
  isAuthenticated: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false)

  constructor(
    private http: HttpClient
  ) { 
    this.loadToken()
  }

  async loadToken(): Promise<any> {
    const token = localStorage.getItem('token')
    token ? this.isAuthenticated.next(true) : this.isAuthenticated.next(false)
  }

  login(payload: requestLogin): Observable<responseLogin> {
    return this.http.post<responseLogin>(`${this.BASE_API}/users/login`, payload)
    .pipe(
      tap(_ => {
        this.isAuthenticated.next(true);
      })
    )
  }

  register(payload: requestRegister): Observable<responsesRegister> {
    return this.http.post<responsesRegister>(`${this.BASE_API}/users/register`, payload)
  }

}
