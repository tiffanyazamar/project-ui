import { Component, OnInit } from '@angular/core';

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
  constructor() {
  this.model = {
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

  }
}
