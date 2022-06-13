import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http"
import { Observable } from 'rxjs';
import { ICateBlog } from '../model/cate-blog';

@Injectable({
  providedIn: 'root'
})
export class CateBlogService {
  url:string = "http://localhost:3000/categoryBlogs";
  constructor(
    private http: HttpClient
  ) { }

  getCate(id:number):Observable<ICateBlog> {
    return this.http.get<ICateBlog>(`${this.url}/${id}`)
  };

  getCates():Observable<ICateBlog[]> {
    return this.http.get<ICateBlog[]>(this.url)
  };
}
