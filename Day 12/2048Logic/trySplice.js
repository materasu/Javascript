"use strict"

let checkArray = [0,1,2,0,0,0,1]
let pos = []
let k
let count = 0
for(k=0;k<checkArray.length;k++){
    if(checkArray[k] === 0){
        // checkArray.splice(k,1)
        count+=1
        pos.push(k)
    }
} 
console.log(pos)
for(k=0;k<pos.length;k++){
    checkArray.splice(pos[k],1)
}
console.log(checkArray)
// for(k=0;k<count;k++){
//     checkArray.push(0)
// }
// console.log(checkArray)