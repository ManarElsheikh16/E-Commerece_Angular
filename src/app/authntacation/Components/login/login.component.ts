import { Component } from '@angular/core';
import { FormBuilder,FormGroup,Validators } from '@angular/forms';
import { PasswordValidator } from '../../Custom-Validations/Password';
import { Router } from '@angular/router';
import { LoginService } from '../../Services/login.service';
import jwtDecode from 'jwt-decode';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  invaliduser:string='';
  userData:any=null;
  loginUserName:any=null;
  UserName!:string;
  NameOfUSer:string='';
  constructor(private formBuilder: FormBuilder,private router:Router,public _LoginService:LoginService )
  {
  }


  loginForm=this.formBuilder.group({
    userName: ['', [Validators.pattern(/[A-Z].*$/), Validators.required  ,Validators.minLength(3)]],
    password:['',[Validators.required,Validators.minLength(4),PasswordValidator]],
  });

  get userName()
  {
    return this.loginForm.get('userName');
  }

  get password()
  {
   return this.loginForm.get('password');
  }

  SubmitData(loginForm:FormGroup)
  {
    if(loginForm.valid)
    {
      console.log("Valid");
      console.log(loginForm.value);
      this._LoginService.login(loginForm.value).subscribe((response)=>
      {
        if(response.Messege="success")
        {
          localStorage.setItem('userToken',response.token);
          this.invaliduser = "";
          this._LoginService.savaUserData()
          this._LoginService.getUserName();
          this._LoginService.getToken();
          let encodedUserData=JSON.stringify(localStorage.getItem('userToken'));
          this.userData = jwtDecode(encodedUserData);
          this.loginUserName=this.userData['http://schemas.microsoft.com/ws/2008/06/identity/claims/role'];

            this.NameOfUSer=this.userData['http://schemas.microsoft.com/ws/2008/06/identity/claims/name'];

          if(this.loginUserName == 'Customer')
          {
            this.router.navigate(['home']);
          }
          else if (this.loginUserName == 'Seller')
          {
            this.router.navigate(['addProducts']);
          }
          else if (this.loginUserName == 'Shipper')
          {
            this.router.navigate(['shipperhome']);
          }
          else if (this.loginUserName == 'Admin')
          {
            this.router.navigate(['Admin']);
          }
          else{
            this.router.navigate(['home']);
          }


         console.log(this.UserName);

        }},
        error =>{
          this.invaliduser = "inValid User";
        }
      )

    }
    else
    {
      console.log("notValid");
      console.log(loginForm.value);
    }

  }





}
