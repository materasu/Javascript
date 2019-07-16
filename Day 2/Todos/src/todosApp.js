"use strict"
// function filterMethod(a,predicate){
//     return(a.filter(predicate))
// }

function compareMethod(a,b) {
    if(a > b)
        return 1;
    else if (a < b)
        return -1;
    return 0;
}
// Todo Description
class Todo {
    constructor(todoName) {
        this.id = Todo.todoIDcount++
        this.todoName = todoName
        this.completed = false;
    }
}
Todo.todoIDcount = 1
let utils = {
    ID: (item1,item2) => { return(compareMethod(item1.id,item2.id));
    } ,
    NAME:(item1,item2) => { return(compareMethod(item1.todoName,item2.todoName));
    }
}
let filters = {
    ALL: () => {
        return(true);
    },
    COMPLETE: (item) => {
        // if(item.completed)
        return(item.completed);
    },
    ACTIVE: () => {
        return(!item.completed);
    }
}
class TodoService {
    constructor() {
        this.Todos = []
    }
    addTodo(todoName){
        let newTodo = new Todo(todoName)
        this.Todos.push(newTodo)
    }
    editTodo(id,newTodoName){ 
        this.Todos = this.Todos.map(element => {
            if(element.id == id)
            {
                element.todoName = newTodoName
            }
            return element
        })
    }
    deleteTodo(id) { 
        this.Todos = this.Todos.filter(element=>!(element.id == id))
    }
    completeTodo(id) {
        this.Todos = this.Todos.map(element => {
            if(element.id == id)
            {
                element.completed = true
            }
            return element
        })
    }
    completeAllTodo() {
        this.Todos = this.Todos.map(element => {
            element.completed = true 
            return element
        })
    }
    clearCompleted() {
        this.Todos.forEach(element => {
            element.completed = false;
         })
    }
    filterTodo(filtering) { 
        let out = this.Todos.filter(filters[filtering])
        return out
    }
    sortTodos(filtering) {
        let out = this.Todos.sort(utils[filtering])
    }
    printTodos() {
        this.Todos.forEach(element => {
            console.log(element)
        })
    }
}



let todoService =  new TodoService()
todoService.addTodo("K")
todoService.addTodo("I")
todoService.editTodo(1,"N")
todoService.printTodos()
console.log("\n")
todoService.completeTodo(2)
todoService.printTodos()

console.log("\n")
let out1 = todoService.filterTodo("COMPLETE")
out1.forEach(element=>console.log(element))
console.log("\n")
todoService.addTodo("A")
todoService.addTodo("M")
todoService.addTodo("N")
todoService.deleteTodo(4)
todoService.printTodos()
console.log("\n")
todoService.sortTodos("NAME")
todoService.printTodos()
console.log("\n")
todoService.clearCompleted()
todoService.printTodos()
console.log("\n")
todoService.sortTodos("ID")
todoService.printTodos()

