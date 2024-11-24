import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContectUsComponent } from './Components/contect-us/contect-us.component';
import { AboutUsComponent } from './Components/about-us/about-us.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    ContectUsComponent,
    AboutUsComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule

  ],
  exports:[
    ContectUsComponent,
    AboutUsComponent
  ]
})
export class InformationModule { }
