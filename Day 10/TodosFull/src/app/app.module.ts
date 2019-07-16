import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms'
import { Routes, RouterModule } from '@angular/router';
import { HttpClientModule, HttpClient } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NewTodoComponent } from './new-todo/new-todo.component';
import { ViewTodosComponent } from './view-todos/view-todos.component';
import { PrintTodosComponent } from './print-todos/print-todos.component';
var routes: Routes = [ 
  {path: 'new', component: NewTodoComponent} ,
  {path: 'view', component: ViewTodosComponent}

]
@NgModule({
  declarations: [
    AppComponent,
    NewTodoComponent,
    ViewTodosComponent,
    PrintTodosComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routes),
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
