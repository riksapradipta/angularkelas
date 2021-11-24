import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ManageusersComponent } from './manageusers.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { ComponentsModule } from 'src/app/components/components.module';



@NgModule({
  declarations: [
    ManageusersComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    ComponentsModule,
    RouterModule.forChild([
      {
        path: '',
        component: ManageusersComponent
      }
    ])
  ]
})
export class ManageusersModule { }
