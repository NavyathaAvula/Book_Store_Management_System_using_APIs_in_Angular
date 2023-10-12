import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SingleBookComponent } from './single-book/single-book.component';
import { BooksComponent } from './books/books.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { HomeComponent } from './home/home.component';
import { CategoryComponent } from './category/category.component';
import { AuthGuard } from './auth.guard';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { RegisterBookComponent } from './register-book/register-book.component';
import { AddToCartComponent } from './add-to-cart/add-to-cart.component';

const routes: Routes = [
  {
    path:'' , component:LoginComponent , title:'Login Screen'
  },
  {
    path:'register' , component:RegisterComponent , title:'Register Screen',
  },
  {
    path:'home' , component:HomeComponent , title:'Home Screen' ,canActivate:[AuthGuard]
  },
  {
    path:'book' , component:BooksComponent , title:'BookStore',canActivate:[AuthGuard]
  },
  {
    path:'single-book/:id' , component:SingleBookComponent , title:'Single-Book Screen',canActivate:[AuthGuard]
  },
  {
    path:'category' , component:CategoryComponent , title:'Category',canActivate:[AuthGuard]
  },
  {
    path:'registerBook' , component:RegisterBookComponent , title:'RegisterBook',canActivate:[AuthGuard]
  },
  {
    path:'addtocart' , component:AddToCartComponent , title:'Add to cart' , canActivate:[AuthGuard]
  },
  {
    path:'**' , component:PageNotFoundComponent , title:'PageNotFound',canActivate:[AuthGuard]
  }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
