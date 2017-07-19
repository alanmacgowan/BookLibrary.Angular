import { Component, OnInit } from '@angular/core';
import { Author } from '../models/author.model';
import { Router } from '@angular/router';

@Component({
    selector: 'app-authorlist',
    templateUrl: './authorlist.component.html'
})
export class AuthorListComponent implements OnInit {

    authors: Author[];

    constructor(private router: Router) {

    }

    ngOnInit() {
        this.authors = [
            { id: 1, firstName: 'Alan', lastName: 'Macgowan', birthDate: new Date("February 4, 1977 00:00:00"), gender: 'Male', country: 'Argentina', about: 'bla bla bla', image: '' },
            { id: 2, firstName: 'Juan', lastName: 'Perez', birthDate: new Date("March 22, 1932 00:00:00"), gender: 'Male', country: 'Argentina', about: 'bla bla bla', image: '' },
            { id: 3, firstName: 'Pepe', lastName: 'Santos', birthDate: new Date("January 12, 1935 00:00:00"), gender: 'Male', country: 'Mexico', about: 'bla bla bla 1', image: '' },
            { id: 4, firstName: 'John', lastName: 'Muller', birthDate: new Date("February 14, 1971 00:00:00"), gender: 'Female', country: 'USA', about: 'bla bla bla', image: '' },
        ];
    }

    editAuthor(author: Author){
        let link = ['/authors', author.id];
        this.router.navigate(link);
    }
}