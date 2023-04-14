import { HttpClient } from '@angular/common/http';
import { Injectable, Type } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError} from 'rxjs/operators';
import { StatusResult } from '../../interfaces/I_StatusResult';
import { User } from '../../model/User';
import { UserResponse } from '../../types/UserType';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  URL_User = 'http://localhost:8080/usuarios'

  constructor(private httpClient: HttpClient) {
  }

  public listAll(): Observable<StatusResult<UserResponse []>>{
    return this.httpClient.get<StatusResult<UserResponse []>>(this.URL_User).pipe(
      catchError( error => {
        return throwError(() => error.error);
      })
    );
  }

  public getAuthenticatedUser(): Observable<StatusResult<UserResponse>>{
    return this.httpClient.get<StatusResult<UserResponse>>(`${this.URL_User}/getUser`).pipe(
      catchError( error => {
        return throwError(() => error.error);
      })
    );
  }

  public insert(user: User): Observable<StatusResult<User>>{
    return this.httpClient.post<StatusResult<User>>(this.URL_User, User.refract(user)).pipe(
      catchError( error => {
        return throwError(() => error.error);
      })
    );
  }

  public update(user: UserResponse): Observable<StatusResult<UserResponse>> {
    return this.httpClient.put<StatusResult<UserResponse>>(this.URL_User, user).pipe(
      catchError( error => {
        return throwError(() => error.error);
      })
    );
  }

  public delete(user: UserResponse): Observable<StatusResult<string>>{
    return this.httpClient.delete<StatusResult<string>>(`${this.URL_User}/${user.id}`).pipe(
      catchError( error => {
        return throwError(() => error.error);
      })
    );
  }
}
