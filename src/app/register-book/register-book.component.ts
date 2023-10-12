import { Component, inject } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-register-book',
  templateUrl: './register-book.component.html',
  styleUrls: ['./register-book.component.css']
})
export class RegisterBookComponent {
formBuilder=inject(FormBuilder);
snackBar=inject(MatSnackBar);

firstFormGroup = this.formBuilder.group({
  firstCtrl: ['', Validators.required],
  lastName: ['',Validators.required],
  phoneNumber: ['',Validators.required],
  emailId: ['',Validators.required],
  address: ['',Validators.required],
});
secondFormGroup = this.formBuilder.group({
  secondCtrl: ['', Validators.required],
  subTitle: [''],
  authorName: ['', Validators.required],
  publisher: ['', Validators.required],
  category :['']
  
});
// isLinear = false;
submit(){
this.snackBar.open('Submitted Successfully', 'Undo', {duration:2000});

}
data(){
  console.log(this.firstFormGroup);
  console.log(this.secondFormGroup); 
}

}
