import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import {Auth} from './auth';
import { of } from 'rxjs/observable/of';
import { catchError, map, tap } from 'rxjs/operators';

@Injectable()
export class AuthService {

  constructor(private http: HttpClient) { }
  signup(data) {
    return this.http.post('http://lara.dev/api/user', data, {
      headers: new HttpHeaders({'X-Requested-With': 'XMLHttpRequest', 'Access-Control-Allow-Origin': '*'})
    });
  }
  signin(data): Observable<Auth> {
    return this.http.post<Auth>('http://lara.dev/api/user/signin', data, {
      headers: new HttpHeaders({'X-Requested-With': 'XMLHttpRequest', 'Access-Control-Allow-Origin': '*', 'Origin': 'http://lara.dev'})
    }).pipe(
      tap((auth: Auth) => window.localStorage.setItem('token', auth.token))
      /*catchError(this.handleError('signin', []))*/
    );
  }
  logOut(): void {
    window.localStorage.removeItem('token');
  }
  checkAuth(): boolean {
    const token = window.localStorage.getItem('token');
    if (token) {
      return true;
    }
    return false;
  }
  private  handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      console.error(error); // log to console instead

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
}
