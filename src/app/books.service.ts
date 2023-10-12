import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class BooksService {

 backendurl:any=environment.backEndurl;

  constructor(public http:HttpClient) { }

  getBooks(){
    return this.http.get(this.backendurl);
  }
  getSingleBookDetails(bookId:any){
    return this.http.get(this.backendurl+'/'+bookId);
   }
}
