import { Component } from '@angular/core';

@Component({
  selector: 'story-404',
  template: `
    <div class="cover">
        <h1>Resource not found <small>Error 404</small></h1>
        <p class="lead">The requested resource could not be found but may be available again in the future.</p>
    </div>
  `
})
export class PageNotFoundComponent { }