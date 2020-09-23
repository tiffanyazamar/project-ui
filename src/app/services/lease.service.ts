import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest, HttpHeaders, HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs';

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

  uploadLease(f:File) : Observable<HttpEvent<any>>{

    const fd = new FormData();
    fd.append('file', f);

    const req = new HttpRequest('POST', 'http://localhost:8080/chatelaine/lease/upload', fd, {
      responseType: 'json',
      withCredentials: true,
      headers : new HttpHeaders({
        'Access-Control-Allow-Headers': 'Content-Type',
        'Access-Control-Allow-Origin': '*',
        }),
    });
    return this.http.request(req);
  }
}
