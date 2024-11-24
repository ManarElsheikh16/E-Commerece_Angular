import { Component } from '@angular/core';
import { AdminServiceService } from '../admin-service.service';

@Component({
  selector: 'app-admin-customer',
  templateUrl: './admin-customer.component.html',
  styleUrls: ['./admin-customer.component.scss']
})
export class AdminCustomerComponent {

  Customers:any[]=[];
  confirmMessage:string="";
  regictMessage:string="";

  constructor(private DashbordServ:AdminServiceService){}
  ngOnInit(): void {
    this.GetAllCustomers();
  }

  GetAllCustomers(){
      this.DashbordServ.GetAllcustomers().subscribe((data)=>{
      this.Customers=data;
      console.log(this.Customers)
     });
  }

}
