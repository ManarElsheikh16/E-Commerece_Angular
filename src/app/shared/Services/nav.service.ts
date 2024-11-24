import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NavService {

  constructor(private Http:HttpClient) { }

  GatCatogry():Observable<any>
  {
    return this.Http.get('http://localhost:5252/api/Category');
  }
  filter(value:any):Observable<any>
  {
    return this.Http.get('http://localhost:5252/api/Product');
  }
}
