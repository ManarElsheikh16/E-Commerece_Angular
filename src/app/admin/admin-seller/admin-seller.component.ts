import { Component } from '@angular/core';
import { AdminServiceService } from '../admin-service.service';
import { Router } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-admin-seller',
  templateUrl: './admin-seller.component.html',
  styleUrls: ['./admin-seller.component.scss']
})
export class AdminSellerComponent {

  Sellers:any[]=[];

  confirmMessage:string="";
  regictMessage:string="";

constructor(private DashbordServ:AdminServiceService , private _Router:Router,
  private location: Location){}
  ngOnInit(): void {
   this.GetallSellersWithStatusWaiting();
  }

  GetallSellersWithStatusWaiting()
  {
    this.DashbordServ.GetAllsellersWithStatusWaiting().subscribe((data)=>{
      this.Sellers=data;
    })
  }
  confirmAccount(id:any)
  {
     this.DashbordServ.SellerConfirmAccount(id).subscribe((msg:any)=>{
     this.confirmMessage=msg;
     console.log(msg);

   })
   window.location.reload();
  }


  rejectAcount(id:any)
  {
    this.DashbordServ.SellerRejectAcount(id).subscribe((msg:any)=>{
      this.regictMessage=msg;
  })
   window.location.reload();


 }




}
