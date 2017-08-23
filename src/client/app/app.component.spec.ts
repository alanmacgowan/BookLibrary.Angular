import { TestBed, async } from '@angular/core/testing';
import { APP_BASE_HREF } from '@angular/common';
import { AppModule } from './app.module';
import { AppComponent } from './app.component';

    describe('AppComponent', () => {
        beforeEach(async(() => {
            TestBed.configureTestingModule({
                providers: [{provide: APP_BASE_HREF, useValue: '/'}],
                imports: [
                    AppModule
                ]
            }).compileComponents();
        }));

        it('should create the app', async(() => {
            const fixture = TestBed.createComponent(AppComponent);
            const app = fixture.debugElement.componentInstance;
            expect(app).toBeTruthy();
        }));

    });
