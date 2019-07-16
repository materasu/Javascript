"use-strict"

let a1 = [2,1,3,4,5,2,8]
let a2 = [2,1]

// let x = Math.max(...a1)
let A1 = {}
// console.log(x)
for(i=0;i<a1.length;i++){
    A1[a1[i]] = 0
}

for(i=0;i<a2.length;i++){
    A1[a2[i]] = 1
}
let x = []
for(i in A1){
    if(A1[i]==0)
        x.push(i)
}
console.log(x)

