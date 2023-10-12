import { Component } from '@angular/core';
import { inject } from '@angular/core/testing';
import { LoginService } from './login.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(public a:LoginService){}
  title = 'booksStore';
  userLoggedIn:any;
ngOnInit():void{
if(sessionStorage.getItem('isLoggedIn')==='yes'){
  this.userLoggedIn=true;
}else{

  this.a.isLoggedIn.subscribe((data:any)=>{
    this.userLoggedIn=data;
  })
}
}
}
