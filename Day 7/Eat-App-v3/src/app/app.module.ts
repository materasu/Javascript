import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http'
import { ReactiveFormsModule } from '@angular/forms'
import { Routes, RouterModule } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CartBadgeComponent } from './cart-badge/cart-badge.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { ItemListComponent } from './item-list/item-list.component';
import { ItemComponent } from './item/item.component';
import { ItemReviewComponent } from './item-review/item-review.component';
import { CartViewComponent } from './cart-view/cart-view.component';
import { ItemReviewFormComponent } from './item-review-form/item-review-form.component';

var routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'items', component : ItemListComponent},
  { path : 'cart', component: CartViewComponent}
]
@NgModule({
  declarations: [
    AppComponent,
    CartBadgeComponent,
    NavbarComponent,
    HomeComponent,
    ItemListComponent,
    ItemComponent,
    ItemReviewComponent,
    CartViewComponent,
    ItemReviewFormComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routes),
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
