import { Component, OnInit, inject } from '@angular/core';
import { DataService } from '../data.service';
import { Router } from '@angular/router';
import { LoginService } from '../login.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  actualCount=0;
  router=inject(Router);
  dataService=inject(DataService);
  loginService=inject(LoginService);
  userLoggedIn:any;
  constructor() { }

  ngOnInit(): void {

    this.dataService.someData.subscribe(
        (data)=>{
          console.log(data);
          this.actualCount=data;
        });
    this.loginService.isLoggedIn.subscribe((data:any)=>{
         this.userLoggedIn=data;
    })
    
}
logout(){
   this.loginService.isLoggedIn.next(false);
   sessionStorage.clear();
   this.router.navigate(['/'])
}
}
