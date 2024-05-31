import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from '../environment';

@Injectable({
  providedIn: 'root'
})
export class DepartmentService {

  private API_URL = environment.api_url + 'api/v1/department';


  constructor(private _http: HttpClient) { }

  getAllDepartments():Observable<any>{
    return this._http.get<any>(this.API_URL)
    .pipe(
      map((res)=>{
        return res;
      })
    )
  }

  addDepartment(data: any):Observable<any>{
    return this._http.post<any>(this.API_URL, data)
    .pipe(
      map((res)=>{
        return res;
      })
    )
  }

  fetchSingleDepartment(id: number):Observable<any>{
    return this._http.get<any>(this.API_URL + `/${id}`)
    .pipe(
      map((res)=>{
        return res;
      })
    )
  }

  removeDepartment(id: number):Observable<any>{
    return this._http.delete<any>(this.API_URL + `/${id}`)
    .pipe(
      map((res)=>{
        return res;
      })
    )
  }

  updateDepartment(id: number, data: any):Observable<any>{
    return this._http.patch<any>(this.API_URL + `/${id}`, data)
    .pipe(
      map((res)=>{
        return res;
      })
    )
  }
}
