import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-unlocked',
  templateUrl: './unlocked.component.html',
  styleUrls: ['./unlocked.component.scss']
})
export class UnlockedComponent {
constructor(private _Router:Router){}
Login()
{
  this._Router.navigate(['login']);
}
}

