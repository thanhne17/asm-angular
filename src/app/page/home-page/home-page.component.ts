import { Component, OnInit } from '@angular/core';
import { IBlog } from 'src/app/model/blog';
import { BlogService } from 'src/app/service/blog.service';
import { WorkService } from 'src/app/service/work.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {
  blogList!: any
  workList!: any
  status:boolean = false
  constructor(
    private blogService: BlogService,
    private workService: WorkService
  ) { }

  ngOnInit(): void {
    this.showProduct()
    this.showWork()
  }

  showProduct () {
    this.blogService.getBlogsHome().subscribe(data => {
      this.blogList = data
    })
  }

  showWork () {
    this.workService.getWorksHome().subscribe(data => {
      this.workList = data
    })
  }

  openModal () {
    if (this.status) {
      this.status = !this.status
    }
    else{
      this.status = !this.status
    }
  }

}
