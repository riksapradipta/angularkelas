import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from './card/card.component';
import { InputComponent } from './input/input.component';



@NgModule({
  declarations: [
    CardComponent,
    InputComponent
  ],
  exports: [
    CardComponent,
    InputComponent
  ],
  imports: [
    CommonModule
  ]
})
export class ComponentsModule { }
