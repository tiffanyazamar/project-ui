import { User } from './user';

export class Eevent {
    public eventID:number;
    public eventName:String;
    public eventDescription:String;
    public eventDate:Date;
    public eventCreator:User;
    public userList:Array<User>;

    constructor(eventID:number, eventName:String, eventDescription:String, eventDate:Date, eventCreator:User, userList:Array<User>) {
        this.eventID = eventID,
        this.eventName=eventName,
        this.eventDescription=eventDescription,
        this.eventDate=eventDate,
        this.eventCreator=eventCreator,
        this.userList=userList
    }
}
