import { Component } from '@angular/core';
import { ShipperService } from '../../services/shipper.service';
import { LoginService } from 'src/app/authntacation/Services/login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-shipper-home',
  templateUrl: './shipper-home.component.html',
  styleUrls: ['./shipper-home.component.scss']
})
export class ShipperHomeComponent {
  OrdersShippers: any[] = [];
  confirmMessage: any;
  ShipperID: any;
  Shipper!: string;
  ShipperInfo: any;
  constructor(private shipperService: ShipperService, private _LoginService: LoginService
    , private _Router: Router) {

  }

  ngOnInit(): void {
    this.getShipperId();
    this.GetOrders(this.ShipperID);
    this.Shipper=this._LoginService.getUserName();
    this.getSellerINfo();
  }
  getShipperId() {
    this.ShipperID = this._LoginService.getUserId();
    console.log(this.ShipperID)
  }
  GetOrders(ShipperID: any) {
    this.shipperService.getShipperOrders(ShipperID).subscribe((data) => {
      this.OrdersShippers = data;
      console.log(this.OrdersShippers);
    })
  }
  confirmOrder(orderId: any) {
    this.shipperService.confirmOrder(orderId, this.ShipperID).subscribe((msg: any) => {
      this.confirmMessage = msg;
      this.GetOrders(this.ShipperID);

    })
  }
  getSellerINfo()
{
  this.shipperService.getSellerById(this.ShipperID).subscribe((response)=>{
    this.ShipperInfo = response;
    console.log(this.ShipperInfo);
  })
}
}
