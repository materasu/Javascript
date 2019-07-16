import { Component, OnInit, Input } from '@angular/core';
import { TodoService } from '../todo.service';
import { Todo } from '../todo';

@Component({
  selector: 'app-print-todos',
  templateUrl: './print-todos.component.html',
  styleUrls: ['./print-todos.component.css']
})
export class PrintTodosComponent implements OnInit {

  @Input("value") printTodos ;
  constructor(private todoService: TodoService) { }

  ngOnInit() {
  }

  completeTodo( id) {
    console.log("CompleteTodo")
    this.todoService.completeTodo(id)
  }
  incompleteTodo(id) {
    console.log("inCompleteTodo")
    this.todoService.activeTodo(id)
  }
  deleteTodo(event,id) {
    this.todoService.deleteTodo(id)
  }

  toggleTodo(event, todo:Todo) {
    if(todo.completed)
      this.incompleteTodo(todo.id)
    else
      this.completeTodo(todo.id)
  }

}
