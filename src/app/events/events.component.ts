import { Component, OnInit } from '@angular/core';
import { EventService } from 'app/services/event.service';
import { AuthService } from 'app/auth.service';
import { User } from 'app/models/user';
import { Event } from 'app/models/event';

// declare interface TableData {
//     headerRow: string[];
//     dataRows: string[][];
// }

@Component({
  selector: 'events',
  moduleId: module.id,
  templateUrl: 'events.component.html',
  //styleUrls: ['./events.component.css']
})

export class EventsComponent implements OnInit {
  // public tableData1: TableData;
  // public tableData2: TableData;

  loggedInUser: User;
  events: Event[];
  newEventName: String;
  newEventDesc: String;
  newEventDate: any;
  guestList: User[] = [];
  allUsers: User[];
  newGuest: number;
  currGuest: User;
  upcomingEvents:Event[];
  pastEvents:Event[];
  today:Date;

  // constructor(private es: EventService, private authservice: AuthService) {
  //   this.loggedInUser = authservice.loggedInUser;
  //   if (this.loggedInUser.userRole.role=='Lanlord') {this.getEvents()}
  //   else {this.getEventsByGuest()}
  //   this.today = new Date();
  // }

  ngOnInit() {
  }

  // getEvents() {
  //   this.es.getAllEvents().subscribe(
  //     (response: Event[]) => {
  //       this.events = response;
  //       console.log(this.events)
  //       console.log(this.today);
  //       // for (let ev of this.events) {
  //       //   console.log(new Date(ev.eventDate));
  //       //   if (new Date(ev.eventDate).getTime() < this.today.getTime()) {
  //       //     this.upcomingEvents.push(ev);
  //       //   } else {
  //       //     this.pastEvents.push(ev);
  //       //   }
  //       // }
  //     }
  //   )

  // }

  // getEventsByGuest() {
  //   this.es.getEventsByGuest(this.loggedInUser.userID).subscribe(
  //     (response: Event[]) => {
  //       this.events = response;
  //       console.log(this.events)
  //     }
  //   )
  //   // for (let ev of this.events) {
  //   //   if (ev.eventDate.getTime() < new Date(this.today.getFullYear(), this.today.getMonth(), this.today.getDate()).getTime()) {
  //   //     this.upcomingEvents.push(ev);
  //   //   } else {
  //   //     this.pastEvents.push(ev);
  //   //   }
  //   // }
  // }

  // getAllUsers() {
  //   this.es.getAllUsers().subscribe(
  //     (response: User[]) => {
  //       this.allUsers = response;
  //     }
  //   )
  // }

  // addGuestByID() {
  //   this.es.getUserByID(this.newGuest).subscribe(
  //     (response: User) => {
  //       this.guestList.push(response);
  //       console.log(this.guestList);
  //     }
  //   )
  //   this.newGuest=null;
  // }

  // // showAllUsersFunc() {
  // //   if (this.showAllUsers == false) {
  // //     this.showAllUsers = true;
  // //   } else {
  // //     this.showAllUsers = false
  // //   }  
  // // }

  // sendEvent() {
  //   let e = new Event(0, this.newEventName, this.newEventDesc, this.newEventDate, this.authservice.loggedInUser, this.guestList)
  //   console.log(e);
  //   this.es.addEvent(e).subscribe(
  //     (response: Event[]) => {
  //       this.events = response;
  //       console.log(this.events)
  //     }
  //   )
  //   this.newEventName=null;
  //   this.newEventDesc=null;
  //   this.newEventDate=null;
  //   this.guestList=null;
  // }




}
