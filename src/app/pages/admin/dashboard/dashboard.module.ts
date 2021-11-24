import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';
import { RouterModule } from '@angular/router';
import { ProductService } from 'src/app/services/product.service';
import { MatTableModule } from '@angular/material/table';
import { IsactivePipe } from 'src/app/services/isactive.pipe';
import { DashboardInputComponent } from './dashboard-input/dashboard-input.component';
import { MatDialogModule } from '@angular/material/dialog';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    DashboardComponent,
    IsactivePipe,
    DashboardInputComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        component: DashboardComponent
      }
    ]),
    FormsModule,
    ReactiveFormsModule,
    MatTableModule,
    MatDialogModule
  ],
  providers: [ProductService],
  entryComponents: [DashboardInputComponent]
})
export class DashboardModule { }
