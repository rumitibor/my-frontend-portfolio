import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, catchError, map, of } from 'rxjs';

export interface Quote {
  content: string;
  author: string;
}

@Injectable({ providedIn: 'root' })
export class FooterService {
  private readonly QUOTE_API = 'https://api.quotable.io/random';

  constructor(private http: HttpClient) {}

  getRandom(): Observable<Quote> {
    return this.http.get<any>(this.QUOTE_API).pipe(
      map((res) => ({
        content: res.content,
        author: res.author,
      })),
      catchError((err) => {
        console.error('Quote API error:', err);
        return of({
          content:
            'There are only two hard things in Computer Science: cache invalidation and naming things.',
          author: 'Phil Karlton',
        });
      })
    );
  }
}
