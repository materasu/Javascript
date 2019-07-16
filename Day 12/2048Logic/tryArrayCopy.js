"use strict"

// let x = 5
// let y = x
// x = 10
// console.log("y = "+y);

let a = [1,2,3]
let b = {}
// console.log("a = "+a)
// console.log("b = "+b)
// a.push(4)
// console.log("a = "+a)
// console.log("b = "+b)

// let a = [1,2,3]
// let b = []
let i
for(i=0;i<a.length;i++) {
    b[i] = i*10;
}
// a.push(4)
// console.log(a)
console.log(b)