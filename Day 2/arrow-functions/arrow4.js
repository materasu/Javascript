"use strict"
let regFunc = function () {
    console.log(this);
}
let new_var = {
    pName: "Ki"
}
// let new_Func = regFunc.bind(new_var)
// console.log(typeof(new_Func))
regFunc.call(new_var)

let arrFunc = () => {
    console.log(this)
}
arrFunc.call(new_var);

/*
let o1 = {
    name: 'One',
    regFunc: regFunc,
    arrFunc: arrFunc
}
o1.regFunc();
o1.arrFunc();


let o2 = { name: 'Two' }
regFunc.call(o2)
arrFunc.call(o2);
*/