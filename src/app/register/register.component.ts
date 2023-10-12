import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  router=inject(Router);
  form=inject(FormBuilder);
  snackBar=inject(MatSnackBar);
  register:any;
  constructor(public http:HttpClient){}
  ngOnInit():void{
    this.register=this.form.group({
      firstname :['',Validators.required],
      lastName:['',Validators.required],
      phoneNumber:['',Validators.required],
      emailId:['',Validators.required],
      password:['',Validators.required]
    })
  }
registerData(){
  this.http.post('https://jsonplaceholder.typicode.com/posts',this.register.value).subscribe((data)=>{
    console.log(data);
    this.snackBar.open('Registration  Successful','Undo',{duration:2000});
    this.router.navigate(['']);
  })


}
}
