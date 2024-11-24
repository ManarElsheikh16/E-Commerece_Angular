import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShowAllComponent } from './show-all/show-all.component';
import { AddProductComponent } from './Component/add-product/add-product.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AddSellerProductComponent } from './Component/add-seller-product/add-seller-product.component';



@NgModule({
  declarations: [
    ShowAllComponent,
    AddProductComponent,
    AddSellerProductComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    
    
  ]
})
export class SellerManModule { }
