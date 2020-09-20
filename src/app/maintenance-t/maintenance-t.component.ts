import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
<<<<<<< HEAD
import { Ticket } from '../ticket';
import { MaintenanceService } from 'maintenance.service';
=======
import { Ticket } from '../models/ticket';
import { MaintenanceService } from '../services/maintenance.service';
>>>>>>> e33864b3753980636592ce8a47ac0189ab97cace
import { FormControl, FormGroup } from '@angular/forms';


@Component({
  selector: 'app-maintenance-t',
  templateUrl: './maintenance-t.component.html',
  styleUrls: ['./maintenance-t.component.css']
})
export class MaintenanceTComponent implements OnInit {

  tickets: Ticket[];
  newTicketId: number;
  userId: number;
  loggedInUser;
  model = {
    description: ''
    
  };
<<<<<<< HEAD
=======

>>>>>>> e33864b3753980636592ce8a47ac0189ab97cace


  constructor(private ms: MaintenanceService, private authService: AuthService) {
    this.loggedInUser = authService.loggedInUser;
   }

  ngOnInit(): void {
   
  }
  getTickets() {
    this.ms.getAllTickets().subscribe(
      (response: Ticket[]) => {
        this.tickets = response;
        console.log(this.tickets)
      }
    )
  }

  sendTicket() {
    
    let t = new Ticket(0,this.model.description, null, null, this.authService.loggedInUser, null)
    console.log(t);
    console.log(this.model.description)
    this.ms.addTicket(t).subscribe(
      (response: Ticket[]) => {
        this.tickets = response;
       
      }
    )
  }

  // sendTicket() {
  //   this.ms.getTicket(this.newTicketId).pipe(
  //     switchMap( (ticket:any) => this.ms.getUser(this.userId).pipe(
  //       map( (u: User) => ({u, ticket}))
  //     ))
  //   ).pipe(
  //     switchMap( ({u, ticket}) => this.ms.addTicket(new Ticket(0, this.newTicketDesc, Date.now(), null, u, this.statusId)).pipe(
  //       map( allUsers => ({u, ticket, allUsers}))
  //     ))
  //   ).subscribe( ({u, ticket, allUsers})) => {
  //     this.users = allUsers;
  //   }
  // }



}
