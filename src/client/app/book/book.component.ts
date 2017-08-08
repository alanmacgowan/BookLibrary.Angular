import { Component } from '@angular/core';

import { BookService } from './book.service';

@Component({
  template: `<router-outlet></router-outlet>`,
  providers: [BookService]
})
export class BookComponent  {}