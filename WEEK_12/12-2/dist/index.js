"use strict";
function sumOfAges(user1, user2) {
    return user1.age + user2.age;
}
const age = sumOfAges({
    name: "Harkirat",
    age: 20
}, {
    name: "Aishwarya",
    age: 18
});
console.log(age);
