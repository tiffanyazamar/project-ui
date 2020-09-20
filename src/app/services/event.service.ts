import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../models/user';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EventService {

  url:string = "http://localhost:8080/chatelaine/event/"
  httpOptions = {
    headers: new HttpHeaders({'Content-Type': 'application/json'})
  }

  constructor(private http:HttpClient) { 
  }

  getAllEvents() :Observable<Event[]> {
    return this.http.get<Event[]>(this.url);
  }

  getEventsByGuest(id:number) :Observable<Event[]> {
    return this.http.get<Event[]>(this.url+"guest/"+id);
  }

  getAllUsers() :Observable<User[]> {
    return this.http.get<User[]>("http://localhost:8080/chatelaine/user/")
  }

  getUserByID(id:number) :Observable<User>{
    return this.http.get<User>("http://localhost:8080/chatelaine/user/id/"+id)
  }

  // getEventsByParticipant(user:User):Observable<Event[]> {
  //   return this.http.get<Event[]>(this.url+"user/"+user);
  // }

  getEventsByDate(date:Date):Observable<Event[]> {
    return this.http.get<Event[]>(this.url+date);
  }

  addEvent(e): Observable<Event[]> {
    console.log(e);
    return this.http.post<Event[]>(this.url, e, this.httpOptions);
  }
}
