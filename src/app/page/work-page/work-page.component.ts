import { Component, OnInit } from '@angular/core';
import { WorkService } from 'src/app/service/work.service';

@Component({
  selector: 'app-work-page',
  templateUrl: './work-page.component.html',
  styleUrls: ['./work-page.component.css']
})
export class WorkPageComponent implements OnInit {
  workList!: any
  constructor(
    private workService: WorkService
  ) { }

  ngOnInit(): void {
    this.showBlog()
  }

  showBlog () {
    this.workService.getWorks().subscribe(data => this.workList = data)
  }
}
