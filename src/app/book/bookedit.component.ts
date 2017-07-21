import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Book } from '../models/book.model';
import { ToastService } from '../core/toast/toast.service';

@Component({
  selector: 'app-bookedit',
  templateUrl: './bookedit.component.html'
})
export class BookEditComponent implements OnInit {

  editBook: Book = <Book>{};

  private id: any;

  constructor(private router: Router, private route: ActivatedRoute,
    private toastService: ToastService) {

  }

  ngOnInit() {
    this.id = +this.route.snapshot.params['id'];
  }

  cancelSave() {
    this.router.navigate(['/books']);
  }

  save() {
    this.toastService.activate('success', `Successfully Saved`);
  }

}