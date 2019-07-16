var v = 12;

function f1(){
    function f2() {
        console.log(v);
    }
    f2();
    var v = 13;
    // console.log(v)
}

f1();