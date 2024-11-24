import { Component, OnInit } from '@angular/core';
import { FormArray, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ForbiddenNameValidator } from '../../Custom-Validations/FirstNameVal';
import { FormControl } from '@angular/forms';
import { PasswordValidator } from '../../Custom-Validations/Password';
import { ConfirmPassVali } from '../../Custom-Validations/ConfirmPassVald';
import { FormBuilder } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { RegisterService } from '../../Services/register.service';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  error: string = '';
  constructor(private formBuilder: FormBuilder, public _RegisterService: RegisterService, public _router: Router) { }

  ngOnInit(): void {

  }

  submitRegisterForm(registerForm: FormGroup) {

    if(registerForm.valid) {
      console.log("valid");
      console.log(registerForm.value);
      this._RegisterService.register(registerForm.value).subscribe((response) => {

        if (response.message == 'success') {
          console.log("inside");
          this._router.navigate(['login']);

        }
        else {
          this.error = response.errors.email.message;
        }
      })

    }
    else {
      console.log("notValid");
      console.log(registerForm.value);
    }

  }

  getLogin() {
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
  }, {
    Validators: [ConfirmPassVali]
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
  get confirmPassword() {
    return this.RegisterationForm.get('confirmPassword')
  }

}



