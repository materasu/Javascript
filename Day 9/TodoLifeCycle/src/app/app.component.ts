import { Component } from '@angular/core';
import { Todo } from './todo';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'TodoLifeCycle';
  todos: Array<Todo> = []
  todoNames: Array<string> = ["Ki","Manish","Om","Anirudh","Lakshmi"]
  constructor() { }
  repeatTimeOut(x) {
    setTimeout(e=>{
      if(x<this.todoNames.length) {
        this.todos.push(new Todo(this.todoNames[x]))
        console.log(this.todos)
        this.repeatTimeOut(x+1)
      }
    },
    4000);
  }
 ngOnInit() { 
  
    // this.todos.push(new Todo("Ki"))
    // console.log(this.todos)
    // this.todos.push(new Todo("Manish"))
    // for(let i=0;i<this.todoNames.length;i++){
    //   this.todos.push(new Todo(this.todoNames[i]));
    // }
    this.repeatTimeOut(0)
    // console.log(this.todoNames.length)
  }
}
