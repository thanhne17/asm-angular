import { Component, OnInit } from '@angular/core';
import { WorkService } from 'src/app/service/work.service';

@Component({
  selector: 'app-admin-work',
  templateUrl: './admin-work.component.html',
  styleUrls: ['./admin-work.component.css']
})
export class AdminWorkComponent implements OnInit {
  workList!: any[]
  constructor(private workService: WorkService) { }

  ngOnInit(): void {
    this.workService.getWorks().subscribe(data=>{
      this.workList = data
    })
  }

  onRemove (id:number) {
    if (window.confirm("Remove this work ?")) {
      this.workService.removeWork(id).subscribe(()=>{
        this.workList = this.workList.filter(item => item.id != id)
      })
    }
  }
}
