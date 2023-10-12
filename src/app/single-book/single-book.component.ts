import { Component, OnInit, inject } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BooksService } from '../books.service';

@Component({
  selector: 'app-single-book',
  templateUrl: './single-book.component.html',
  styleUrls: ['./single-book.component.css']
})
export class SingleBookComponent implements OnInit {
  singleBookDetails:any=[];
  route=inject(ActivatedRoute);
  bookService=inject(BooksService);

  constructor() { }

  ngOnInit(): void {
    const bookId=this.route.snapshot.paramMap.get('id');
    this.bookService.getSingleBookDetails(bookId).subscribe((data:any)=>{
      console.log(data);
      this.singleBookDetails=data;
    })
  }

}
