import { Component, OnInit } from '@angular/core';
import { TodoService } from '../todo.service';
import { Todo } from '../todo';

@Component({
  selector: 'app-new-todo',
  templateUrl: './new-todo.component.html',
  styleUrls: ['./new-todo.component.css']
})
export class NewTodoComponent implements OnInit {

  showNewOptions: boolean;
  // todoList : Array<Todo> = [];
  constructor(private todoService: TodoService) {

   }

  ngOnInit() {
    console.log(this.todoService.getTodos())
    this.showNewOptions = false;
  }

  addNewTodo(event) {
    let x = (<HTMLInputElement>document.getElementById("TodoInput")).value;
    // console.log(x)
    this.todoService.addTodo(new Todo(x))
    this.showNewOptions = true;
  }

  

}
