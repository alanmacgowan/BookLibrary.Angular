import { platformBrowserDynamic }    from '@angular/platform-browser-dynamic';
import { AppModule } from './app/app.module';
import { enableProdMode } from '@angular/core';

enableProdMode();
platformBrowserDynamic().bootstrapModule(AppModule)
  .then( () => console.log(`Bootstrap success`))
  .catch(err => console.error(err));
