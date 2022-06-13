import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IBlog } from 'src/app/model/blog';
import { BlogService } from 'src/app/service/blog.service';

@Component({
  selector: 'app-blog-detail',
  templateUrl: './blog-detail.component.html',
  styleUrls: ['./blog-detail.component.css']
})
export class BlogDetailComponent implements OnInit {
  blog: IBlog | any
  constructor(
    private blogService: BlogService,
    private router: ActivatedRoute
  ) { }

  ngOnInit(): void {
    const id = +this.router.snapshot.paramMap.get("id")!;
    this.blogService.getBlog(id).subscribe(data => {
      this.blog = data;
      // this.blog.content = JSON.parse(this.blog.content)
      console.log(this.blog);
      
    })
  }

}
