import { Component, OnDestroy, OnInit } from '@angular/core';
import { interval, Subscription } from 'rxjs';
import { startWith, switchMap } from 'rxjs/operators';
import { FooterService, Quote } from '../../../services/footer.service';
import { animate, style, transition, trigger } from '@angular/animations';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],

  animations: [
    trigger('quoteAnim', [
      /* belépés */
      transition(':enter', [
        style({ opacity: 0, transform: 'translateY(10px)', color: '#ae8654' }),
        animate(
          '600ms ease-out',
          style({ opacity: 1, transform: 'translateY(0)' })
        ),
      ]),
      /* kilépés – itt sötétül és kifakul */
      transition(':leave', [
        animate(
          '600ms ease-in',
          style({
            opacity: 0,
            transform: 'translateY(-10px)',
            color: '#4a3a2e',
          })
        ),
      ]),
    ]),
  ],
})
export class FooterComponent implements OnInit, OnDestroy {
  quote: Quote | null = null;
  private sub!: Subscription;

  readonly currentYear = new Date().getFullYear();

  constructor(private footerService: FooterService) {}

  ngOnInit(): void {
    /* azonnal + 30 s-enként frissít */
    this.sub = interval(10_000)
      .pipe(
        startWith(0),
        switchMap(() => this.footerService.getRandom())
      )
      .subscribe((q) => (this.quote = q));
  }

  refresh(): void {
    this.footerService.getRandom().subscribe((q) => (this.quote = q));
  }

  ngOnDestroy(): void {
    this.sub?.unsubscribe();
  }
}
