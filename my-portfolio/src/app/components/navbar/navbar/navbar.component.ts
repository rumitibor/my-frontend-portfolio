import { Component } from '@angular/core';
import { ScreenService } from '../../../services/screen/screen.service';

@Component({
  selector: 'app-navbar',

  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent {
  // app.component.ts
  constructor(public screen: ScreenService) {
    window.addEventListener('resize', () => this.screen.updateSize());
  }

  scrollTo(sectionId: string) {
    const el = document.getElementById(sectionId);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  }
}
