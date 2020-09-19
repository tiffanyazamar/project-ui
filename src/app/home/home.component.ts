import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  loggedInUser;
  constructor(private authService: AuthService) {
    this.loggedInUser = authService.loggedInUser;
  }

  ngOnInit(): void {

  }

}
