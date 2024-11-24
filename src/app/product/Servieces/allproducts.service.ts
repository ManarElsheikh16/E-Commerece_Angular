import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class AllproductsService {

  constructor(private Htpp:HttpClient) { }

  GetAllproducts():Observable<any>
  {
    return this.Htpp.get('http://localhost:5252/api/Product')
  }
  GetProductsByCategory(cat:string)
  {
    return this.Htpp.get('http://localhost:5252/api/Product/'+cat);
  }


}
