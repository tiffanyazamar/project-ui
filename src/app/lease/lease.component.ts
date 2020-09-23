import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
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
  fileReader: FileReader = new FileReader();
  retrieveResponse: any;
  base64Data: any;
  retrievedFile: string;
  showFile = false;
  signedLeaseFile: File;
  selectedFiles: FileList;
  message ='';

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

  showLeaseFile(){

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

  // uploadLease(signedLeaseFile) {

  //   this.leaseService.uploadLease(signedLeaseFile).subscribe(result => {
  //     if(result) {

  //     }
  //   })
  // }

  selectFile(event) {
    this.selectedFiles = event.target.files;
  }

  uploadLease() {
    this.signedLeaseFile = this.selectedFiles.item(0);
    console.log(typeof this.signedLeaseFile);
    console.log(this.signedLeaseFile);
    
    this.leaseService.uploadLease(this.signedLeaseFile).subscribe(result => {
      if (result instanceof HttpResponse) {
        this.message = result.body.message;
      }
    }, err => {
      this.message = 'Could not upload the file!';
      this.signedLeaseFile = undefined;
    })
    this.selectedFiles = undefined;
  }

  renew(leaseID){
   this.tenantSign(leaseID);
  }

}
