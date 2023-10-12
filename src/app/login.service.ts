import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  backendurlTwo=environment.backEndUrlTwo;
  isLoggedIn=new BehaviorSubject<any>(false);
  snackBar=inject(MatSnackBar);
  // token:any=sessionStorage.getItem('token');
  // headers=new HttpHeaders({'Authozoration':this.token});

  constructor(public http:HttpClient,public router:Router) { }
  login(payLoad:any=null){
    this.http.post(this.backendurlTwo +'login',payLoad).subscribe(data=>{
      console.log(data);
      this.snackBar.open('User Logged in Successfully','Undo',{duration:2000});
      sessionStorage.setItem('isLoggedIn','yes');
      this.router.navigate(['/home']);
    });
  }
  // getPosts(payLoad:any=null){
  //   return this.http.post(this.backendurlTwo+'login',payLoad,{headers:this.headers});
  // }
}

