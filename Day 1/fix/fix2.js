myFunc = [];


for(i=0;i<10;i++)
{
    function f1() {
        console.log(i)
    }
    myFunc.push(f1());
}
for(i=0;i<10;i++)
{
    myFunc[i];
}