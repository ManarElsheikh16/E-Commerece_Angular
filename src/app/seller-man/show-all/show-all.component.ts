import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/authntacation/Services/login.service';
import { SellerServiceService } from '../service/seller-service.service';

@Component({
  selector: 'app-show-all',
  templateUrl: './show-all.component.html',
  styleUrls: ['./show-all.component.scss']
})
export class ShowAllComponent  implements OnInit {

  AllProducts:any[]=[];
  sellerID!:string;
  
  
  constructor(private _SellerService:SellerServiceService ,private _LoginService:LoginService,private router:Router ) {
  
    
  }
    ngOnInit(): void {
      this.sellerID=this._LoginService.loginUserId;
  
     this.GetAllProduct();
     console.log(this. AllProducts)
     
    }
  
    GetAllProduct(){
      this._SellerService.getAllProducts(this.sellerID).subscribe((data)=>{
  
        this. AllProducts=data; 
      })
    }
  
  AddProduct(){
    this.router.navigate(['addSellerProduct']);
  }
  
  }
  

