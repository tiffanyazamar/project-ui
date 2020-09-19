import { Ticket } from './ticket';

export class Status {
    public statusId:number;
    public status:String;
    

    constructor(statusId:number, status:String) {
        this.statusId = statusId;
        this.status= status
    }
}