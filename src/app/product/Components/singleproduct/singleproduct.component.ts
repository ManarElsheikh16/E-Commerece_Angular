import { Component, OnInit } from '@angular/core';
import { SingleProductService } from '../../Servieces/single-product.service';
import { ActivatedRoute, Router } from '@angular/router';
import { LoginService } from 'src/app/authntacation/Services/login.service';
import { HomepageService } from 'src/app/home/services/homepage.service';

@Component({
  selector: 'app-singleproduct',
  templateUrl: './singleproduct.component.html',
  styleUrls: ['./singleproduct.component.scss']
})
export class SingleproductComponent implements OnInit {
  productId!: any;
  productDetails!: any;
  AdditionalFeature: any[] = [];
  userID: any;
  productCart!: { cartId: any, productId: any }
  constructor(private _activatedRoute: ActivatedRoute, private _singleProductService: SingleProductService,
    private _LoginService: LoginService, private _AllproductService: HomepageService, private _router: Router) { }

  ngOnInit(): void {
    this._activatedRoute.paramMap.subscribe(params => {
      this.productId = params.get('id');
      this._singleProductService.getSingleProductDetails(this.productId).subscribe(product => {
        this.productDetails = product;
        this.AdditionalFeature = this.productDetails.additionalFeature;
        console.log("details", this.productDetails);
        console.log("details", this.productDetails.mainImage);
        console.log("ADDDD", this.AdditionalFeature);

      });
    });
  }
  getProductDetails() {
    this._singleProductService.getSingleProductDetails(this.productId).subscribe(

      (product) => {
        this.productDetails = product
      });
    console.log("PD");
    console.log(this.productDetails);
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
