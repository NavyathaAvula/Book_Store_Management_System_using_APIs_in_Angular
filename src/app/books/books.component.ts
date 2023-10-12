import { Component, OnInit, inject } from '@angular/core';
import { BooksService } from '../books.service';
import { ActivatedRoute, Router } from '@angular/router';
import { DataService } from '../data.service';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent implements OnInit {
  usersResponse:any=[];
  cartCount=0;
  showSpinner=true;
  bookService=inject(BooksService);
  router=inject(Router);
  dataService=inject(DataService);
  route=inject(ActivatedRoute);

  constructor() { }

  ngOnInit(): void {
    this.bookService.getBooks().subscribe((data:any)=>{
      console.log(data);
      this.usersResponse=data;
      this.showSpinner=false;

      this.usersResponse.forEach((a:any) => {

        Object.assign(a,{quantity:1});
      });
    });
  }
  getToUserDetailsScreen(id:number){
    console.log(id);
    this.router.navigate(['single-book',id]);
  }
  addToCart(user :any){
    this.dataService.addtoCart(user);
    this.cartCount=this.cartCount+1;
    this.dataService.someData.next(this.cartCount);

  }
  removeFromCart(){

    this.cartCount=this.cartCount-1;
    this.dataService.someData.next(this.cartCount);
  }

}
