import { Directive, ElementRef, Input, Renderer, OnInit } from '@angular/core';

@Directive({ selector: '[book-category]' })
export class CategoryDirective implements OnInit {

    @Input('book-category') categoryType: string;

    constructor(private el: ElementRef, private renderer: Renderer) {

    }

    ngOnInit() {
        this.setCategoryClass();
    }

    setCategoryClass() {
        let cssClass = '';
        switch (this.categoryType) {
            case 'Comedy': {
                cssClass = 'label-success';
                break;
            }
            case 'Drama': {
                cssClass = 'label-info';
                break;
            }
            case 'Science Ficiton': {
                cssClass = 'label-warning';
                break;
            }
            default: {
                cssClass = 'label-success';
                break;
            }
        }
        this.renderer.setElementClass(this.el.nativeElement, cssClass, true);
    }

}
