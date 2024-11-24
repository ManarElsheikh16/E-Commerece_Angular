import { Component, OnInit } from '@angular/core';
import { AdminServiceService } from '../admin-service.service';

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.scss']
})
export class AdminDashboardComponent implements OnInit{

  numberofOrder:number=0;
  profit:number=0;
  DateOfLastOrder:Date=new Date('2023-1-1');
  numberOfUsers:number=0;
  numOfAllCustomer:any[]=[];
  constructor(private DashbordServ: AdminServiceService)
  {

  }
  ngOnInit(): void {
    this.GetOrederNumber();
    this.GetProfit();
    this.GetDateOfLastOrder();
    this.GetNumberOfUsers();
  }

  GetOrederNumber()
  {
    this.DashbordServ.GetNumberOfOrders().subscribe((num:any)=>{
     this.numberofOrder=num;
     console.log(num);
    })
  }
  GetProfit()
  {
    this.DashbordServ.GetProfits().subscribe((profits:any)=>{
      this.profit=profits;

    })
  }
  GetDateOfLastOrder()
  {
    this.DashbordServ.GetLastOrder().subscribe((date:any)=>{
      this.DateOfLastOrder=date;

    })
  }
  GetNumberOfUsers()
  {
      this.DashbordServ.GetAllcustomers().subscribe((data:any)=>{
        this.numOfAllCustomer=data;
        this.numberOfUsers+=this.numOfAllCustomer.length;
        });
  }


}
