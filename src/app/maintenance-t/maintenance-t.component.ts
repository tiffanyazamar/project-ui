import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Ticket } from 'ticket';
import { MaintenanceService } from 'maintenance.service';

@Component({
  selector: 'app-maintenance-t',
  templateUrl: './maintenance-t.component.html',
  styleUrls: ['./maintenance-t.component.css']
})
export class MaintenanceTComponent implements OnInit {

  tickets: Ticket[];
  newTicketDesc: string;
  newTicketId: number;
  userId: number;
  loggedInUser;

  constructor(private ms: MaintenanceService, private authService: AuthService) {
    this.loggedInUser = authService.loggedInUser;
   }

  ngOnInit(): void {
    this.getTickets();
  }
  getTickets() {
    this.ms.getAllTickets().subscribe(
      (response: Ticket[]) => {
        this.tickets = response;
      }
    )
  }

  sendTicket() {
    let t = new Ticket(0, this.newTicketDesc, null, null, this.authService.loggedInUser, null)
    console.log(t);
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
