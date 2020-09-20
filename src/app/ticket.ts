
import { User } from 'app/user';
import { Status } from 'app/status';

export class Ticket {
    public ticketId:number;
    public description:String;
    public submitted:any;
    public resolved:any;
    public author:User;
    public statusId:Status;

    constructor(ticketId:number, description:String, submitted:any, resolved:any, author:User, statusId:Status) {
        this.ticketId = ticketId,
        this.description = description,
        this.submitted = submitted,
        this.resolved = resolved,
        this.author = author,
        this.statusId = statusId
    }
}