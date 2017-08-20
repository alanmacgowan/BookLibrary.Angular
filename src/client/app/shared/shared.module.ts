import { NgModule } from '@angular/core';

import { LanguageService } from './language.service';
import { CategoryService } from './category.service';

@NgModule({
    imports: [],
    exports: [],
    declarations: [],
    providers: [LanguageService,
        CategoryService],
})
export class SharedModule { }
