import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { AuthService } from 'app/auth.service';
import { LeaseService } from 'app/services/lease.service';

@Component({
  selector: 'app-lease',
  templateUrl: './lease.component.html',
  styleUrls: ['./lease.component.css']
})
export class LeaseComponent implements OnInit {

  isLandlord: boolean;
  loggedInUser;
  leaseDetail: any;
  leases: any;
  status  = 'all';
  constructor(private http: HttpClient,
    private router: Router,
    private authService: AuthService,
    private leaseService: LeaseService
  ) {
    this.loggedInUser = this.authService.loggedInUser;
  }

  ngOnInit(): void {
    this.getLease('all');
  }
  filter(){
    this.getLease(this.status);
  }

  getLease(status){
    if (this.loggedInUser.userRole.role === 'Tenant') {
      this.isLandlord = false;
      this.leaseService.getLeaseForTenant(this.loggedInUser.userID).subscribe(result => {
        this.leaseDetail = result;
      });
    } else {
      this.isLandlord = true;
      this.leaseService.getAllLeases(status).subscribe(result => {
        this.leases = result;
        console.log(status)
      });
    }
  }
  landlordSign(leaseID){
    const model = {
      party: 'landlord',
      leaseID: leaseID
    }
    this.leaseService.sign(model).subscribe(result => {
      if(result){
        this.getLease(this.status);
      }
    });
  }
  tenantSign(leaseID){
    const model = {
      party: 'tenant',
      leaseID: leaseID
    }
    this.leaseService.sign(model).subscribe(result => {
      if(result){
        this.getLease(this.status);
      }
    });
  }
  renew(leaseID){
   this.tenantSign(leaseID);
  }
}
