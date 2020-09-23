import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Ticket } from '../models/ticket';
import { MaintenanceService } from '../services/maintenance.service';
import { FormControl, FormGroup } from '@angular/forms';


@Component({
  selector: 'app-maintenance-t',
  templateUrl: './maintenance-t.component.html',
  styleUrls: ['./maintenance-t.component.css']
})
export class MaintenanceTComponent implements OnInit {

  tickets: Ticket[];
  tickets2:Ticket[];
  unresolved:Ticket[] = [];
  resolved:Ticket[] = [];
  newTicketId: number;
  userId: number;
  isLandlord: boolean;
  loggedInUser;
  status  = 'all';

  model = {
    description: ''
    
  };




  constructor(private ms: MaintenanceService, private authService: AuthService) {
    this.loggedInUser = authService.loggedInUser;
   }

  ngOnInit(): void {
   
  }

  filter(){
    this.unresolved= [];
    this.resolved = [];
    this.tickets = [];
    console.log(this.status)
    if (this.loggedInUser.userRole.role == 'Landlord'){
      if (this.status == 'all'){
        console.log(this.status)
        this.getTickets();
      }
      else if (this.status == 'unresolved'){
        console.log(this.status)
        this.getByStatusUnresolved();
      } else {
        console.log(this.status)
        this.getByStatusResolved();
      }
    }
    else {
      if (this.status == 'all'){
        console.log(this.status)
        this.getAllTicketsByAuthor();
      }
      else if (this.status == 'unresolved'){
        console.log(this.status)
        this.getByTenantStatusUnresolved();
      }
      else {
        console.log(this.status)
        this.getByTenantStatusResolved();
      }
  }
}
  getByTenantStatusResolved() {
    this.ms. getAllTicketsByAuthor(this.loggedInUser.userID).subscribe(
      (response: Ticket[]) => {
        this.tickets2 = response;
        console.log(this.loggedInUser.userRole.role)
        for (let t of this.tickets2) {
          if (t.statusId.status == 'Resolved'){
            this.resolved.push(t);
            this.tickets = this.resolved;
            console.log("resolved")
          }
        }
      }
      ) 
  }
  getByTenantStatusUnresolved() {
    this.ms. getAllTicketsByAuthor(this.loggedInUser.userID).subscribe(
      (response: Ticket[]) => {
        this.tickets2 = response;
        console.log(this.loggedInUser.userRole.role)
        for (let t of this.tickets2) {
          if (t.statusId.status == 'Unresolved'){
            this.unresolved.push(t);
            this.tickets = this.unresolved;
            console.log("unresolved")
          }
        }
      }
      ) 
  }
  getByStatusResolved() {
    this.ms.getAllTickets().subscribe(
      (response: Ticket[]) => {
        this.tickets2 = response;
        console.log(this.loggedInUser.userRole.role)
        for (let t of this.tickets2) {
          if (t.statusId.status == 'Resolved'){
            this.resolved.push(t);
            this.tickets = this.resolved;
           console.log("resolved")
          }
        }
      }
      ) 
    
  }
  getByStatusUnresolved() {
    this.ms.getAllTickets().subscribe(
      (response: Ticket[]) => {
        this.tickets2 = response;
        console.log(this.tickets2)
        console.log(this.loggedInUser.userRole.role)
        for (let t of this.tickets2) {
          if (t.statusId.status == 'Unresolved'){
            this.unresolved.push(t);
            this.tickets = this.unresolved;
           console.log(this.tickets)
           console.log("unresolved")
          }
        }
      }
      ) 
  }
  



  getTickets() {
    this.ms.getAllTickets().subscribe(
      (response: Ticket[]) => {
        this.tickets = response;
        console.log(this.tickets)
        console.log(this.loggedInUser.userRole.role)
      }
    )
  }
  getAllTicketsByAuthor() {
    console.log(this.loggedInUser.userID)
    this.ms.getAllTicketsByAuthor(this.loggedInUser.userID).subscribe(
      (response: Ticket[]) => {
        this.tickets = response;
        console.log(this.tickets)
        console.log(this.loggedInUser.userRole.role)
      }
    )
  }
  
  resolve(ticketId){
      const model = {
        ticketId: ticketId
      }
      this.ms.resolve(model).subscribe(result => {
        if(result){
          this.getTickets();
        }
      });
    }
  

  sendTicket() {
    
    let t = new Ticket(0,this.model.description, null, null, this.authService.loggedInUser, null)
    console.log(t);
    console.log(this.model.description)
    this.ms.addTicket(t).subscribe(
      (response: Ticket[]) => {
        this.tickets2 = response;
        this.getAllTicketsByAuthor()
       
      }
    )
  }





}
