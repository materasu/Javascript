var myFunctions = [];

// function f1(i){
//     var func = function() {
//     console.log(i);
//     }
//     return func;
// }
len = 10;
for(i=0;i<len;i++)
{
    function f1(i) {
        return  function f2() {
            console.log(i);
        }
        }
        // return function f3() {
        //     console.log(i);
        // };
    myFunctions.push(f1(i));
}
for(j=0;j<len;j++) {
   myFunctions[j]();
}
myFunctions[0]()