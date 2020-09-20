import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Ticket } from 'ticket';
import { MaintenanceService } from 'maintenance.service';
import { FormControl, FormGroup } from '@angular/forms';


@Component({
  selector: 'app-maintenance-t',
  templateUrl: './maintenance-t.component.html',
  styleUrls: ['./maintenance-t.component.css']
})
export class MaintenanceTComponent implements OnInit {

  tickets: Ticket[];
  newTicketDesc: String;
  newTicketId: number;
  userId: number;
  loggedInUser;



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
    
    let t = new Ticket(0,this.newTicketDesc, null, null, this.authService.loggedInUser, null)
    console.log(t);
    this.ms.addTicket(t).subscribe(
      (response: Ticket[]) => {
        this.tickets = response;
        console.log(this.tickets)
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
