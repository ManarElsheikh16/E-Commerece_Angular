import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
 
import { Observable } from 'rxjs';
 
@Injectable({
  providedIn: 'root'
})
export class HomepageService {

  constructor(private _httpClient:HttpClient) { }

  getAllProducts():Observable<any>
  {
    return this._httpClient.get('http://localhost:5252/api/Product');
  }
  getAllCategories():Observable<any>
  {
    return this._httpClient.get('http://localhost:5252/api/Category');
  }
  getProductsByCategory(cat:string):Observable<any>
  {
    return this._httpClient.get('http://localhost:5252/api/Product/'+cat)
  }
getAllCategoriesName():Observable<any>
{
  return this._httpClient.get('http://localhost:5252/api/Category/GetAllName');
}
addProductCart(productCart:object):Observable<any>
{
  return this._httpClient.post('http://localhost:5252/api/ProductCart/AddCartProduct',productCart);
}


}