import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <app-header></app-header>

    <app-contact></app-contact>
    <app-home></app-home>

    <router-outlet></router-outlet>

    <app-footer></app-footer>
  `,
  styles: []
})
export class AppComponent {
  title = 'botany-bay-web';
}
