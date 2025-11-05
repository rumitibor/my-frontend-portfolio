// screen.service.ts
import { Injectable, HostListener } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class ScreenService {
  private mobile = new BehaviorSubject<boolean>(window.innerWidth < 992);
  isMobile$ = this.mobile.asObservable();

  updateSize() {
    this.mobile.next(window.innerWidth < 992);
  }
}
