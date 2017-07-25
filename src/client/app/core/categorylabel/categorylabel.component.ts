import { Component, Input, OnInit } from '@angular/core';

@Component({
    selector: 'app-categorylabel',
    template: '<span [class]="getCategoryClass()">{{category | uppercase}}</span>'
})
export class CategoryLabelComponent implements OnInit {

    @Input() category: string;

    constructor() {

    }

    getCategoryClass() {
        let cssClass = '';
        switch (this.category) {
            case 'Comedy': {
                cssClass = 'label label-sm label-success';
                break;
            }
            case 'Drama': {
                cssClass = 'label label-sm label-info';
                break;
            }
            case 'Science Ficiton': {
                cssClass = 'label label-sm label-warning';
                break;
            }
            default: {
                cssClass = 'label label-sm label-success';
                break;
            }
        }
        return cssClass;
    }

    ngOnInit(): void {

    }

}
