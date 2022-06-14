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
      console.log(1);
      this.status = !this.status

    }
    else{
      //close
      console.log(this.status);
      this.status = !this.status
      
    }
  }

}
