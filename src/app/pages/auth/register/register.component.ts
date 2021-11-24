import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  registerForm!: FormGroup

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private router: Router
  ) { 
    this.initForm()
  }

  ngOnInit(): void { }

  initForm() {
    this.registerForm = this.fb.group({
      name: ['', [Validators.required, Validators.maxLength(10)]],
      email: ['', [Validators.required, Validators.email]],
      username: ['', [Validators.required]],
      password: ['', [Validators.required]]
    })
  }

  get errorControl() {
    return this.registerForm.controls
  }

  doRegister() {
    console.log(this.registerForm.value);
    this.authService.register(this.registerForm.value).subscribe( 
      res => {
        console.log(res);
        this.router.navigate(['/login'])
      }, err => {
        console.error(err);
      })
  }

}
