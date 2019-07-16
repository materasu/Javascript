import "bootstrap/dist/css/bootstrap.css"
console.log('-index.js-')

/*
const greetMod = require('sapient-greet') // ./node_modules  ==> ../node_modules/ ../../node_modules
greetMod.wish('en')
greetMod.wish('es')
//

let arr1 = [1, 2, 3];
let arr2 = [3, 4, 5];

//const lodash = require('lodash')
import lodash from 'lodash'
console.log(lodash.difference(arr1, arr2));

// require('./hotel/menu')
// or

// import primaryItem,{item1,item2} from './hotel/menu'
// console.log(primaryItem)
// console.log(item1)
// console.log(item2)


// import primaryItem,{item1 as veg,item2 as nveg} from './hotel/menu'
// console.log(primaryItem)
// console.log(veg)
// console.log(nveg)


import primaryItem, * as items from './hotel/menu'
console.log(primaryItem)
console.log(items.item1)
console.log(items.item2)

// items.item1 = null; // error , cant mutate reference
// items.item1.price = 50;


// import List, { ListTheme } from './components/List';

// })()
*/
let greetBtn = document.querySelector('.btn-success')
let showBtn = document.querySelector('.btn-primary')
let hideBtn = document.querySelector('.btn-danger')

let image = "https://s01.sgp1.cdn.digitaloceanspaces.com/article/122880-okiygpupya-1561822160.jpg"

greetBtn.addEventListener('click', e => {
    var img = document.createElement("img");
 
    img.src = image;
    var src = document.getElementById("x");
    src.appendChild(img)
    // if(src=="none")
    //     src.appendChild(img);
    // else
    //     src.appendChild("none");
    
    // greetBtn.innerHTML = "good morning"
})
showBtn.addEventListener('click', e => {
    showBtn.style.display = ''
})
hideBtn.addEventListener('click', e => {
    hideBtn.style.display = 'none'
})

let todosBtn = document.querySelector('.btn-dark')
todosBtn.addEventListener('click', e => {

    let todoListEle = document.getElementById('todo-list');
    let apiurl = 'https://jsonplaceholder.typicode.com/todos?_limit=3';
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