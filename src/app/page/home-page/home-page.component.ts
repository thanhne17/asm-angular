import { Component, OnInit } from '@angular/core';
import { IBlog } from 'src/app/model/blog';
import { BlogService } from 'src/app/service/blog.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {
  blogList!: any
  constructor(
    private blogService: BlogService
  ) { }

  ngOnInit(): void {
    this.showProduct()
  }

  showProduct () {
    this.blogService.getBlogs().subscribe(data => {
      this.blogList = data
    })
  }

}
