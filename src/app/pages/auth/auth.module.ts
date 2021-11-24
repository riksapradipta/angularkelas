import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthComponent } from './auth.component';
import { RouterModule } from '@angular/router';
import { SharedModule } from 'src/app/shared/shared.module';



@NgModule({
  declarations: [
    AuthComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild([
      {
        path: '',
        component: AuthComponent,
        children: [
          {
            path: 'login',
            loadChildren: () => import('./login/login.module').then( m => m.LoginModule)
          },
          {
            path: 'register',
            loadChildren: () => import('./register/register.module').then( m => m.RegisterModule)
          }
        ]
      }
    ])
  ]
})
export class AuthModule { }
