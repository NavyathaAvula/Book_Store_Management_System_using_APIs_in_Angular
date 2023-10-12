import { Component,inject } from '@angular/core';
import { BooksService } from '../books.service';
import { ActivatedRoute } from '@angular/router';
import { DataService } from '../data.service';

@Component({
  selector: 'app-add-to-cart',
  templateUrl: './add-to-cart.component.html',
  styleUrls: ['./add-to-cart.component.css']
})
export class AddToCartComponent {

  singleBookDetails:any=[];
  route=inject(ActivatedRoute);
  bookService=inject(BooksService);

  constructor() { }

    public products : any = [];
    // public grandTotal !: number;
    data=inject(DataService);
  
    ngOnInit(): void {
      this.data.getProducts()
      .subscribe(res=>{
        this.products = res;
        // this.grandTotal = this.data.getTotalPrice();
      })
    }
    removeItem(item: any){
      this.data.removeCartItem(item);
    }
    emptycart(){
      this.data.removeAllCart();
    }
  
  }

