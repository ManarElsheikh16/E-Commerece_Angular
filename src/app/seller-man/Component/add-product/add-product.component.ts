import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/authntacation/Services/login.service';
import { SellerServiceService } from '../../service/seller-service.service';
import { ReactiveFormsModule } from '@angular/forms';
@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.scss']
})
export class AddProductComponent  implements OnInit {
  sellerID!:string;
  Seller!:string;
  SellerInfo:any;
  products: any[] = [];
constructor(public _SellerService:SellerServiceService,
  private _Router:Router, private _LoginService:LoginService) {
}
ngOnInit(): void {

 this.sellerID=this._LoginService.getUserId();
 console.log("SIDd",this.sellerID);
 this. GetSellerProducts(this.sellerID);
 this.Seller=this._LoginService.getUserName();
this.getSellerINfo();
}


ShowAll(){
  this._Router.navigate(['ShowAllSeller']);
}

GOaDD(){
  this._Router.navigate(['addSellerProduct']);
}
GetSellerProducts(id:any){
  this._SellerService.getAllProducts(id).subscribe((data)=>{
    this.products=data;
  })

}

getSellerINfo()
{
  this._SellerService.getSellerById(this.sellerID).subscribe((response)=>{
    this.SellerInfo = response;
    console.log(this.SellerInfo);
  })
}


}


