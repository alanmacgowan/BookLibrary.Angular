import { TestBed, async, ComponentFixture } from '@angular/core/testing';
import { DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';
import { FooterComponent } from "./footer.component";


describe('FooterComponent', () => {

    let comp: FooterComponent;
    let fixture: ComponentFixture<FooterComponent>;
    let de: DebugElement;
    let el: HTMLElement;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [FooterComponent]
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(FooterComponent);
        comp = fixture.componentInstance;
        de = fixture.debugElement.query(By.css('.copyright'));
        el = de.nativeElement;
    });

    it('should display correctly currentYear', async(() => {
        comp.currentYear = '2017';
        fixture.detectChanges();
        expect(el.textContent).toContain('2017');
    }));

});
