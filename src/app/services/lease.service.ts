import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LeaseService {
  sign(model: any) {
    return  this.http
    .post<any>('http://localhost:8080/chatelaine/lease/update', model);
  }
  getAllLeases(status:string) {
    return  this.http
    .get<any>('http://localhost:8080/chatelaine/lease/allLeases/' + status);
    }

  constructor(private http: HttpClient) { }

  getLeaseForTenant(id:number){
   return  this.http
      .get<any>(`http://localhost:8080/chatelaine/lease/` + id);
  }
}
