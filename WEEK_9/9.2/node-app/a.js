"use strict";
function isLegal(age) {
    if (age >= 18)
        return true;
    return false;
}
const legal = isLegal(20);
console.log(legal);
