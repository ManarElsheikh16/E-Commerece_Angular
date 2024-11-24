import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import jwtDecode from 'jwt-decode';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  checkLogged = new BehaviorSubject(null);
  CartQuntity = new BehaviorSubject<number>(0);
  userData = new BehaviorSubject(null);
  loginUserName: string = '';
  loginUserRole:string = '';
  x:number=0
  loginUserId: string = '';
  userInfo: any = null;
  decodedToken: any;
  constructor(private _httpClient: HttpClient, public _Router: Router) {
    if(localStorage.getItem('userToken') != null)
    {
      this.savaUserData();
    }
  }
  login(formData: object): Observable<any> {
    return this._httpClient.post(`http://localhost:5252/api/Account/login`, formData);
  }
  savaUserData() {
    let encodedUserData = JSON.stringify(localStorage.getItem('userToken'));
    console.log(encodedUserData);
    this.userData.next(jwtDecode(encodedUserData));
    console.log(this.userData);
    // console.log(this.userData['http://schemas.xmlsoap.org/ws/2005/05/identity/claims/name']);
  }

  logOut() {
    localStorage.removeItem('userToken');
    this.userData.next(null);
    this._Router.navigate(['login']);
  }
  getToken() {
    let encodedUserData = JSON.stringify(localStorage.getItem('userToken'));
    this.decodedToken = jwtDecode(encodedUserData);
    console.log(this.decodedToken);
  }
  getUserName() {
    let encodedUserData = JSON.stringify(localStorage.getItem('userToken'));
    this.userInfo = jwtDecode(encodedUserData);
    console.log(this.userData);
    this.loginUserName = this.userInfo['http://schemas.xmlsoap.org/ws/2005/05/identity/claims/name'];
    console.log(this.loginUserName);
    return this.loginUserName
  }

  getUserRole() {
    let encodedUserData = JSON.stringify(localStorage.getItem('userToken'));
    this.userInfo = jwtDecode(encodedUserData);
    this.loginUserRole = this.userInfo['http://schemas.microsoft.com/ws/2008/06/identity/claims/role'];
    console.log(this.loginUserRole);
    return this.loginUserRole
  }

  getUserId() {
    let encodedUserData = JSON.stringify(localStorage.getItem('userToken'));
    this.userInfo = jwtDecode(encodedUserData);
    console.log(this.userData);
    this.loginUserId = this.userInfo['http://schemas.xmlsoap.org/ws/2005/05/identity/claims/nameidentifier'];
    return this.loginUserId
  }
  getCartCount()
  {
   this.x++;
   this.CartQuntity.next(this.x);
  }
  decreaseCartCount()
  {
   this.x--;
   this.CartQuntity.next(this.x);
  }
  removeCartCount()
  {
   this.x=0;
   this.CartQuntity.next(this.x);
  }

}
