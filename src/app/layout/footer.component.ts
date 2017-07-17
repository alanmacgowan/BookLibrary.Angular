import { Component, OnInit } from '@angular/core';

@Component({
    // moduleId: module.id,
    selector: 'app-footer',
    templateUrl: 'footer.component.html'
})
export class FooterComponent implements OnInit {

    currentYear: string;

    constructor() { }

    ngOnInit() {
        var d = new Date();
        this.currentYear = d.getFullYear().toString();
    }

}