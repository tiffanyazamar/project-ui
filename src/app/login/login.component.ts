import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  model = {
    username: '',
    password: ''
  };
  loggedInUser:any;

  constructor(private http: HttpClient,
      private router:Router,
      private authService: AuthService
  ) { }

  login() {
    this.http
      .post<any>(`http://localhost:8080/chatelaine/user/login`, this.model)
      .subscribe(result => {
        this.authService.loggedInUser = result;
        console.log(result)
        this.router.navigate(['dashboard']);
        console.log(this.model)
      });
  }

}
