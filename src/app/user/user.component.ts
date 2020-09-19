import { Component, OnInit } from '@angular/core';
import { AuthService } from 'app/auth.service';
import { HttpClient } from '@angular/common/http';

@Component({
    selector: 'user-cmp',
    moduleId: module.id,
    templateUrl: 'user.component.html'
})

export class UserComponent implements OnInit{
    loggedInUser:any;
    model:any;
    repeatPassword:string;
    errorMessage: string;
    constructor(private authService:AuthService,
        private http:HttpClient){
        this.loggedInUser = authService.loggedInUser;
        console.log(this.loggedInUser)
    }
    ngOnInit(){
    }

    updateUser(){
        if(this.loggedInUser.password && this.loggedInUser.password.length>0 && this.repeatPassword===this.loggedInUser.password){
            this.http
            .post<any>(`http://localhost:8080/chatelaine/user/update`, this.loggedInUser)
            .subscribe(result => {
              this.authService.loggedInUser = result;
            });
        }else{
            this.errorMessage = "Password does not match";
        }
       
    }
}
