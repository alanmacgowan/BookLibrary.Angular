import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Author } from '../models/author.model';

@Component({
  selector: 'app-authoredit',
  templateUrl: './authoredit.component.html'
})
export class AuthorEditComponent implements OnInit {

  editAuthor: Author = <Author>{};

  private id: any;

  constructor(private router: Router, private route: ActivatedRoute) {

  }

  ngOnInit() {
    this.id = +this.route.snapshot.params['id'];
  }

  cancelSave() {
    this.router.navigate(['/authors']);
  }

  save() {

  }

}