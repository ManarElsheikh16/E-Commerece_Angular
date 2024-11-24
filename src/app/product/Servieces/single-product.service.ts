import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { catchError} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SingleProductService {

  constructor(private _httpClient:HttpClient ) { }

  getSingleProductDetails(productID:number):Observable<any>
  {
    return this._httpClient.get(`http://localhost:5252/api/Product/${productID}`).pipe(
      catchError(err => {
        console.log(' error while fetching posts:', err);
        return [];}))
}
}
