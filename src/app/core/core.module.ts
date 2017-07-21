import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { TitleComponent } from './title/title.component';
import { BackToTopComponent } from './backtotop/backtotop.component';
import { HeaderComponent } from './layout/header.component';
import { FooterComponent } from './layout/footer.component';
import { MenuComponent } from './layout/menu.component';
import { CategoryLabelComponent } from './categorylabel/categorylabel.component';
import { ToastModule } from './toast/toast.module';

@NgModule({
    imports: [
        CommonModule,
        RouterModule,
        ToastModule
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
        CategoryLabelComponent,
        ToastModule
    ]
})
export class CoreModule {

}
