import { User } from './user';
import { Status } from './status';

export class Ticket {
    public ticketId:number;
    public description:String;
    public submitted:any;
    public resolved:any;
    public author:any;
    public statusId:any;

    constructor(ticketId:number, description:String, submitted:any, resolved:any, author:any, statusId:any) {
        this.ticketId = ticketId,
        this.description = description,
        this.submitted = new Date(submitted).toLocaleString(),
        this.resolved = resolved,
        this.author = author,
        this.statusId = statusId
    }
}
