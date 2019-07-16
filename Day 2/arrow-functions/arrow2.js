"use strict"


let x = {
x1: function() {
    let x1_inner = function () {
        console.log(this);
    }
    console.log(this)

    return x1_inner;
    // return(console.log(this));
}
};

let v = x.x1()
let y = {
    pName: "K"
};
v.call(y);
let b = v.bind(y);
b();
