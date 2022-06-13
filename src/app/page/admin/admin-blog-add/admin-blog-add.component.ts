import { Component, OnInit } from '@angular/core';
import { CKEditor4 } from "ckeditor4-angular/ckeditor"
import { IBlog } from 'src/app/model/blog';
import { ICateBlog } from 'src/app/model/cate-blog';
import { BlogService } from 'src/app/service/blog.service';
import { CateBlogService } from 'src/app/service/cate-blog.service';
import { Router, ActivatedRoute } from "@angular/router"

@Component({
  selector: 'app-admin-blog-add',
  templateUrl: './admin-blog-add.component.html',
  styleUrls: ['./admin-blog-add.component.css']
})
export class AdminBlogAddComponent implements OnInit {
  cateBlogList!: ICateBlog[]

  blog: IBlog = {
    content: "",
    created_at: this.getDate(),
    short_desc: this.getShortDesc(),
    title: "",
    categoryBlogId: 0
  }

  getDate() {
    let date: any = new Date();
    return date;
  }

  getShortDesc() {
    // let desc: any = this.blog.content.substring(0, 50)
    return ""
  }

  constructor(
    private blogService: BlogService,
    private cateBlog: CateBlogService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.cateBlog.getCates().subscribe(data => this.cateBlogList = data)
    const id = this.route.snapshot.paramMap.get("id");
    if (id) {
      this.blogService.getBlog(+id).subscribe(data => this.blog = data)
    }
  }

  onSubmit() {
    const id = +this.route.snapshot.paramMap.get("id")!;
    if (id) {
      this.blogService.editBlog(id, this.blog).subscribe(() => {
        this.router.navigateByUrl("/admin/blog")
      })
    }
    else {
      this.blogService.addBlog(this.blog).subscribe(() => {
        this.router.navigateByUrl("/admin/blog")
      })
    }
  }

}
