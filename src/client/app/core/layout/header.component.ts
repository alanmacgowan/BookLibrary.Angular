import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: 'header.component.html'
})
export class HeaderComponent implements OnInit {

  constructor(private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
  }

  logOff(){
    // logoff
    this.router.navigate(['/login', { relativeTo: this.route}]);
  }

}