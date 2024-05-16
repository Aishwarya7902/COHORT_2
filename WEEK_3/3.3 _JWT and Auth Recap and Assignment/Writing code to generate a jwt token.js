const jwt=require('jsonwebtoken');

//generate , verify , decode

const value= {
  name:"harkirat",
  accountNumber:123123123
}

//jwt

const token=jwt.sign(value,"secret");
console.log(token);
//this token has been generated using secret , and hence this token can only be verified using the secret.
