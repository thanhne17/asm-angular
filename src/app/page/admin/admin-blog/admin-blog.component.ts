import { Component, OnInit } from '@angular/core';
import { IBlog } from 'src/app/model/blog';
import { BlogService } from 'src/app/service/blog.service';

@Component({
  selector: 'app-admin-blog',
  templateUrl: './admin-blog.component.html',
  styleUrls: ['./admin-blog.component.css']
})
export class AdminBlogComponent implements OnInit {
  blogList!: any[]
  constructor(private blogService: BlogService) { }

  ngOnInit(): void {
    this.blogService.getBlogs().subscribe(data=>{
      this.blogList = data
    })
  }

  onRemove (id:number) {
    if (window.confirm("Remove this blog ?")) {
      this.blogService.removeBlog(id).subscribe(()=>{
        this.blogList = this.blogList.filter(item => item.id != id)
      })
    }
  }

}
