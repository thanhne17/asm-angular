import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http"
import { IBlog } from '../model/blog';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BlogService {
  url: string = "http://localhost:3000/blogs"
  constructor(
    private http: HttpClient
  ) { }

  getBlog (id: number):Observable<IBlog> {
    return this.http.get<IBlog>(`${this.url}/${id}?_expand=categoryBlog`) 
  };

  getBlogs ():Observable<IBlog[]> {
    return this.http.get<IBlog[]>(`${this.url}?_expand=categoryBlog`)
  };

  getBlogsHome ():Observable<IBlog[]> {
    return this.http.get<IBlog[]>(`${this.url}?_expand=categoryBlog&_limit=2`)
  };

  addBlog (data: IBlog):Observable<IBlog> {
    return this.http.post<IBlog>(this.url, data)
  };

  editBlog (id:number, data: IBlog):Observable<IBlog> {
    return this.http.put<IBlog>(`${this.url}/${id}`, data)
  };

  removeBlog (id:number):Observable<IBlog> {
    return this.http.delete<IBlog>(`${this.url}/${id}`)
  }


}
