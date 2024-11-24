import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ShipperService {

  constructor(private Http:HttpClient) { }

  getShipperOrders(ShipperID:any):Observable<any>
  {
     return this.Http.get("http://localhost:5252/api/Shipper/Allorder/"+ShipperID);
  }
  confirmOrder(OrderId:number,ShipperID:any):Observable<any>
  {
    return this.Http.put("http://localhost:5252/api/Shipper/OrderDone/"+OrderId+'/'+ShipperID,{});
  }
  getSellerById(id:any):Observable<any>
  {
    return this.Http.get(`http://localhost:5252/api/Shipper/GetSingleShipper/${id}`);
  }
}
