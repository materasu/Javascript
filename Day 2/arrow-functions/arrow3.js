"use strict"

// let x  = () => {
//     return () => {
//         console.log(this)
//     }
// }

let x = {
    pName: "Lol",
    pFunc: function fun() {
        console.log(this)
        let new_fun = () =>
        {
            console.log(this);
        };
        return(new_fun)
    }
}
let y = x.pFunc()
// console.log(typeof(y))
let z = {
    pName: "Ki"
}
y.call(z)
