import { Component, Input } from '@angular/core';

interface Employe {
  nama: string
  umur: number
  status: boolean
}

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent {

  @Input() data?: Employe;

  constructor() { }

}
