// import { Component, HostBinding, OnDestroy, OnInit } from '@angular/core';
// import { Router, NavigationEnd } from '@angular/router';
// import { Subject, interval } from 'rxjs';
// import { filter, startWith, switchMap, takeUntil } from 'rxjs/operators';
// import { FooterService, Quote } from '../../../services/footer.service';
// import { animate, style, transition, trigger } from '@angular/animations';

// @Component({
//   selector: 'app-footer',
//   templateUrl: './footer.component.html',
//   styleUrls: ['./footer.component.scss'],
//   animations: [
//     trigger('quoteAnim', [
//       transition(':enter', [
//         style({ opacity: 0, transform: 'translateY(10px)', color: '#ae8654' }),
//         animate(
//           '600ms ease-out',
//           style({ opacity: 1, transform: 'translateY(0)' })
//         ),
//       ]),
//       transition(':leave', [
//         animate(
//           '600ms ease-in',
//           style({
//             opacity: 0,
//             transform: 'translateY(-10px)',
//             color: '#4a3a2e',
//           })
//         ),
//       ]),
//     ]),
//   ],
// })
// export class FooterComponent implements OnInit, OnDestroy {
//   quote: Quote | null = null;

//   readonly currentYear = new Date().getFullYear();

//   @HostBinding('class.fixed') isFixed = false;

//   private readonly destroy$ = new Subject<void>();

//   constructor(private footerService: FooterService, private router: Router) {}

//   ngOnInit(): void {
//     this.setFixedMode(this.router.url);
//     this.router.events
//       .pipe(
//         filter((e): e is NavigationEnd => e instanceof NavigationEnd),
//         takeUntil(this.destroy$)
//       )
//       .subscribe((e) => this.setFixedMode(e.urlAfterRedirects));

//     interval(10_000)
//       .pipe(
//         startWith(0),
//         switchMap(() => this.footerService.getRandom()),
//         takeUntil(this.destroy$)
//       )
//       .subscribe((q) => (this.quote = q));
//   }

//   ngOnDestroy(): void {
//     this.destroy$.next();
//     this.destroy$.complete();
//   }

//   refresh(): void {
//     this.footerService.getRandom().subscribe((q) => (this.quote = q));
//   }

//   private setFixedMode(url: string): void {
//     const clean = url.split(/[?#]/)[0];
//     this.isFixed = clean === '/' || clean === '' || clean.startsWith('/home');
//   }
// }

import { Component, HostBinding, OnInit, OnDestroy } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { FooterService, Quote } from '../../../services/footer.service';
import { Subject, interval } from 'rxjs';
import { filter, startWith, switchMap, takeUntil } from 'rxjs/operators';
import { animate, style, transition, trigger } from '@angular/animations';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
  animations: [
    trigger('quoteAnim', [
      transition(':enter', [
        style({ opacity: 0, transform: 'translateY(10px)', color: '#ae8654' }),
        animate(
          '600ms ease-out',
          style({ opacity: 1, transform: 'translateY(0)' })
        ),
      ]),
      transition(':leave', [
        animate(
          '600ms ease-in',
          style({ opacity: 0, transform: 'translateY(-10px)' })
        ),
      ]),
    ]),
  ],
})
export class FooterComponent implements OnInit, OnDestroy {
  quote: Quote | null = null;
  readonly currentYear = new Date().getFullYear();

  @HostBinding('class.fixed') isFixed = false;

  private readonly destroy$ = new Subject<void>();

  constructor(private footerService: FooterService, private router: Router) {}

  ngOnInit(): void {
    this.setFixedMode(this.router.url);
    this.router.events
      .pipe(
        filter((e): e is NavigationEnd => e instanceof NavigationEnd),
        takeUntil(this.destroy$)
      )
      .subscribe((e) => this.setFixedMode(e.urlAfterRedirects));

    interval(10000)
      .pipe(
        startWith(0),
        switchMap(() => this.footerService.getRandom()),
        takeUntil(this.destroy$)
      )
      .subscribe((quote) => (this.quote = quote));
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

  private setFixedMode(url: string): void {
    const clean = url.split(/[?#]/)[0];
    this.isFixed = clean === '/' || clean === '' || clean.startsWith('/home');
  }
}
