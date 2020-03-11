import { Fact } from './../models/facts';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { catchError, retry } from 'rxjs/operators';

@Injectable()
export class FactsService {
  url = 'https://jsonplaceholder.typicode.com/posts';

  constructor(private http: HttpClient) {}

  getFacts(): Observable<Fact[]> {
    return this.http.get<Fact[]>(this.url).pipe(
      retry(3),
      catchError(err => {
        console.error('ERROR GET FACTS:', err);
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
          console.error('ERROR GET FACTS:', err);
          return of(err);
        })
      );
  }
}
