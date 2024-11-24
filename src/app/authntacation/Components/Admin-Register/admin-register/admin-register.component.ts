import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ConfirmPassVali } from 'src/app/authntacation/Custom-Validations/ConfirmPassVald';
import { ForbiddenNameValidator } from 'src/app/authntacation/Custom-Validations/FirstNameVal';
import { PasswordValidator } from 'src/app/authntacation/Custom-Validations/Password';
import { RegisterService } from 'src/app/authntacation/Services/register.service';

@Component({
  selector: 'app-admin-register',
  templateUrl: './admin-register.component.html',
  styleUrls: ['./admin-register.component.scss']
})
export class AdminRegisterComponent {
  error:string='';
  constructor(private formBuilder:FormBuilder, public _RegisterService:RegisterService ,
    public _router:Router){}

  ngOnInit(): void {

  }

  submitRegisterForm(registerForm:FormGroup)
  {

    if(registerForm.valid)
    {
      console.log("valid");
      console.log(registerForm.value);
      this._RegisterService.register(registerForm.value).subscribe((response)=>
      {

        if(response.message == 'success')
        {
          console.log("inside");
          this._router.navigate(['login']);

        }
        else
        {
          this.error = response.errors.email.message;
        }
      })

    }
    else{
      console.log("notValid");
      console.log(registerForm.value);
    }

  }

  getLogin()
  {
    this._router.navigate(['login']);
  }

  RegisterationForm = this.formBuilder.group({
    firstName: ['', [Validators.pattern(/[A-Z].*$/), Validators.required, Validators.minLength(3), ForbiddenNameValidator]],
    lastName: ['', [Validators.pattern(/[A-Z].*$/), Validators.required, Validators.minLength(3), ForbiddenNameValidator]],
    userName: ['', [Validators.pattern(/[A-Z].*$/), Validators.required, Validators.minLength(3), ForbiddenNameValidator]],
    address: ['', [Validators.pattern(/[A-Z].*$/), Validators.required, Validators.minLength(3), ForbiddenNameValidator]],
    email: ['', [Validators.email, Validators.required]],
    password: ['', [Validators.required, PasswordValidator]],
    confirmPassword: ['', [Validators.required, PasswordValidator]],
  }, { Validators: [ConfirmPassVali]
  })
  get FirstName() {
    return this.RegisterationForm.get('firstName');
  }
  get LastName() {
    return this.RegisterationForm.get('lastName')
  }
  get userName() {
    return this.RegisterationForm.get('userName')
  }
  get address() {
    return this.RegisterationForm.get('address')
  }
  get Email() {
    return this.RegisterationForm.get('email')
  }
  get password() {
    return this.RegisterationForm.get('password')
  }
  get confirmPassword(){
    return this.RegisterationForm.get('confirmPassword')
  }

}
