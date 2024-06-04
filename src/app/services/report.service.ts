import { Injectable } from '@angular/core';
import { environment } from '../environment';

import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ReportService {

  private API_URL = environment.api_url + '/api/v1/report';

  constructor(private _http: HttpClient) { }

  getAllReports():Observable<any>{
    return this._http.get<any>(this.API_URL)
    .pipe(
      map((res)=>{
        return res;
      })
    )
  }

  createReport(data: any):Observable<any>{
    return this._http.post<any>(this.API_URL, data)
    .pipe(
      map((res)=>{
        return res;
      })
    )
  }

  singleReoprt(id: number):Observable<any>{
    return this._http.get<any>(this.API_URL + `/${id}`)
    .pipe(
      map((res)=>{
        return res;
      })
    )
  }

  updateReoprt(id: number, data: any):Observable<any>{
    return this._http.patch<any>(this.API_URL + `/${id}`, data)
    .pipe(
      map((res)=>{
        return res;
      })
    )
  }

  deleteReoprt(id: number):Observable<any>{
    return this._http.delete<any>(this.API_URL + `/${id}`)
    .pipe(
      map((res)=>{
        return res;
      })
    )
  }
}
