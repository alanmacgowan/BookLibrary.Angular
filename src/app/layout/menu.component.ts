import { Component, OnInit } from '@angular/core';

class MenuItem {
  constructor(public caption: string, public link: any[], public icon: string) { }
}

@Component({
  selector: 'app-menu',
  templateUrl: 'menu.component.html'
})
export class MenuComponent implements OnInit {

  menuItems: MenuItem[];

  constructor() { }

  ngOnInit() {
    this.menuItems = [
      { caption: 'Dashboard', link: ['/dashboard'], icon: 'fa fa-tachometer fa-fw' },
      { caption: 'Books', link: ['/books'], icon: 'fa fa-book fa-fw' },
      { caption: 'Authors', link: ['/authors'], icon: 'fa fa-edit fa-fw' },
      { caption: 'Profile', link: ['/profile'], icon: 'fa fa-cog fa-fw' }
    ];
  }

}
