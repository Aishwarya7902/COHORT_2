interface User{
  firstName:string,
  lastName:string,
  age:number
}

function isLegal(user:User){
  if(user.age>18)return true;
  return false;
}

isLegal({
  firstName:"Sam",
  lastName:"Altman",
  age:20
})