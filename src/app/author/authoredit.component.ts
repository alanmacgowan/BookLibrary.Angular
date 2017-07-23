import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Author } from '../models/author.model';
import { ToastService } from '../core/toast/toast.service';

@Component({
  selector: 'app-authoredit',
  templateUrl: './authoredit.component.html'
})
export class AuthorEditComponent implements OnInit {

  editAuthor: Author = <Author>{};

  private id: any;

  constructor(private router: Router, private route: ActivatedRoute, private toastService: ToastService) {

  }

  ngOnInit() {
    this.id = +this.route.snapshot.params['id'];
  }

  cancelSave() {
    this.router.navigate(['/authors']);
  }

  save() {
    this.toastService.success(`Successfully Saved`);
    this.router.navigate(['/authors']);
  }

}