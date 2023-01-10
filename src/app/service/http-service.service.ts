import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError, map } from 'rxjs/operators';
import { Observable, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HttpServiceService {

  responseData: any;
    returnReponse: any;

    constructor(
        private http: HttpClient,
    ) { }

    /**
     * post method to get data from api
     * @param url
     * @param data
     * @returns return response from api
     */
    post(url: any, data: any): Observable<any> {
        return this.http.post(url, data).pipe(map((res: any) => {
            return res;
        }), catchError((error: any) => {
            return throwError(error);
        }));
    }

    /**
     * get method to get data from api
     * @param url
     * @returns return response from api
     */
    get(url: any): Observable<any> {
        return this.http.get(url).pipe(map((res: any) => {
            return res;
        }), catchError((error: any) => {
            return throwError(error);
        }));
    }


}
