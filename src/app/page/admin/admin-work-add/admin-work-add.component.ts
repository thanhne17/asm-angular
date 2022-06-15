import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ICateWork } from 'src/app/model/cate-work';
import { IWork } from 'src/app/model/work';
import { CateWorkService } from 'src/app/service/cate-work.service';
import { WorkService } from 'src/app/service/work.service';

@Component({
  selector: 'app-admin-work-add',
  templateUrl: './admin-work-add.component.html',
  styleUrls: ['./admin-work-add.component.css']
})
export class AdminWorkAddComponent implements OnInit {
  cateworkList!: ICateWork[]

  work: IWork = {
    created_at: this.getDate(),
    name: "",
    categoriesWorkId: 0,
    image: "",
    content: ""
  }

  getDate() {
    let date: any = new Date();
    return date;
  }

  getShortDesc() {
    // let desc: any = this.work.content.substring(0, 50)
    return ""
  }

  constructor(
    private workService: WorkService,
    private catework: CateWorkService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.catework.getCates().subscribe(data => this.cateworkList = data)
    const id = this.route.snapshot.paramMap.get("id");
    if (id) {
      this.workService.getWork(+id).subscribe(data => this.work = data)
    }
  }

  onSubmit() {
    const id = +this.route.snapshot.paramMap.get("id")!;
    if (id) {
      this.workService.editWork(id, this.work).subscribe(() => {
        this.router.navigateByUrl("/admin/work")
      })
    }
    else {
      this.workService.addWork(this.work).subscribe(() => {
        this.router.navigateByUrl("/admin/work")
      })
    }
  }
}
