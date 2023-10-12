import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { environment } from 'src/environments/environment';
import { DataService } from '../data.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent {
constructor(public http:HttpClient){}
backendurl=environment.backEndurl;
dataService=inject(DataService);
Backenddata:any=[];
a:any;
cartCount=0;
ngOnInit(){
  this.http.get(this.backendurl).subscribe(data=>{
    this.a=data;});
}
lorem(){
    let value="lorem";
   this.Backenddata=this.a.filter((u:any)=>u.category==value);
console.log(this.Backenddata);
  }
  jsonplaceholder(){
    this.Backenddata="";
    let value="jsonplaceholder";
   this.Backenddata=this.a.filter((u:any)=>u.category==value);
console.log(this.Backenddata);
  }
  ipsum(){
    this.Backenddata="";
    let value="ipsum";
    this.Backenddata=this.a.filter((u:any)=>u.category==value);
    console.log(this.Backenddata);
  }
  rutrum(){
    this.Backenddata="";
    let value="rutrum";
    this.Backenddata=this.a.filter((u:any)=>u.category==value);
    console.log(this.Backenddata);
  }
  elementum(){
    this.Backenddata="";
    let value="elementum";
    this.Backenddata=this.a.filter((u:any)=>u.category==value);
    console.log(this.Backenddata);
  }
  addToCart(){
    this.cartCount=this.cartCount+1;
    this.dataService.someData.next(this.cartCount);
     
  }
  removeFromCart(){
    this.cartCount=this.cartCount-1;
    this.dataService.someData.next(this.cartCount);
  }
}

