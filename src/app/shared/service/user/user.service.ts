import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { StatusResult } from '../../format/StatusResult';
import { AuthUser } from '../../model/AuthUser';
import { User } from '../../model/User';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  URL_User = 'http://localhost:8080/usuarios'

  constructor(private httpClient: HttpClient) { }

  public listAll(): Observable<StatusResult<User []>>{
    return this.httpClient.get<StatusResult<User []>>(this.URL_User).pipe(
      catchError( error => {
        return throwError(() => error.error);
      })
    );
  }

  public findById(id: number): Observable<StatusResult<User>>{
    return this.httpClient.get<StatusResult<User>>(`${this.URL_User}/${id}`).pipe(
      catchError( error => {
        return throwError(() => error.error);
      })
    );
  }

  public validateUser(user: AuthUser): Observable<any>{
    return this.httpClient.get<StatusResult<User>>(
      `${this.URL_User}/validarSenha?username=${user.username}&password=${user.password}`).pipe(
        catchError( error => {
          return throwError(() => error.error);
        })
      );
  }

  public insert(user: User): Observable<StatusResult<User>>{
    return this.httpClient.post<StatusResult<User>>(this.URL_User, user.refract()).pipe(
      catchError( error => {
        return throwError(() => error.error);
      })
    );
  }

  public update(user: User): Observable<StatusResult<User>>{
    return this.httpClient.put<StatusResult<User>>(this.URL_User, user.refract()).pipe(
      catchError( error => {
        return throwError(() => error.error);
      })
    );
  }

  public delete(id: number): Observable<StatusResult<User>>{
    return this.httpClient.delete<StatusResult<User>>(`${this.URL_User}/${id}`).pipe(
      catchError( error => {
        return throwError(() => error.error);
      })
    );
  }
}
