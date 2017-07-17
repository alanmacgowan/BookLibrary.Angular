import { Component, OnInit } from '@angular/core';

class MenuItem {
  constructor(public caption: string, public link: any[]) { }
}

@Component({
    // moduleId: module.id,
    selector: 'app-menu',
    templateUrl: 'menu.component.html'
})
export class MenuComponent implements OnInit {

  constructor() { }

  menuItems: MenuItem[];

  ngOnInit() {
    this.menuItems = [
      { caption: 'Dashboard', link: ['/dashboard'] },
      { caption: 'Books', link: ['/books'] },
      { caption: 'Authors', link: ['/authors'] },
      { caption: 'Profile', link: ['/profile'] }
      ];
  }

  
}