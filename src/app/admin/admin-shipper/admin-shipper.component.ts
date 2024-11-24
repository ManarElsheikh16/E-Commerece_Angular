import { Component } from '@angular/core';
import { AdminServiceService } from '../admin-service.service';

@Component({
  selector: 'app-admin-shipper',
  templateUrl: './admin-shipper.component.html',
  styleUrls: ['./admin-shipper.component.scss']
})
export class AdminShipperComponent {

  Shippers:any[]=[];
  confirmMessage:string="";
  regictMessage:string="";

  constructor(private DashbordServ:AdminServiceService)
  {

  }
  ngOnInit(): void {
    this.GetallShippersWithStatusWaiting()
  }


  GetallShippersWithStatusWaiting()
  {
     this.DashbordServ.GetAllshippersWithStatusWaiting().subscribe((data)=>{
      this.Shippers=data;
    })
  }
  confirmAccount(id:any)
  {
     this.DashbordServ.ShipperConfirmAccount(id).subscribe((msg:any)=>{
     this.confirmMessage=msg;
     this.GetallShippersWithStatusWaiting();
   })
   window.location.reload();

  }

  rejectAcount(id:any)
  {
       this.DashbordServ.ShipperRejectAcount(id).subscribe((msg:any)=>{
       this.regictMessage=msg;
       this.GetallShippersWithStatusWaiting();

  })
  window.location.reload();

 }

}
