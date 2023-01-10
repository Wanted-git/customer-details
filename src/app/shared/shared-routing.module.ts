import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddPinComponent } from './add-pin/add-pin.component';
import { CustomerFormComponent } from './customer-form/customer-form.component';

const routes: Routes = [
  { path: 'register', component: CustomerFormComponent },
  { path: 'pin', component: AddPinComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SharedRoutingModule { }
