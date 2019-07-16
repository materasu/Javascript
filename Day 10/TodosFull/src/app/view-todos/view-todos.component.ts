import { Component, OnInit } from '@angular/core';
import { TodoService } from '../todo.service';
import { Todo } from '../todo';

@Component({
  selector: 'app-view-todos',
  templateUrl: './view-todos.component.html',
  styleUrls: ['./view-todos.component.css']
})
export class ViewTodosComponent implements OnInit {

  constructor(private todoService: TodoService ) {

  }
  currentTab = 1
  todoList: Array<Todo> = []
  printTodos: Array<Todo> = []
  pt: Array<Todo> = []

  ngOnInit() {
    this.todoList = this.todoService.getTodos()
    this.printTodos = this.todoList


    this.todoService.getTodoStream()
    .subscribe(e=> { 
      this.todoList = e.todosList
      this.printTodos = this.todoList
    })

  }
  // ngDoCheck() {
  //   this.todoList = this.todoService.getTodos()
  // }

  isTabSelected(tabIndex) {
    return this.currentTab === tabIndex;
  }
  changeTab(event, tabIndex) {
    event.preventDefault();
    this.currentTab = tabIndex;
  }
  listAll(event) {
    // this.todoList = this.todoService.getTodos()
    this.printTodos = this.todoList
    // console.log(this.printTodos)
  }
  listActive(event) {
    
    this.printTodos = this.todoList.filter(e=>e.completed == false)
    // this.printTodos = this.pt
    console.log("Activated")
    console.log(this.printTodos)
  }
  listCompleted(event) {
    this.todoService.getTodoStream()
    .subscribe(e=> { 
      this.todoList = e.todosList
      this.printTodos = this.todoList
    })
    this.printTodos = this.todoList.filter(e=>e.completed == true)    
    console.log("Completed")
    console.log(this.printTodos)
  }
  

}
