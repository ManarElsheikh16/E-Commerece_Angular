import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  constructor(private _HttpClient:HttpClient) { }

  register(formData:object):Observable<any>
  {
   return this._HttpClient.post(`http://localhost:5252/api/Account/CustomerRegister`,formData)
  }
  shipperRegister(formData:object):Observable<any>
  {
    return this._HttpClient.post(`http://localhost:5252/api/Account/ShipperRegister`,formData)
  }
  sellerRegister(formData:any):Observable<any>
  {
    return this._HttpClient.post(`http://localhost:5252/api/Account/Sellerregister`,formData)

  }
}
