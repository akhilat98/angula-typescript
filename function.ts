function UsingParams(pRequired : boolean,pDefault : String = "DBS-ID",
                    pOptional ?: number,...pRest:string[])
{
    console.log(pRequired);
    console.log(pDefault);
    console.log(pOptional);
    console.log(pRest);
}
UsingParams(true);
UsingParams(true,"DBS_2344547",100,"rest1","rest2","rest3","rest4");

function arrayParams(pArr : string[])
{
    console.log(pArr);
}
function restParams(...pRest:string[])
{
    console.log(pRest);
}
function complicated()
{
    console.log("inside complicated");
    return function()
    {
        console.log("I will display if invoked only");
        return function(pName:string)
        {
            return "Hello " + pName;
        }
    };
}
var result = complicated();
//result();
console.log(complicated()()("akhila"));
//console.log(result);
var output = (function(){
    console.log("A function");
    return "a value";
})();
console.log(output);

var temp = (function(){
    console.log("inside complicated");
    return function()
    {
        console.log("I will display if invoked only");
        return function(pName:string)
        {
            return("Hello " + pName);
        }
    };
})()()("akhila");
console.log(temp);
//var arr= ['1','2','3'];
// arrayParams(arr);
// restParams('1','2','3','4','5','uuuu');

//lambda functions

() => {
    console.log("A function");
    return "a value";
}

() => "akhila";
var out = (a) => (x ,y) => {console.log(x+y+a);
                            console.log("Hello");
                            };
out(10)(20,30);

(function (a){
    return function(x,y)
    {
        console.log( x+y+a);
    }
})(10)(2,5);