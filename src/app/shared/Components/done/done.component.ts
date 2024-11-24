import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-done',
  templateUrl: './done.component.html',
  styleUrls: ['./done.component.scss']
})
export class DoneComponent {
  constructor(private _Router:Router){}
  ShopMore()
  {
    this._Router.navigate(['Allproduct']);
  }
}
