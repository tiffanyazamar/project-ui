import { Component, OnInit } from '@angular/core';
import { EventService } from 'app/services/event.service';
import { AuthService } from 'app/auth.service';
import { User } from 'app/models/user';
import { Eevent } from '../models/event';

// declare interface TableData {
//     headerRow: string[];
//     dataRows: string[][];
// }

@Component({
    selector: 'events',
    moduleId: module.id,
    templateUrl: 'events.component.html'
})

export class EventsComponent implements OnInit{
    // public tableData1: TableData;
    // public tableData2: TableData;

    loggedInUser:User;
    events : Eevent[];
    newEventName:String;
    newEventDesc:String;
    newEventDate:any;
    guestList:User[];
  
    constructor(private es:EventService, private authservice: AuthService) {
      this.loggedInUser = authservice.loggedInUser;
     }
     
    ngOnInit(){
    }

    sendEvent() {
        let e = new Eevent(0, this.newEventName, this.newEventDesc, this.newEventDate, this.authservice.loggedInUser, this.guestList)
        console.log(e);
        this.es.addEvent(e).subscribe(
          (response:Eevent[]) => {
            this.events = response;
            console.log(this.events)
          }
        )
      }


}
