import { AfterViewInit, Component, OnInit } from '@angular/core';
import { AllproductsService } from '../../Servieces/allproducts.service';
import { RouterLink, RouterModule } from '@angular/router';
import { ActivatedRoute, Router } from '@angular/router';
import { HomepageService } from 'src/app/home/services/homepage.service';
import { LoginService } from 'src/app/authntacation/Services/login.service';

@Component({
  selector: 'app-allproducts',
  templateUrl: './allproducts.component.html',
  styleUrls: ['./allproducts.component.scss']
})
export class AllproductsComponent implements OnInit {
  products: any[] = [];
  userID: any;
  productCart!: { cartId: any, productId: any }
  constructor(private servecproduct: AllproductsService, private _LoginService: LoginService,
    private _AllproductService: HomepageService, private _router: Router) { }
  ngOnInit(): void {

    this.GetAllproducts();
  }


  GetAllproducts() {
    this.servecproduct.GetAllproducts().subscribe((data: any) => {
      this.products = data;
      console.log(data);
    })

  }
  getProductsByCategory(value: string) {
    this.servecproduct.GetProductsByCategory(value).subscribe((data: any) => {
      this.products = data;
    })
  }

  addToCart(id: any) {
    this.userID = this._LoginService.getUserId();
    console.log("UId", this.userID);
    this.productCart = { cartId: this.userID, productId: id }
    console.log(this.productCart);
    if (this._LoginService.userData.getValue() !== null) {
      this._AllproductService.addProductCart(this.productCart).subscribe((response) => {
        if (response.message == 'success') {
          console.log("Added");
          this._LoginService.getCartCount();
        }
        else {
          console.log("Failed");
          console.log(response);
        }
      })
    }
    else {
      this._router.navigate(['unlocked'])
    }
  }


}
