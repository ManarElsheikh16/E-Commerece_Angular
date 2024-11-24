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
  selector: 'app-seller-register',
  templateUrl: './seller-register.component.html',
  styleUrls: ['./seller-register.component.scss']
})
export class SellerRegisterComponent implements OnInit {
  error: string = '';
  selectedFile!: File;
  constructor(private formBuilder: FormBuilder, public _RegisterService: RegisterService, public _router: Router) { }

  ngOnInit(): void {

  }


  RegisterationForm = this.formBuilder.group({
    firstName: ['', [Validators.pattern(/[A-Z].*$/), Validators.required, Validators.minLength(3), ForbiddenNameValidator]],
    lastName: ['', [Validators.pattern(/[A-Z].*$/), Validators.required, Validators.minLength(3), ForbiddenNameValidator]],
    userName: ['', [Validators.pattern(/[A-Z].*$/), Validators.required, Validators.minLength(3), ForbiddenNameValidator]],
    address: ['', [Validators.pattern(/[A-Z].*$/), Validators.required, Validators.minLength(3), ForbiddenNameValidator]],
    email: ['', [Validators.email, Validators.required]],
    password: ['', [Validators.required, PasswordValidator]],
    confirmPassword: ['', [Validators.required, PasswordValidator]],
    age:['',[Validators.required, Validators.min(12)]],
    balance:['',[Validators.required]],
    nationalIdImage:['',[Validators.required]]
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
  get age() {
    return this.RegisterationForm.get('age')
  }
  get balance() {
    return this.RegisterationForm.get('balance')
  }
  get nationalIdImage() {
    return this.RegisterationForm.get('nationalIdImage')
  }
  submitRegisterForm(registerForm: any) {

    if (registerForm.valid) {
      console.log("valid");
      const formData =new FormData();
      formData.append('firstName', registerForm.get("firstName").value);
      formData.append('lastName', registerForm.get("lastName").value);
      formData.append('userName', registerForm.get("userName").value);
      formData.append('address', registerForm.get("address").value);
      formData.append('email', registerForm.get("email").value);
      formData.append('password', registerForm.get("password").value);
      formData.append('confirmPassword', registerForm.get("confirmPassword").value);
      formData.append('balance', registerForm.get("balance").value);
      formData.append('age', registerForm.get("age").value);
      formData.append('nationalIdImage', this.selectedFile,this.selectedFile.name);
      console.log(formData);

      this._RegisterService.sellerRegister(formData).subscribe((response) => {

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


  onSelectFile(fileInput: any) {
    this.selectedFile = <File>fileInput.target.files[0];
    console.log(this.selectedFile)
    const dataTransfer = new ClipboardEvent('').clipboardData || new DataTransfer();
    dataTransfer.items.add(new File(['my-file'], 'new-file-name'));
    const inputElement: HTMLInputElement = document.getElementById('formFile') as HTMLInputElement

     inputElement.files = dataTransfer.files;
  }
  getLogin() {
    this._router.navigate(['login']);
  }

}
