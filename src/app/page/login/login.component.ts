import { Component, OnInit } from '@angular/core';
import { IUer } from 'src/app/model/user';
import { AuthService } from 'src/app/service/auth.service';
import { Router } from "@angular/router"

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  userData: IUer = {
    email: "",
    password: ""
  }
  constructor(
    private authService: AuthService,
    private route: Router
  ) { }

  ngOnInit(): void {
  }

  onSubmit() {
    try {
      this.authService.signIn(this.userData).subscribe((data) => {
        localStorage.setItem("user", JSON.stringify(data))
        this.route.navigateByUrl("/")
      })
    } catch (error) {
      console.log(error);

    }
  }
}
