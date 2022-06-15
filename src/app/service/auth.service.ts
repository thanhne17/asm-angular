import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IUer } from '../model/user';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  url: string = " http://localhost:3000/" 
  constructor(
    private http: HttpClient
  ) { }

  signUp (data: IUer):Observable<IUer> {
    return this.http.post<IUer>(`${this.url}/signup`, data)
  };

  signIn (data: IUer):Observable<IUer> {
    return this.http.post<IUer>(`${this.url}/signin`, data)
  }
}
