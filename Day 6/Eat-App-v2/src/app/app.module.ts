import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ItemsListComponent } from './items-list/items-list.component';
import { ItemsDescComponent } from './items-desc/items-desc.component';
import { ItemReviewComponent } from './item-review/item-review.component';
import { ItemsCartComponent } from './items-cart/items-cart.component';

@NgModule({
  declarations: [
    AppComponent,
    ItemsListComponent,
    ItemsDescComponent,
    ItemReviewComponent,
    ItemsCartComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
