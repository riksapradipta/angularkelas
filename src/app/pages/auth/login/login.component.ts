import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HotToastService } from '@ngneat/hot-toast';
import { AuthService, requestLogin } from '../../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username!: string;
  password!: string;
  isLogin: boolean = false;

  constructor(
    private authService: AuthService,
    private toastService: HotToastService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  doLogin() {
    this.isLogin = true
    const payload: requestLogin  = {
      username: this.username ? this.username : "",
      password: this.password ? this.password : ""
    }
    console.log('payload', payload);
    this.authService.login(payload)
    .pipe(
      this.toastService.observe(
        {
          loading: 'Tunggu Sebentar...',
          success: (s) => 'Login Berhasil',
          error: (e) => 'Something did not work, reason: ' + e,
        }
      )
    )
    .subscribe( 
      res => {
        console.log(res);
        this.isLogin = false
        localStorage.setItem('token', res.access_token)
        this.router.navigate(['/dashboard'])
      }, err => {
        console.error(err)
        this.isLogin = false
      })
  }

}
