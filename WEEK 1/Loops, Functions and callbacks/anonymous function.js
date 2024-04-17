// In real world , an anonymous is someone who does not have a name




function sumOfSomething(a,b,fn){
  const val1=fn(a);
  const val2=fn(b);
  return val1+val2;
}
console.log(sumOfSomething(2,3,function (a){ // here we dont need to name the function ....just pass the function declaration as an argument
  return a*a;
}
));
