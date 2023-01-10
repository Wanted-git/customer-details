import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CustomerServiceService } from '../service/customer-service.service';

@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.scss']
})
export class CustomerListComponent implements OnInit {

  allData: any = [];
  customerData = [];

  constructor(
    private customerService: CustomerServiceService,
    private router: Router
  ) { }
  ngOnInit(): void {
    this.getAllDetails();
  }

  getAllDetails() {
    this.customerService.getPin().subscribe((res: any) => {
      let toaster = {
        success : true,
        message: 'Details get Successfully'
      }
      this.customerService.toaster(toaster)
      this.allData = res;
    });
  }

  addCustomer() {
    location.href = 'user/register';
  }

  addPin() {
    location.href = 'user/pin';
  }




}
