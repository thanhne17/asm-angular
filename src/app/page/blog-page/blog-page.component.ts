import { Component, OnInit } from '@angular/core';
import { IBlog } from 'src/app/model/blog';
import { BlogService } from 'src/app/service/blog.service';

@Component({
  selector: 'app-blog-page',
  templateUrl: './blog-page.component.html',
  styleUrls: ['./blog-page.component.css']
})
export class BlogPageComponent implements OnInit {
  blogList!: any
  constructor(
    private blogService: BlogService
  ) { }

  ngOnInit(): void {
    this.showBlog()
  }

  showBlog () {
    this.blogService.getBlogs().subscribe(data => this.blogList = data)
  }

}
