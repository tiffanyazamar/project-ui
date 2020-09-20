import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
<<<<<<< HEAD:src/maintenance.service.ts
import { Ticket } from 'app/ticket';
import { Observable } from 'rxjs';
import { User } from 'app/user';
=======
import { Ticket } from '../models/ticket';
import { Observable } from 'rxjs';
import { User } from '../models/user';
>>>>>>> e33864b3753980636592ce8a47ac0189ab97cace:src/app/services/maintenance.service.ts

@Injectable({
  providedIn: 'root'
})
export class MaintenanceService {

  httpOptions = {
    headers: new HttpHeaders({'Content-Type': 'application/json'})
  }
  


  constructor(private http: HttpClient) {}

  getAllTickets() {
<<<<<<< HEAD:src/maintenance.service.ts
    return this.http.get<any>('http://localhost:8080/chatelaine/ticket');
   
=======
    return this.http.get<Ticket[]>('http://localhost:8080/chatelaine/ticket');
>>>>>>> e33864b3753980636592ce8a47ac0189ab97cace:src/app/services/maintenance.service.ts
  }

  getTicketsByStatus(sId:number){
    return this.http.get<Ticket[]>('http://localhost:8080/chatelaine/ticket/'+sId);
  }

  getTicket(id:number): Observable<any> {
    return this.http.get<any>('http://localhost:8080/chatelaine/ticket/'+id+'/');
  }

  addTicket(t:Ticket): Observable<Ticket[]> {
    console.log(t);
    return this.http.post<Ticket[]>('http://localhost:8080/chatelaine/ticket', t, this.httpOptions);
  }

  getUser(id:number) {
    return this.http.get<User>('http://localhost:8080/chatelaine/ticket/'+id+'/');
  }
}
