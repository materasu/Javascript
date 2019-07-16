"use strict"
 
let tnr = {
    pName: "Ki",
    pFunc: function(){
        console.log(this.pName);
    }
}

tnr.pFunc();

let tnr2 = {
    pName: "Manish"
}

// tnr2.pFunc(tnr2.pName);