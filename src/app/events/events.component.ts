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
  styleUrls: ['./events.component.css']
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
  upcomingEvents:Event[] = [];
  pastEvents:Event[] = [];
  now:any = new Date();
  tenFromNow:any = this.now.getTime() + (1000 * 60 * 60 * 24 * 10);
  hideUpcoming:boolean=false;
  uninvited:User[] = [];
  invited:User[] = [];

  constructor(private es: EventService, private authservice: AuthService) {
    this.loggedInUser = authservice.loggedInUser;
    if (this.loggedInUser.userRole.role=='Landlord') {
      this.getEvents()
      this.getAllUsers()
    } else if(this.loggedInUser.userRole.role=='Tenant') {this.getEventsByGuest()}
  }

  ngOnInit() {
  }

  chronological( a, b ) {
    if ( a.eventDate < b.eventDate ){
      return -1;
    }
    if ( a.eventDate > b.eventDate ){
      return 1;
    }
    return 0;
  }

  reverseChron( a, b ) {
    if ( a.eventDate < b.eventDate ){
      return 1;
    }
    if ( a.eventDate > b.eventDate ){
      return -1;
    }
    return 0;
  }

  getEvents() {
    this.es.getAllEvents().subscribe(
      (response: Event[]) => {
        this.events = response;

        console.log(this.now),
        console.log(this.tenFromNow);
        for (let ev of this.events) {
          if (ev.eventDate >= this.now.getTime() && ev.eventDate <= this.tenFromNow) {
            this.upcomingEvents.push(ev);
            this.upcomingEvents.sort(this.chronological);
          } else if (ev.eventDate < this.now.getTime()){
            this.pastEvents.push(ev);
            this.pastEvents.sort(this.reverseChron);
          }
        }
      }
    )
  }

  getEventsByGuest() {
    this.es.getEventsByGuest(this.loggedInUser.userID).subscribe(
      (response: Event[]) => {
        this.events = response;
        for (let ev of this.events) {
          if (ev.eventDate >= this.now.getTime() && ev.eventDate <= this.tenFromNow) {
            this.upcomingEvents.push(ev);
            this.upcomingEvents.sort(this.chronological);
          } else if (ev.eventDate < this.now.getTime()){
            this.pastEvents.push(ev);
            this.pastEvents.sort(this.reverseChron);
          }
        }
      }
    )
  }

  getAllUsers() {
    this.es.getAllUsers().subscribe(
      (response: User[]) => {
        this.allUsers = response;
        this.uninvited = response;
      }
    )
  }

  addGuest(u:User) {
    let index:number = this.uninvited.indexOf(u);
    this.uninvited.splice(index,1);
    this.invited.push(u);
  }

  deleteGuest(u:User) {
    let index:number = this.invited.indexOf(u);
    this.invited.splice(index,1);
    this.uninvited.push(u);
  }

  // addGuestByID() {
  //   this.es.getUserByID(this.newGuest).subscribe(
  //     (response: User) => {
  //       this.guestList.push(response);
  //       console.log(this.guestList);
  //     }
  //   )
  //   this.newGuest=null;
  // }

  // showAllUsersFunc() {
  //   if (this.showAllUsers == false) {
  //     this.showAllUsers = true;
  //   } else {
  //     this.showAllUsers = false
  //   }  
  // }

  sendEvent() {
    let e = new Event(0, this.newEventName, this.newEventDesc, this.newEventDate, this.authservice.loggedInUser, this.invited)
    console.log(e);
    this.es.addEvent(e).subscribe(
      (response: Event[]) => {
        this.events = response;
        console.log(this.events)
      }
    )
    this.newEventName=null;
    this.newEventDesc=null;
    this.newEventDate=null;
    this.invited=null;
    this.uninvited=this.allUsers;
  }

  toggleEvents(value:number) {
    this.hideUpcoming = (value==2) ? true : false;
  }




}
