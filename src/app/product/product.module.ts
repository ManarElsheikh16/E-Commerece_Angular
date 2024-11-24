import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AllproductsComponent } from './Components/allproducts/allproducts.component';
import { AllcatogorysComponent } from './Components/allcatogorys/allcatogorys.component';
import { SingleproductComponent } from './Components/singleproduct/singleproduct.component';
import { FormsModule } from '@angular/forms';
import { RouterLink, RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AllproductsComponent,
    AllcatogorysComponent,
    SingleproductComponent,
    
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    HttpClientModule,
    RouterLink
    
  ],
  exports:[
    AllproductsComponent,
    AllcatogorysComponent,
    SingleproductComponent,
  ]
})
export class ProductModule { }
