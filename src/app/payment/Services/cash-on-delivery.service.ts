import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CashOnDeliveryService {
  constructor( private _HttpClient:HttpClient) { }
  makeOrder(order:any):Observable<any>
  {
    return this._HttpClient.post('http://localhost:5252/api/Order',order);
  }
}
