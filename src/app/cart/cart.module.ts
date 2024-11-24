import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DelCartComponent } from './Compoents/del-cart/del-cart.component';
import { FormsModule } from '@angular/forms';
import { ViewCartComponent } from './Compoents/del-cart/view-cart/view-cart/view-cart.component';



@NgModule({
  declarations: [

    DelCartComponent,
     ViewCartComponent
  ],
  
  imports: [
    CommonModule,
    FormsModule
  ],

  exports:[
    
    DelCartComponent
  ]
})
export class CartModule { }
