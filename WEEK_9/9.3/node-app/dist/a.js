"use strict";
function identity(arg) {
    return arg;
}
let output1 = identity("myString");
let output2 = identity(100);
////////////////////////////////////////////////////////////
function getFirstElement(arr) {
    return arr[0];
}
const el = getFirstElement(["harkiratSingh", "ramanSingh"]);
console.log(el.toLowerCase());
