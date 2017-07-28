import { Component, OnInit } from '@angular/core';
var pckg = require('../../../../../package.json');

@Component({
    selector: 'app-footer',
    templateUrl: 'footer.component.html'
})
export class FooterComponent implements OnInit {

    currentYear: string;
    version: string;

    constructor() { }

    ngOnInit() {
        let d = new Date();
        this.currentYear = d.getFullYear().toString();
        this.version = pckg.version;
    }

}