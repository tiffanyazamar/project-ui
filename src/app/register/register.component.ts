import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { AuthService } from 'app/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  model: {
    username: string,
    password: string,
    firstName: string,
    lastName: string,
    phoneNumber: string
  }
  confirmPassword;
  errorMessage: string;
  constructor(private http: HttpClient,
    private router:Router,
    private authService: AuthService
) {  this.model = {
    username: '',
    password: '',
    firstName: '',
    lastName: '',
    phoneNumber: ''
  }

  }

  ngOnInit(): void {
    
  }

  register() {
    if(this.model.password.length>0 && this.model.password!==this.confirmPassword){
      this.errorMessage = "Password does match!";
    }else{
      this.http
      .post<any>(`http://localhost:8080/chatelaine/user/register`, this.model)
      .subscribe(result => {
        this.authService.loggedInUser = result;
        this.router.navigate(['dashboard']);
      });
    }
  }
}
