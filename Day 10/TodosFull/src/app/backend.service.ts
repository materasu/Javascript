import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BackendService {

  constructor(private _http: HttpClient) { }
  getTodosFromDatabase() {
    // console.log("getTodosFromDatabase")
    let url = `http://localhost:8089/api/v1/todos`
    return this._http.get(url)
  }
  addTodoToDatabase(todo) {
    // console.log("addTodoToDatabase")
    // console.log(todo)
    let url = `http://localhost:8089/api/v1/todos`
    this._http.post(url,todo)
    .subscribe(e=>{
      console.log(e)
    })
    
  }
  deleteTodoFromDatabase(id) {
    // console.log("deleteTodoFromDatabase")
    let url = `http://localhost:8089/api/v1/todos/delete/${id}`
    this._http.delete(url)
    .subscribe()
  }
}
