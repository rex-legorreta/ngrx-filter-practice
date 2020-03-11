import { Fact } from './../models/facts';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { catchError, retry } from 'rxjs/operators';

@Injectable()
export class FactsService {
  // was not possible to use https://cat-fact.herokuapp.com/facts because it gives a CORS error
  url = 'https://jsonplaceholder.typicode.com/posts';

  constructor(private http: HttpClient) {}

  getFacts(): Observable<Fact[]> {
    return this.http.get<Fact[]>(this.url).pipe(
      retry(3),
      catchError(err => {
        return of(err);
      })
    );
  }

  getFilteredFacts(userId: string): Observable<Fact[]> {
    return this.http
      .get<Fact[]>(this.url, {
        params: {
          userId
        }
      })
      .pipe(
        retry(3),
        catchError(err => {
          return of(err);
        })
      );
  }
}
