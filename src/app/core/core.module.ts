import { NgModule } from '@angular/core';

import { TitleComponent } from './title/title.component';
import { BackToTopComponent } from './backtotop/backtotop.component';

@NgModule({
    declarations: [
        TitleComponent,
        BackToTopComponent
    ],
    exports: [
        TitleComponent,
        BackToTopComponent
    ]
})
export class CoreModule {

}
