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

  getBlog (id: number) {
    return this.http.get(this.url) 
  };

  getBlogs ():Observable<IBlog[]> {
    return this.http.get<IBlog[]>(this.url)
  };


}
