import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor(private _HttpClient:HttpClient) { }
  getAllProductCart(customartId:string):Observable<any>
  {
    return this._HttpClient.get(`http://localhost:5252/api/ProductCart/GetAllProdectCart/${customartId}`);
  }
  removeCartProductItem(productId:any):Observable<any>
  {
    return this._HttpClient.delete(`http://localhost:5252/api/ProductCart/${productId}`);
  }
  increaseCartProductQuantity(productId:any):Observable<any>
  {
    return this._HttpClient.put(`http://localhost:5252/api/ProductCart/IncreamentByOne/${productId}`,{});
  }
  decreaseCartProductQuantity(productId:any):Observable<any>
  {
    return this._HttpClient.put(`http://localhost:5252/api/ProductCart/DecreamentByOne/${productId}`,{});
  }
  removeCartProducts(customartId:any):Observable<any>
  {
    return this._HttpClient.put(`http://localhost:5252/api/Cart/${customartId}`,{});
  }
}
