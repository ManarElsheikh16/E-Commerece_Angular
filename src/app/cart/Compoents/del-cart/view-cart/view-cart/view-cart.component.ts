import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/authntacation/Services/login.service';
import { CartService } from 'src/app/cart/Servecies/cart.service';

@Component({
  selector: 'app-view-cart',
  templateUrl: './view-cart.component.html',
  styleUrls: ['./view-cart.component.scss']
})
export class ViewCartComponent {
  public products : any = [];
  public allCartProducts : any = [];
  public grandTotal !: number;
  customatId:any;
  constructor(private _Router:Router ,private _CartService:CartService
    ,private _LoginService:LoginService) {
      this.customatId = this._LoginService.getUserId();
     }

  ngOnInit(): void {
    this.grandTotal = this.getTotalPrice();
    this.getAllCartProducts();
  }
  getAllCartProducts()
  {
    this._CartService.getAllProductCart(this.customatId).subscribe((cartProducts)=>{
      this.allCartProducts = cartProducts;
      console.log(cartProducts);
      this.grandTotal = this.getTotalPrice();
    })
  }
  removeCartId(ProductCart:number)
  {
    this._CartService.removeCartProductItem(ProductCart).subscribe((response)=>{
      if(response.message == 'Deleted')
       {
          console.log("Deleted Success");
          this.getAllCartProducts();
          this._LoginService.decreaseCartCount();
        }
        else
        {
          console.log("Failed to delete");
        }
    })
  }
  increaseProductCartQuantity(ProductCart:any)
  {
    this._CartService.increaseCartProductQuantity(ProductCart).subscribe((response)=>{
      console.log(response);
      if(response.message == 'Increased')
      {
         console.log("Increased");
         this.getAllCartProducts();
       }
       else
       {
         console.log("Failed to increase");
       }
    })
  }

  decreaseProductCartQuantity(ProductCart:any)
  {
    this._CartService.decreaseCartProductQuantity(ProductCart).subscribe((response)=>{
      console.log(response);
      if(response.message == 'Decreased')
      {
         console.log("Decreased");
         this.getAllCartProducts();
       }
       else
       {
         console.log("Failed to Decreased");
       }
    })
  }
  getTotalPrice() : number{
    let grandTotal = 0;
    this.allCartProducts.map((a:any)=>{
      grandTotal += a.quantity*a.price;
    })
    return grandTotal;
  }
  ShopMore()
  {
    this._Router.navigate(['Allproduct']);
  }
  checkOut()
  {
    this._Router.navigate(['checkout']);

  }
  removeCartProducts()
  {
    this._CartService.removeCartProducts(this.customatId).subscribe((response)=>
    {
      console.log(response);
      if(response.message == 'Success')
      {
         console.log("Success");
         this.getAllCartProducts();
         this._LoginService.removeCartCount();
       }
       else
       {
         console.log("Failed to Delete");
       }

    })
  }

}
