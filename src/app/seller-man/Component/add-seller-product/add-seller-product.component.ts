import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/authntacation/Services/login.service';
import { SellerServiceService } from '../../service/seller-service.service';

@Component({
  selector: 'app-add-seller-product',
  templateUrl: './add-seller-product.component.html',
  styleUrls: ['./add-seller-product.component.scss']
})
export class AddSellerProductComponent {
  error: any
  selectedFile!: File;
  CategoryList: any[] = []
  sellerID!: any;
  Seller!: string
  FName!: string
  FValue!: string
  FeaturesKey!: any[]
  FeaturesValue!: any[]
  constructor(private fb: FormBuilder, public _SellerService: SellerServiceService,
    private _Router: Router, private _LoginService: LoginService) {
  }
  ngOnInit(): void {
    this.getCategory();
    this.sellerID = this._LoginService.getUserId()//this._LoginService.loginUserId;
    console.log(document.getElementById("#1"))
    this.Seller = this._LoginService.getUserName();
    console.log(this.sellerID);
  }
  getCategory() {
    this._SellerService.GetCategory().subscribe((cats) => {
      this.CategoryList = cats;
      console.log("hello");
      console.log(cats);

    })
  }
  AddForm = this.fb.group({
    Name: ['', [Validators.required, Validators.minLength(2)]],
    Price: ['', [Validators.required]],
    Quantity: ['', [Validators.required]],
    Category: ['', [Validators.required,]],
    Description: ['', [Validators.required, Validators.minLength(3)]],
    FeatureName1: ['', [Validators.required]],
    FeatureValue1: ['', [Validators.required]],
    FeatureName2: ['', [Validators.required]],
    FeatureValue2: ['', [Validators.required]],
    MainProductImg: ['', [Validators.required]],


  })
  get Name() {
    return this.AddForm.get('Name');
  }
  get Price() {
    return this.AddForm.get('Price');
  }
  get Description() {
    return this.AddForm.get('Description');
  }
  get Category() {
    return this.AddForm.get('Category');
  }

  get Quantity() {
    return this.AddForm.get('Quantity');

  }
  get FeatureName1() {

    return this.AddForm.get("FeatureName1")
  }
  get FeatureValue1() {

    return this.AddForm.get("FeatureValue1")
  }
  get FeatureName2() {

    return this.AddForm.get("FeatureName2")
  }
  get FeatureValue2() {

    return this.AddForm.get("FeatureValue2")
  }


  submitRegisterForm(addForm: any) {
    if (addForm.valid) {
      const formData = new FormData();
      console.log(this.sellerID);
      formData.append('Name', addForm.get("Name").value);
      formData.append('Price', addForm.get("Price").value);
      formData.append('Quantity', addForm.get("Quantity").value);
      formData.append('CategoryId', addForm.get("Category").value);
      formData.append('Description', addForm.get("Description").value);
      formData.append('Values', addForm.get(this.FeaturesValue));
      formData.append('Keys', addForm.get(this.FeaturesKey));
      formData.append('MainImage', this.selectedFile, this.selectedFile.name);
      formData.append('SellerId', this.sellerID);
      formData.append('FeaturKeys1', addForm.get("FeatureName1").value);
      formData.append('FeaturKeys2', addForm.get("FeatureName2").value);
      formData.append('FeaturValues1', addForm.get("FeatureValue1").value);
      formData.append('FeaturValues2', addForm.get("FeatureValue2").value);

      console.log(formData);
      this._SellerService.addProduct(formData).subscribe(() => {

        console.log("ProductAdded");
           this._Router.navigate(['/addProducts']);
      },
      error =>{
        console.log("Failed to Add ");
      }
      )

    }
    else {
      console.log("notValid");
      console.log(addForm.value);

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
  ShowAll() {
    this._Router.navigate(['ShowAllSeller']);
  }


}

