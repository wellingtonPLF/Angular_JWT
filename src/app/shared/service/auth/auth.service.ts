import { HttpClient, HttpEvent } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, throwError } from 'rxjs';
import { Auth } from '../../model/Auth';
import { StatusResult } from '../../interfaces/I_StatusResult';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  URL_Auth = 'http://localhost:8080/usuarios'

  constructor(private httpClient: HttpClient) {
  }

  public authentication(auth: Auth): Observable<StatusResult<number>>{
    return this.httpClient.post<StatusResult<number>>(`${this.URL_Auth}/authentication`, 
    Auth.refract(auth)).pipe(
      catchError( error => {
          return throwError(() => error.error);
        })
      );
  }

  public isLoggedIn(): Observable<boolean>{
    return this.httpClient.get<boolean>(`${this.URL_Auth}/isLoggedIn`).pipe(
      catchError( error => {
        return throwError(() => error);
      })
    );
  } 
  
  public authInsert(auth: Auth): Observable<StatusResult<Auth>>{
    return this.httpClient.post<StatusResult<Auth>>(`${this.URL_Auth}/authInsert`, 
    Auth.refract(auth)).pipe(
      catchError( error => {
          return throwError(() => error.error);
        })
      );
  }

  public authUpdate(auth: Auth): Observable<StatusResult<string>>{
    return this.httpClient.post<StatusResult<string>>(`${this.URL_Auth}/authUpdate`, 
    Auth.refract(auth)).pipe(
      catchError( error => {
          return throwError(() => error.error);
        })
      );
  }

  public acceptAuth(auth: Auth): Observable<StatusResult<string>>{
    return this.httpClient.post<StatusResult<string>>(`${this.URL_Auth}/acceptAuth`, 
    Auth.refract(auth)).pipe(
      catchError( error => {
          return throwError(() => error.error);
        })
      );
  }

  public refreshToken(): Observable<StatusResult<string>>{
    return this.httpClient.get<StatusResult<string>>(`${this.URL_Auth}/refresh`).pipe(
      catchError( error => {
        return throwError(() => error.error);
      })
    );
  }

  public logOut(): Observable<StatusResult<string>>{
    return this.httpClient.get<StatusResult<string>>(`${this.URL_Auth}/logout`).pipe(
      catchError( error => {
        return throwError(() => error);
      })
    );
  }
}
