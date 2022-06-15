import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  status:boolean = false
  constructor() { }

  ngOnInit(): void {
  }
  onClick() {
    if (this.status) {
      //open
      this.status = !this.status

    }
    else{
      //close
      this.status = !this.status
      
    }
  }

}
