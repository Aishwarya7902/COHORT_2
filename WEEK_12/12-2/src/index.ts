interface User{
    name:string;
    age:number;
}

function sumOfAges(user1:User,user2:User){
    return user1.age+user2.age
}

const age=sumOfAges({
    name:"Harkirat",
    age:20
},{
    name:"Aishwarya",
    age:18
});

console.log(age)