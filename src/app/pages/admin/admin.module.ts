import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminComponent } from './admin.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    AdminComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        component: AdminComponent,
        children: [
          {
            path: 'dashboard',
            loadChildren: () => import('./dashboard/dashboard.module').then( m => m.DashboardModule)
          },
          {
            path: 'manageusers',
            loadChildren: () => import('./manageusers/manageusers.module').then( m => m.ManageusersModule)
          },
          {
            path: 'exercise1',
            loadChildren: () => import('./exercise1/exercise1.component').then( m => m.Exercise1Module)
          }
        ]
      }
    ])
  ]
})
export class AdminModule { }
