import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ICateWork } from '../model/cate-work';

@Injectable({
  providedIn: 'root'
})
export class CateWorkService {

  url:string = "http://localhost:3000/categoriesWorks";
  constructor(
    private http: HttpClient
  ) { }

  getCate(id:number):Observable<ICateWork> {
    return this.http.get<ICateWork>(`${this.url}/${id}`)
  };

  getCates():Observable<ICateWork[]> {
    return this.http.get<ICateWork[]>(this.url)
  };
}
