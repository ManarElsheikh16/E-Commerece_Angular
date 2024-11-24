import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SellerServiceService {

  constructor(private _HttpClient :HttpClient) { }
  addProduct(formData:any):Observable<any>
  {
    return this._HttpClient.post('http://localhost:5252/api/Product',formData);
  }
  GetCategory():Observable<any>
  {
    return this._HttpClient.get('http://localhost:5252/api/Category');
  }
  getAllProducts(id:any):Observable<any>
  {
    return this._HttpClient.get(`http://localhost:5252/api/Product/sellerId/${id}`);
  }
  getSellerById(id:any):Observable<any>
  {
    return this._HttpClient.get(`http://localhost:5252/api/Seller/GetSingleSeller/${id}`);
  }
}
