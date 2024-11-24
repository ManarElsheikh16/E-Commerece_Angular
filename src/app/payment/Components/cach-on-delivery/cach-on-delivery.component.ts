import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, NgModel, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/authntacation/Services/login.service';
import jwtDecode from 'jwt-decode';
import { CashOnDeliveryService } from '../../Services/cash-on-delivery.service';
import { CartService } from 'src/app/cart/Servecies/cart.service';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-cach-on-delivery',
  templateUrl: './cach-on-delivery.component.html',
  styleUrls: ['./cach-on-delivery.component.scss']
})
export class CachOnDeliveryComponent {
  invalidQuantity: string = '';
  userData: any = null;
  loginUserName: any = null;
  UserName!: string;
  userId!: any;
  selectedCity!:string;
  cityList:string[]=["Assuit","Cairo","Aswan","Luxor","Giza","Halwan","Tanta",
  "Qina","Minya","Alex","Suez","Port Said"];
  constructor(private formBuilder: FormBuilder, private router: Router, public _LoginService: LoginService,
    private CashOnDeliveryService:CashOnDeliveryService,private _CartService:CartService) {
    this.getUserId();
  }

  orderForm = this.formBuilder.group({
    id: [this.getUserId()],
    phone: ['', [Validators.required, Validators.pattern(/[0-9]{11}/)]],
    address: ['', [Validators.pattern(/[a-zA-Z].*$/), Validators.required, Validators.minLength(3)]],
  });

  get address() {
    return this.orderForm.get('address');
  }
  get id() {
    return this.orderForm.get('id');
  }
  get phone() {
    return this.orderForm.get('phone');
  }
  getUserId() {
    this.userId = this._LoginService.getUserId();
    console.log(this.userId);
  }
  onCitySelect(event:any)
  {
    this.selectedCity = event.target.value;
  }
  SubmitData(orderForm: FormGroup) {
    orderForm.get("id")?.setValue(this.userId)
    orderForm.get("address")?.setValue(
      this.selectedCity+':'+orderForm.get("address")?.value
    )
    console.log(orderForm.value);
    this.CashOnDeliveryService.makeOrder(orderForm.value).subscribe((response)=>{
      console.log(response);
      if(response.message == "success")
      {
        console.log("order Success");
        this.router.navigate(['done']);
        this.removeCartProducts();
        this._LoginService.removeCartCount();
      }
      else
      {
          console.log(response['message']);
          this.invalidQuantity = response['message'];
      }
    })

  }

  removeCartProducts()
  {
    this._CartService.removeCartProducts(this.userId).subscribe((response)=>
    {
      console.log(response);
      if(response.message == 'Success')
      {
         console.log("Success");
        //  this.getAllCartProducts();
       }
       else
       {
         console.log("Failed to Delete");
       }

    })
  }




}
