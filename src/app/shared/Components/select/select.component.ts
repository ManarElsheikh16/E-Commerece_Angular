import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { SelectService } from '../../Services/select.service';
import { HomepageService } from 'src/app/home/services/homepage.service';

@Component({
  selector: 'app-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.scss']
})
export class SelectComponent implements OnInit {
  collection:any[]=[];
  constructor(private _selectserv:HomepageService){}
   ngOnInit(): void {
      this.GetallCat();
   }

   GetallCat(){
    this._selectserv.getAllCategories().subscribe((data)=>{
      this.collection=data;
      console.log("collection",data);
  })}
  
 
   @Output() selectedvalue=new EventEmitter();

   detectchange(value:any)
   {
    this.selectedvalue.emit(value);
   }
}
