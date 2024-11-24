import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavBarComponent } from './Components/nav-bar/nav-bar.component';
import { FooterComponent } from './Components/footer/footer.component';
import { RouterModule } from '@angular/router';
import { SelectComponent } from './Components/select/select.component';
import { InnerNavComponent } from './Components/inner-nav/inner-nav.component';
import { UnlockedComponent } from './Components/unlocked/unlocked/unlocked.component';
import { DoneComponent } from './Components/done/done.component';



@NgModule({
  declarations: [
    NavBarComponent,
    FooterComponent,
    SelectComponent,
    InnerNavComponent,
    UnlockedComponent,
    DoneComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports:[
    NavBarComponent,
    FooterComponent
  ]
})
export class SharedModule { }
