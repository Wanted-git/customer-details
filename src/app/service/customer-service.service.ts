import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { environment } from 'src/environments/environment';
import { HttpServiceService } from './http-service.service';

@Injectable({
  providedIn: 'root'
})
export class CustomerServiceService {

  constructor(
    private httpClientService: HttpServiceService,
    private toastr: ToastrService
  ) { }

  /**
   * Register Customer
   * @param request request data
   * @returns response from api
   */
  register(request: any) {
    const url = environment.endpoint + 'customer';
    return this.httpClientService.post(url, request);
  }

  /**
   * Get Region
   * @param request request data
   * @returns response from api
   */
  getRegion() {
    const url = environment.endpoint + 'region';
    return this.httpClientService.get(url);
  }

  /**
   * Get Country
   * @param request request data
   * @returns response from api
   */
  getCountry(id: any) {
    const url = environment.endpoint + `country/${id}`;
    return this.httpClientService.get(url);
  }

  /**
   * Get Customer
   * @param request request data
   * @returns response from api
   */
  getCustomer(id?:any) {
    const url = environment.endpoint + 'customer';
    if (id) {
      url + `/${id}`
    }
    return this.httpClientService.get(url);
  }

  /**
   * Register Pin Data
   * @param request request data
   * @returns response from api
   */
  getPin() {
    const url = environment.endpoint + 'pinSave';
    return this.httpClientService.get(url);
  }

  registerPins(fileObj: any, request: any) {
    request.file = fileObj;
    const url = environment.endpoint + 'pinSave';
    return this.httpClientService.post(url, request);
  }

   /**
     * Show toast message
     * @param res res data
     */
   toaster(res: any) {
    if (res?.success) {
        this.toastr.success(res.message);
    } else {
        this.toastr.error(res.message);
    }
}
}
