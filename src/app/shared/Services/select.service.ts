import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SelectService {

  constructor(private Http:HttpClient) { }

  GatCatogry():Observable<any>
  {
    return this.Http.get('https://fakestoreapi.com/products/categories');
  }
}
