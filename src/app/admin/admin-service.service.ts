import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AdminServiceService {


  constructor(private Http: HttpClient) { }



  GetAllshippersWithStatusWaiting(): Observable<any> {
    return this.Http.get("http://localhost:5252/api/Shipper/GetAllShiperwithStatusWiting");
  }
  GetAllcustomers(): Observable<any> {
    return this.Http.get("http://localhost:5252/api/Seller/AllCustomer");
  }
  GetAllsellersWithStatusWaiting(): Observable<any> {
    return this.Http.get("http://localhost:5252/api/Seller/GetAllsellerwithStatusWiting");
  }

  SellerConfirmAccount(id: any) {
    return this.Http.put("http://localhost:5252/api/Seller/Confirm/" + id, { status: confirm });
  }
  SellerRejectAcount(id: any) {
    return this.Http.put("http://localhost:5252/api/Seller/regict/" + id, { IsDeleted: true });
  }

  ShipperConfirmAccount(id: any) {
    return this.Http.put("http://localhost:5252/api/Shipper/Confirm/" + id, { status: confirm });
  }
  ShipperRejectAcount(id: any) {
    return this.Http.put("http://localhost:5252/api/Shipper/regict/" + id, { IsDeleted: true });
  }

  GetNumberOfOrders() {
    return this.Http.get("http://localhost:5252/api/Order/NumbersOfOreder");
  }
  GetLastOrder() {
    return this.Http.get("http://localhost:5252/api/Order/LastOrder");
  }
  GetProfits() {
    return this.Http.get("http://localhost:5252/api/Order/Getprofit");
  }
}
