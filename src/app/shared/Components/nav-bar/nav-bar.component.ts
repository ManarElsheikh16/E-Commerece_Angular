import { Component, OnInit } from '@angular/core';
import { NavService } from '../../Services/nav.service';
import { LoginService } from 'src/app/authntacation/Services/login.service';
import { Router } from '@angular/router';
import { CartService } from 'src/app/cart/Servecies/cart.service';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {
  catogres: any[] = [];
  isLogin: boolean = false;
  public totalItem = new BehaviorSubject(0);
  customatId: any;
  items!: number;
  logged: boolean = false;
  testToken!: any;
  public isSeller :BehaviorSubject<number> = new BehaviorSubject<number>(0);
  public isShipper :BehaviorSubject<number> = new BehaviorSubject<number>(0);
  public isAdmin :BehaviorSubject<number> = new BehaviorSubject<number>(0);

  constructor(private servece: NavService, private _LoginService: LoginService, private _Router: Router,
    private _CartService: CartService) {
    // this.customatId = this._LoginService.getUserId();
  }
  ngOnInit(): void {
    this.testToken = JSON.stringify(localStorage.getItem('userToken'));
    this._LoginService.userData.subscribe(() => {
      if (this._LoginService.userData.getValue() != null && this.testToken != null) {
        console.log(this.isLogin);
        this.isLogin = true;
      }
      else {
        this.isLogin = false;
        this.isSeller.next(0);
        this.isShipper.next(0);
        this.isAdmin.next(0);

      }
      if (this._LoginService.getUserRole() == "Seller") {
        this.isSeller.next(1);
      }
      else {
        this.isSeller.next(0);
      }
      if (this._LoginService.getUserRole() == "Shipper") {
        this.isShipper.next(1);
      }
      else {
        this.isShipper.next(0);
      }
      if (this._LoginService.getUserRole() == "Admin") {
        this.isAdmin.next(1);
      }
      else {
        this.isAdmin.next(0);
      }


    })
    this._LoginService.CartQuntity.subscribe((x) => {
      console.log(x);
      this.items = x;
    })

  }
  logOut() {
    this._LoginService.logOut();
    this._LoginService.removeCartCount();
  }
  goToCart() {
    if (this._LoginService.userData.getValue() !== null) {
      this._Router.navigate(['/cart']);
    }
    else {
      this._Router.navigate(['unlocked'])
    }
  }


}
