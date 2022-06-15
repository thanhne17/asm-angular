import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IUer } from 'src/app/model/user';
import { AuthService } from 'src/app/service/auth.service';

@Component({
  selector: 'app-signup-page',
  templateUrl: './signup-page.component.html',
  styleUrls: ['./signup-page.component.css']
})
export class SignupPageComponent implements OnInit {
  userData: IUer = {
    email: "",
    password: ""
  }
  constructor(
    private authService: AuthService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  onSubmit() {
    console.log(this.userData);

    this.authService.signUp(this.userData).subscribe(()=>{
      this.router.navigateByUrl("/login")
    })
  }

}
