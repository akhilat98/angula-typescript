function UsingParams(pRequired, pDefault, pOptional) {
    if (pDefault === void 0) { pDefault = "DBS-ID"; }
    var pRest = [];
    for (var _i = 3; _i < arguments.length; _i++) {
        pRest[_i - 3] = arguments[_i];
    }
    console.log(pRequired);
    console.log(pDefault);
    console.log(pOptional);
    console.log(pRest);
}
UsingParams(true);
UsingParams(true, "DBS_2344547", 100, "rest1", "rest2", "rest3", "rest4");
function arrayParams(pArr) {
    console.log(pArr);
}
function restParams() {
    var pRest = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        pRest[_i] = arguments[_i];
    }
    console.log(pRest);
}
function complicated() {
    console.log("inside complicated");
    return function () {
        console.log("I will display if invoked only");
        return function (pName) {
            return "Hello " + pName;
        };
    };
}
var result = complicated();
//result();
console.log(complicated()()("akhila"));
//console.log(result);
var output = (function () {
    console.log("A function");
    return "a value";
})();
console.log(output);
var temp = (function () {
    console.log("inside complicated");
    return function () {
        console.log("I will display if invoked only");
        return function (pName) {
            return ("Hello " + pName);
        };
    };
})()()("akhila");
console.log(temp);
//var arr= ['1','2','3'];
// arrayParams(arr);
// restParams('1','2','3','4','5','uuuu');
//lambda functions
(function () {
    console.log("A function");
    return "a value";
});
(function () { return "akhila"; });
var out = function (a) { return function (x, y) {
    console.log(x + y + a);
    console.log("Hello");
}; };
out(10)(20, 30);
(function (a) {
    return function (x, y) {
        console.log(x + y + a);
    };
})(10)(2, 5);
