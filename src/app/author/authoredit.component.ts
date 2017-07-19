import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Message } from 'primeng/primeng';

@Component({
  selector: 'app-authoredit',
  templateUrl: './authoredit.component.html'
})
export class AuthorEditComponent implements OnInit {

  msgs: Message[] = [];

  constructor(private router: Router) {

  }

  ngOnInit() {
  }

  cancelSave() {
    this.router.navigate(['/authors']);
  }

  save() {
    this.msgs = [];
    this.msgs.push({ severity: 'success', summary: 'Success Message', detail: 'Order submitted' });
  }

}