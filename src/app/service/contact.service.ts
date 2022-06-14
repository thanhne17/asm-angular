import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IContact } from '../model/contact';

@Injectable({
  providedIn: 'root'
})
export class ContactService {
  url:string = "http://localhost:3000/contact"
  constructor(
    private http: HttpClient
  ) { }

  getContact ():Observable<IContact[]> {
    return this.http.get<IContact[]>(this.url)
  }
}
