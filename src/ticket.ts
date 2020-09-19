import { User } from './user';

export class Ticket {
    public ticketId:number;
    public description:String;
    public submitted:any;
    public resolved:any;
    public author:User;
    public statusId:number;

    constructor(ticketId:number, description:String, submitted:any, resolved:any, author:User, statusId:number) {
        this.ticketId = ticketId,
        this.description = description,
        this.submitted = new Date(submitted).toLocaleString(),
        this.resolved = resolved,
        this.author = author,
        this.statusId = statusId
    }
}
