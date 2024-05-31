import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private API_URL = 'http://localhost:3000/api/v1/auth/';
  public authToken?: string;
  private tokenKey: string = 'authToken';
  currentUser?: any;
  loginState?: boolean;

  /**
   * @description: Function to save any item to the localstoragee
   * @param key : The unique identifier for the item to be stored
   * @param value : The data to be stored
   */
  private _saveToStorage(key: string, value: any){
    localStorage.setItem(key, value);
  }

  saveAuthToken():void{
    this._saveToStorage(this.tokenKey, this.authToken);
  }

  isLoggedIn():boolean{
    let token = localStorage.getItem(this.tokenKey);
    return token != null && token.length > 0;
  }

  getToken():string | null{
    return this.isLoggedIn() ? localStorage.getItem(this.tokenKey) : null;
  }

  getCurrentUser(cb?: ()=> void){
    this.getProfile().subscribe((res)=>{
      if(res['status'] == 'success') {
        this.currentUser = res.data!['user'];
        if(cb) cb();
      }
    })
  }

  getProfile():Observable<any>{
    return this._http.get<any>(this.API_URL + '/my-profile')
    .pipe(
      map((res)=>{
        return res;
      })
    )
  }

  /**
   * @description Queries the API for all users
   * @returns Observable<any>
   */
  getAllUsers():Observable<any>{
    return this._http.get<any>(this.API_URL + `/all-users`)
    .pipe(
      map((res)=>{
        return res;
      })
    )
  }

  constructor(private _http: HttpClient) { }

  logout(){
    localStorage.removeItem(this.tokenKey);
  }

  registerUser(data: any):Observable<any>{
    return this._http.post<any>(this.API_URL + `/register`, data)
    .pipe(
      map((res)=>{
        return res;
      })
    )
  }

  loginAuth(data: any):Observable<any>{
    return this._http.post<any>(this.API_URL + `/login`, data)
    .pipe(
      map((res)=>{
        return res;
      })
    )
  }
}
