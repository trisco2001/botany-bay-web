import { Component } from '@angular/core';
import { BlizzyAuthService } from './core/services/blizzy-auth.service';

@Component({
  selector: 'app-root',
  template: `
    <app-header></app-header>

    <router-outlet></router-outlet>

    <app-footer></app-footer>
  `,
  styles: []
})
export class AppComponent {
  title = 'botany-bay-web';

  constructor(private blizzyAuthService: BlizzyAuthService) {}

  ngOnInit() {
    // Commenting out for now; not needed yet.
    // this.blizzyAuthService.refreshToken();
  }
}
