import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IWork } from 'src/app/model/work';
import { WorkService } from 'src/app/service/work.service';

@Component({
  selector: 'app-work-detail',
  templateUrl: './work-detail.component.html',
  styleUrls: ['./work-detail.component.css']
})
export class WorkDetailComponent implements OnInit {
  Work: IWork | any
  constructor(
    private WorkService: WorkService,
    private router: ActivatedRoute
  ) { }

  ngOnInit(): void {
    const id = +this.router.snapshot.paramMap.get("id")!;
    this.WorkService.getWork(id).subscribe(data => {
      this.Work = data;
      // this.Work.content = JSON.parse(this.Work.content)
      console.log(this.Work);
      
    })
  }

}
