import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CustomerServiceService } from 'src/app/service/customer-service.service';

@Component({
  selector: 'app-add-pin',
  templateUrl: './add-pin.component.html',
  styleUrls: ['./add-pin.component.scss']
})
export class AddPinComponent implements OnInit {

  pinForm: FormGroup | any;
  customerList = [];
  file: any;
  filePreview: any;


  constructor(
    private formBuilder: FormBuilder,
    private customerService: CustomerServiceService
  ) { }

  ngOnInit(): void {
    this.formInitialization();
    this.getCustomer();
  }

  formInitialization() {
    this.pinForm = this.formBuilder.group({
      title: ['', Validators.required],
      image: ['', Validators.required],
      collaborators: ['', Validators.required],
      privacy: ['', Validators.required],
    });
  }

  onSubmit() {
    this.customerService.registerPins(this.file, this.pinForm.value).subscribe((res: any) => {
      let toaster = {
        success : true,
        message: 'Pin Added Successfully'
      }
      this.customerService.toaster(toaster)
      location.href = 'customer-list'
    });

  }
  getCustomer() {
    this.customerService.getCustomer().subscribe((res: any) => {
      this.customerList = res;

    });
  }

  fileOverBase(event: any) {
    let file = event[0];
    let reader = new FileReader();
    reader.onload = (e: any) => {
      console.log('e', e);
      this.file = e.target.result;
    };
    reader.readAsDataURL(file);
  }

}
