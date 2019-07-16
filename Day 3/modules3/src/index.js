import "bootstrap/dist/css/bootstrap.css"
console.log('-index.js-')

let todosBtn = document.querySelector('.btn-dark')
todosBtn.addEventListener('click', e => {

    let todoListEle = document.getElementById('todo-list');
    let c = document.getElementById("count").value;
    let apiurl = 'https://jsonplaceholder.typicode.com/todos?_limit='+c;
    let promise = fetch(apiurl)  // IO
    promise
        .then(response => response.json())
        .then(todos => {
            let arr = todos.map(todo => {
                let liTemplate = `
                <li class="list-group-item ${todo.completed ? 'bg-success' : ''}">
                    ${todo.id} - ${todo.title} - ${todo.completed}
                </li>
            `
                return liTemplate;
            })
            console.log(arr)
            todoListEle.innerHTML = arr.join(' ');
        })


})