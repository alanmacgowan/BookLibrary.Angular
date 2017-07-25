import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'app-login',
    templateUrl: './register.component.html'
})
export class RegisterComponent implements OnInit {

    constructor(private router: Router) {

    }

    ngOnInit() {
    }

    register() {
        this.router.navigate(['/dashboard']);
    }

}
