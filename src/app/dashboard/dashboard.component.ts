import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'my-dashboard',
  templateUrl: './dashboard.component.html'
})
export class DashboardComponent implements OnInit {

  constructor() {
  
  }

  ngOnInit() {
    console.log('Hello Home');
  }

}
