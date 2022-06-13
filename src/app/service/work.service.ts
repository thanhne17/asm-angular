import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IWork } from '../model/work';

@Injectable({
  providedIn: 'root'
})
export class WorkService {
  url: string = "http://localhost:3000/works"
  constructor(
    private http: HttpClient
  ) { }

  getWork (id: number):Observable<IWork> {
    return this.http.get<IWork>(`${this.url}/${id}?_expand=categoriesWork`) 
  };

  getWorks ():Observable<IWork[]> {
    return this.http.get<IWork[]>(`${this.url}?_expand=categoriesWork`)
  };

  getWorksHome ():Observable<IWork[]> {
    return this.http.get<IWork[]>(`${this.url}?_expand=categoriesWork&_limit=2`)
  };

  addWork (data: IWork):Observable<IWork> {
    return this.http.post<IWork>(this.url, data)
  };

  editWork (id:number, data: IWork):Observable<IWork> {
    return this.http.put<IWork>(`${this.url}/${id}`, data)
  };

  removeWork (id:number):Observable<IWork> {
    return this.http.delete<IWork>(`${this.url}/${id}`)
  }
}
