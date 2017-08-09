import { Component, OnInit, Input } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Book } from '../models/book.model';
import { BookService } from './book.service';
import { EntityService, ToastService, SpinnerService } from '../core';
import { Logger } from 'angular2-logger/core';

@Component({
  selector: 'app-bookedit',
  templateUrl: './bookedit.component.html'
})
export class BookEditComponent implements OnInit {

  @Input() book: Book;
  editBook: Book = <Book>{};
  private id: any;

  constructor(private router: Router,
    private route: ActivatedRoute,
    private toastService: ToastService,
    private spinnerService: SpinnerService,
    private entityService: EntityService,
    private bookService: BookService) { }

  isAddMode() { return this.id === 'new'; }

  ngOnInit() {
    this.id = this.route.snapshot.params['id'];
    this.getBook();
  }

  private getBook() {
    if (this.id === 0) {
      return;
    };
    if (this.isAddMode()) {
      this.book = <Book>({});
      this.editBook = this.entityService.clone(this.book);
      return;
    }
    this.bookService.getBook(this.id).subscribe(
      (book: Book) => this.setEditBook(book));
  }

  cancelSave() {
    this.gotoBooks();
  }

  private isDirty() {
    return this.entityService.propertiesDiffer(this.book, this.editBook);
  }

  private setEditBook(book: Book) {
    if (book) {
      this.book = book;
      this.editBook = this.entityService.clone(this.book);
    } else {
      this.gotoBooks();
    }
  }

  private gotoBooks() {
    this.router.navigate(['/books']);
  }

  save() {
    let book = this.book = this.entityService.merge(this.book, this.editBook);
    if (this.isAddMode()) {
      this.bookService.addBook(book)
        .subscribe((ret) => {
          if (ret.error) {
            this.toastService.error(`There was an error processing the operation`);
            console.error('ERROR: ' + ret.error);
          } else {
            this.setEditBook(book);
            this.toastService.success(`Successfully added ${book.title}`);
            this.gotoBooks();
          }
        },
        error => {
          this.toastService.error(`There was an error processing the operation`);
          console.error('ERROR: ' + error);
        });
    } else {
      this.bookService.updateBook(this.book)
        .subscribe((ret) => {
          if (ret.error) {
            this.toastService.error(`There was an error processing the operation`);
            console.error('ERROR: ' + ret.error);
          } else {
            this.setEditBook(book);
            this.toastService.success(`Successfully saved ${book.title}`);
            this.gotoBooks();
          }
        },
        error => {
          this.toastService.error(`There was an error processing the operation`);
          console.error('ERROR: ' + error);
        });
    }
  }

}