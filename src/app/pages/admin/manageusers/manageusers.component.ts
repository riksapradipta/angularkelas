import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-manageusers',
  templateUrl: './manageusers.component.html',
  styleUrls: ['./manageusers.component.css']
})
export class ManageusersComponent implements OnInit {

  e = [
    {
      nama: 'Dzurrahman',
      umur: 23,
      status: false
    },
    {
      nama: 'Roki',
      umur: 26,
      status: true
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
