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
  selector: 'app-shipper-register',
  templateUrl: './shipper-register.component.html',
  styleUrls: ['./shipper-register.component.scss']
})
export class ShipperRegisterComponent implements OnInit {
  error: string = '';
  cityList: string[] = ["Assuit", "Cairo", "Aswan", "Luxor", "Giza", "Halwan", "Tanta",
    "Qina", "Minya", "Alex", "Suez", "Port Said"];
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
    licenseImage: ['', Validators.required],
    ssd: ['', [Validators.pattern(/[A-Z].*$/), Validators.required, Validators.minLength(3), ForbiddenNameValidator]],

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
  get licenseImage() {
    return this.RegisterationForm.get('licenseImage')
  }
  get ssd() {
    return this.RegisterationForm.get('ssd')
  }

  submitRegisterForm(registerForm: any) {
    console.log(this.RegisterationForm.value)
    if (registerForm.valid) {
      console.log("valid");

      const formData = new FormData();
      formData.append('firstName', registerForm.get("firstName").value);
      formData.append('lastName', registerForm.get("lastName").value);
      formData.append('userName', registerForm.get("userName").value);
      formData.append('address', registerForm.get("address").value);
      formData.append('password', registerForm.get("password").value);
      formData.append('confirmPassword', registerForm.get("confirmPassword").value);
      formData.append('email', registerForm.get("email").value);
      formData.append('licenseImage', this.selectedFile, this.selectedFile.name);
      formData.append('ssd', registerForm.get("ssd").value);

      this._RegisterService.shipperRegister(formData).subscribe((response) => {

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

  onSelectFile(fileInput: any) {
    this.selectedFile = <File>fileInput.target.files[0];
    console.log(this.selectedFile)
    const dataTransfer = new ClipboardEvent('').clipboardData || new DataTransfer();
    dataTransfer.items.add(new File(['my-file'], 'new-file-name'));
    const inputElement: HTMLInputElement = document.getElementById('formFile') as HTMLInputElement
    inputElement.files = dataTransfer.files;
  }
}
