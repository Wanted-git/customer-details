import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CustomerFormComponent } from './customer-form/customer-form.component';
import { AddPinComponent } from './add-pin/add-pin.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxSelectModule } from 'ngx-select-ex';
import { SharedRoutingModule } from './shared-routing.module';
import { FileUploadModule } from 'ng2-file-upload';


@NgModule({
  declarations: [
    CustomerFormComponent,
    AddPinComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    NgxSelectModule,
    SharedRoutingModule,
    FileUploadModule
  ],
  entryComponents: [
    CustomerFormComponent,
],
})
export class SharedModule { }
