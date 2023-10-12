import { Component, OnInit,inject } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import { HttpClient } from '@angular/common/http';
import { LoginService } from '../login.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent  {
loginForm:any;
formBuilder=inject(FormBuilder);
loginService=inject(LoginService);
router=inject(Router);
snackBar=inject(MatSnackBar);

ngOnInit() :void{
  this.loginForm=this.formBuilder.group(
    {
      email:['',[Validators.required,Validators.minLength(6)]],
      password:['',[Validators.required,Validators.minLength(6)]]
    }) 
}
submit(){
   console.log(this.loginForm.value);
   this.loginService.login(this.loginForm.value)
   this.loginService.isLoggedIn.next(true); 
  }
 
}

