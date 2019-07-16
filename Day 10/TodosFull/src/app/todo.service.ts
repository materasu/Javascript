import { Injectable } from '@angular/core';
import { Todo } from './todo';
import { Subject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { element } from 'protractor';
import { BackendService } from './backend.service';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  todosList: Array<Todo> = []
  todoStream: Subject<any> = new Subject();
  constructor(private backendService: BackendService) { }

  
 
  getTodos() {
    this.backendService.getTodosFromDatabase()
    .subscribe((response:any)=> {
      // console.log(response)
      this.todosList = response
    })
    return this.todosList
  }
  getTodoStream() {
    // this.todoStream.next({todosList: this.getTodos})
    return this.todoStream
  }
  addTodo(todo) {
    this.todosList.push(todo)
    this.backendService.addTodoToDatabase(todo)
    this.publishToStream()
  }
  deleteTodo(id) {
    // let td: Todo
    //   this.todosList.forEach(element => {
    //     if(element.id === id) {
    //       td = element
    //     }
    //   })
      this.todosList = this.todosList.filter(element=>!(element.id == id))
      this.backendService.deleteTodoFromDatabase(id)
      this.publishToStream()
  }
  completeTodo(id) {
    let td: Todo;
    this.todosList = this.todosList.map((element)=>{
      if(element.id === id)
      {
        element.completed = true
        td = element
      }
      return element;
    })
    this.backendService.addTodoToDatabase(td)
    this.publishToStream()
}
activeTodo(id) {
  let td: Todo;
  this.todosList = this.todosList.map((element)=>{
    if(element.id === id)
    {
      element.completed = false
      td = element;
    }   
    return element;
  })
  this.backendService.addTodoToDatabase(td)
  this.publishToStream()
}
  publishToStream() {
    this.todoStream.next({todosList: this.todosList})
  }

}
