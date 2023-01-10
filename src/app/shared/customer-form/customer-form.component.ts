import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CustomerServiceService } from 'src/app/service/customer-service.service';

@Component({
  selector: 'app-customer-form',
  templateUrl: './customer-form.component.html',
  styleUrls: ['./customer-form.component.scss']
})
export class CustomerFormComponent implements OnInit {

  registerForm: FormGroup | any;
  regionList: any = [];
  countryList: any = [];

  constructor(
    private formBuilder: FormBuilder,
    private customerService: CustomerServiceService,
  ) { }

  ngOnInit(): void {
    this.formInitialization();
    this.getRegion();
  }

  formInitialization() {
    this.registerForm = this.formBuilder.group({
      name: ['', Validators.required],
      email: ['', Validators.required],
      region: ['', Validators.required],
      country: ['', Validators.required],
    });
  }

  onSubmit() {
    console.log(this.registerForm.value);
    this.customerService.register(this.registerForm.value).subscribe((res: any) => {let toaster = {
      success : true,
      message: 'Customer Added Successfully'
    }
    this.customerService.toaster(toaster)

    });
    this.registerForm.reset()
  }

  getRegion() {
    this.customerService.getRegion().subscribe((res: any) => {
      this.regionList = res

    });
  }

  getCountry(id:any){
    this.customerService.getCountry(id).subscribe((res: any) => {
      this.countryList = res.name

    });

  }
}
