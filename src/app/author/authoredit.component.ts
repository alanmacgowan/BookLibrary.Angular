import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-authoredit',
  templateUrl: './authoredit.component.html'
})
export class AuthorEditComponent implements OnInit {

  constructor(private router: Router) {

  }

  ngOnInit() {
  }

  cancelSave() {
    this.router.navigate(['/authors']);
  }

  save() {

  }

}