import { Ticket } from './ticket';
import { UserRole } from './user-role';

export class User {
    public userID:String;
    public username:String;
    public password:String;
    public firstName:String;
    public lastName:String;
    public phoneNumber:String;
    public userRole:UserRole;
    public eventList:Array<Event>;
    public tickets:Array<Ticket>;

    constructor(userID:String, username:String, password:String, firstName:String, lastName:String, phoneNumber:String, userRole:UserRole, eventList:Array<Event>, tickets:Array<Ticket>){
        this.userID=userID,
        this.username=username,
        this.password=password,
        this.firstName=firstName,
        this.lastName=lastName,
        this.phoneNumber=phoneNumber,
        this.userRole=userRole,
        this.eventList=eventList,
        this.tickets=tickets
    }
}
