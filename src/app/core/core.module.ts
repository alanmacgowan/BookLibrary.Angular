import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { TitleComponent } from './title/title.component';
import { BackToTopComponent } from './backtotop/backtotop.component';
import { HeaderComponent } from './layout/header.component';
import { FooterComponent } from './layout/footer.component';
import { MenuComponent } from './layout/menu.component';
import { CategoryLabelComponent } from './categorylabel/categorylabel.component';

@NgModule({
    imports: [
        CommonModule,
        RouterModule
    ],
    declarations: [
        TitleComponent,
        BackToTopComponent,
        HeaderComponent,
        FooterComponent,
        MenuComponent,
        CategoryLabelComponent
    ],
    exports: [
        TitleComponent,
        BackToTopComponent,
        HeaderComponent,
        FooterComponent,
        MenuComponent,
        CategoryLabelComponent
    ]
})
export class CoreModule {

}
