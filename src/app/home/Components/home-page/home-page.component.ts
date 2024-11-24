import { Component, OnInit } from '@angular/core';
import { HomepageService } from '../../services/homepage.service';
import { ActivatedRoute, Router } from '@angular/router';
import { LoginService } from 'src/app/authntacation/Services/login.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})

export class HomePageComponent implements OnInit {
  allCategories: any[] = [];
  allCategoriesName: string[] = [];
  allproduct: any[] = [];
  catvar: number[] = [3, 3, 3, 3];
  // allProducts:any[]=[];
  Mobiles: any[] = [];
  Computers: any[] = [];
  Televisions: any[] = [];
  Appliances: any[] = [];
  test: any[] = [];
  userID: any;
  cartItems!: number;
  productCart!: { cartId: any, productId: any }
  constructor(private _AllproductService: HomepageService, private _router: Router, private _activatedRoute: ActivatedRoute,
    private _LoginService: LoginService) {
  }
  ngOnInit(): void {
    this.getCategories();
    this.getCategoriesName();
    this.getProducts();
    console.log("Home");



  }
  getCategories() {
    this._AllproductService.getAllCategories().subscribe((cats: any) => {
      this.allCategories = cats;

      console.log('alllllC', this.allCategories);
    },

      (error) => {
        alert(error.message);

      }
    )
  }
  getCategoriesName() {
    this._AllproductService.getAllCategoriesName().subscribe((cats: any) => {
      this.allCategoriesName = cats;

      console.log('alllllCat', this.allCategories);
      this.filterCategories();

    },
      (error) => {
        alert(error.message);

      }
    )
  }
  getProducts() {
    this._AllproductService.getAllProducts().subscribe((prods: any) => {
      this.allproduct = prods;
      console.log('alllllPro', this.allproduct)
    }, error => {
      alert(error.message);
    }
    )

  }
  getProductByCategory(value: string) {

    this._AllproductService.getProductsByCategory(value).subscribe((products: any) => {
      this.test = products;
    })

  }

  filterCategories() {
    console.log("Filtering");
    console.log(this.allCategories.length);
    for (var i = 0; i < this.allCategoriesName.length; i++) {
      console.log(this.allCategoriesName[i]);
      if (i === 0) {

        this._AllproductService.getProductsByCategory(this.allCategoriesName[i]).subscribe((products: any) => {
          this.Mobiles = products;
          console.log(this.Mobiles);
        })



      }
      else if (i === 1) {

        this._AllproductService.getProductsByCategory(this.allCategoriesName[i]).subscribe((products: any) => {
          this.Computers = products;
          console.log(this.Computers);
        })

      }
      else if (i === 2) {
        this._AllproductService.getProductsByCategory(this.allCategoriesName[i]).subscribe((products: any) => {
          this.Televisions = products;
          console.log(this.Televisions);
        })

      }
      else {
        this._AllproductService.getProductsByCategory(this.allCategoriesName[i]).subscribe((products: any) => {
          this.Appliances = products;
          console.log(this.Appliances);
        })

      }

    }
  }

  seeMore(inputString: string): void {
    if (inputString === this.allCategoriesName[0]) {
      if (this.Mobiles.length > this.catvar[0]) {
        this.catvar[0] += 10;

        if (this.allCategoriesName[0].length <= this.catvar[0]) {
          var myContainer = document.getElementById('cat0') as HTMLElement;
          myContainer.innerHTML = " view less";
        }

      }
      else {
        this.catvar[0] -= 10;
        var myContainer = document.getElementById('cat0') as HTMLElement;
        myContainer.innerHTML = " view more";
      }

    }
    else if (inputString === this.allCategoriesName[1]) {
      if (this.Computers.length > this.catvar[1]) {

        this.catvar[1] += 10;

        if (this.allCategoriesName[1].length <= this.catvar[1]) {
          var myContainer = document.getElementById('cat1') as HTMLElement;
          myContainer.innerHTML = " view less";
        }

      }
      else {
        this.catvar[1] -= 10;
        var myContainer = document.getElementById('cat1') as HTMLElement;
        myContainer.innerHTML = " view more";
      }

    }
    else if (inputString === this.allCategoriesName[2]) {
      if (this.Televisions.length > this.catvar[2]) {

        console.log(this.catvar[2]);
        this.catvar[2] += 10;
        console.log(this.catvar[2]);
        if (this.Televisions.length <= this.catvar[2]) {

          var myContainer = document.getElementById('cat2') as HTMLElement;
          myContainer.innerHTML = " view less";
        }

      }
      else {
        this.catvar[2] -= 10;
        var myContainer = document.getElementById('cat2') as HTMLElement;
        myContainer.innerHTML = " view more";
      }

    }
    else if (inputString === this.allCategoriesName[3]) {
      if (this.Appliances.length > this.catvar[3]) {
        this.catvar[3] += 10;

        if (this.Appliances.length <= this.catvar[3]) {
          var myContainer = document.getElementById('cat3') as HTMLElement;
          myContainer.innerHTML = " view less";
        }

      }
      else {
        this.catvar[3] -= 10;
        var myContainer = document.getElementById('cat3') as HTMLElement;
        myContainer.innerHTML = " view more";
      }

    }

    // this._router.navigate(['Allproduct'])
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
