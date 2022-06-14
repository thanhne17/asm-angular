import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IUer } from '../model/user';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  url: string = " http://localhost:3000/users" 
  constructor(
    private http: HttpClient
  ) { }

  signUp (data: IUer):Observable<IUer> {
    return this.http.post<IUer>(this.url, data)
  };

  signIn (data: IUer):Observable<IUer> {
    return this.http.post<IUer>(this.url, data)
  }
}
