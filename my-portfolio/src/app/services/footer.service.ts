// import { Injectable } from '@angular/core';
// import { HttpClient } from '@angular/common/http';
// import { Observable, catchError, map, of } from 'rxjs';

// /** A lábléc a Quote típust várja */
// export interface Quote {
//   content: string;
//   author: string;
// }

// @Injectable({ providedIn: 'root' })
// export class FooterService {
//   /** ① geek-joke (JSON) • ② programming-quote (JSON) */
//   private readonly JOKE_API =
//     'https://geek-jokes.sameerkumar.website/api?format=json';
//   private readonly QUOTE_API =
//     'https://programming-quotes-api.vercel.app/api/random';

//   constructor(private http: HttpClient) {}

//   /** Véletlenszerűen vicc _vagy_ idézet  —  ugyanarra a Quote-formára térítve */
//   getRandom(): Observable<Quote> {
//     const pickJoke = Math.random() < 0.5; // 50–50 %
//     const url = pickJoke ? this.JOKE_API : this.QUOTE_API;

//     return this.http.get<any>(url).pipe(
//       map(
//         (res) =>
//           pickJoke
//             ? { content: res.joke, author: 'Geek-Jokes API' } // :contentReference[oaicite:0]{index=0}
//             : { content: res.en, author: res.author } // :contentReference[oaicite:1]{index=1}
//       ),
//       catchError((err) => {
//         console.error('Quote/Joke API error:', err);
//         /* offline tartalék */
//         return of({
//           content:
//             'Software is like entropy: It is difficult to grasp, weighs nothing, and obeys the Second Law of Thermodynamics; i.e. it always increases.',
//           author: 'Norman Augustine',
//         });
//       })
//     );
//   }
// }

import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, catchError, map, of } from 'rxjs';

export interface Quote {
  content: string;
  author: string;
}

@Injectable({ providedIn: 'root' })
export class FooterService {
  private readonly JOKE_API =
    'https://v2.jokeapi.dev/joke/Programming?type=single';
  private readonly QUOTE_API =
    'https://programming-quotes-api.herokuapp.com/quotes/random';

  constructor(private http: HttpClient) {}

  getRandom(): Observable<Quote> {
    /* 50-50 % eséllyel vicc vagy idézet */
    const jokeMode = Math.random() < 0.5;
    const baseUrl = jokeMode ? this.JOKE_API : this.QUOTE_API;

    /* ↻ cache-kerülő paraméter, hogy MINDIG új választ kapjunk */
    const url = `${baseUrl}&t=${Date.now()}`;
    const hdrs = new HttpHeaders({ 'Cache-Control': 'no-cache' });

    return this.http.get<any>(url, { headers: hdrs }).pipe(
      map(
        (res) =>
          jokeMode
            ? { content: res.joke, author: 'JokeAPI.dev' }
            : { content: res.quote, author: res.author } // <—  API válaszmezők
      ),
      catchError((err) => {
        console.error('Joke/Quote API error:', err);
        /* offline fallback, hogy ne maradjon üres a kártya */
        return of({
          content:
            'There are only two hard things in Computer Science: cache invalidation and naming things.',
          author: 'Phil Karlton',
        });
      })
    );
  }
}
