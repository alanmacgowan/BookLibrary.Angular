import { NgModule } from '@angular/core';

import { TitleComponent } from './title/title.component';

@NgModule({
    declarations: [
        TitleComponent
    ],
    exports: [
        TitleComponent
    ]
})
export class CoreModule { }