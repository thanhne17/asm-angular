import { Component, OnInit } from '@angular/core';
import { IBlog } from 'src/app/model/blog';
import { BlogService } from 'src/app/service/blog.service';
import { CateBlogService } from 'src/app/service/cate-blog.service';

@Component({
  selector: 'app-blog-page',
  templateUrl: './blog-page.component.html',
  styleUrls: ['./blog-page.component.css']
})
export class BlogPageComponent implements OnInit {
  blogList!: any;
  cateList!: any;
  abc!: any
  constructor(
    private blogService: BlogService,
    private cateService: CateBlogService
  ) { }

  ngOnInit(): void {
    this.showBlog()
  }
  
  showBlog () {
    this.blogService.getBlogs().subscribe(data => this.blogList = data)
    this.cateService.getCates().subscribe((data)=>this.cateList = data)
  }

  onFilter (id:number) {
    this.cateService.getBlogByCate(id).subscribe(data=>{
      this.abc = data
      this.blogList = this.abc.blogs            
    })
  }
}
