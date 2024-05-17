const jwt = require('jsonwebtoken');
const jwtPassword = 'secret';
function verifyJwt(token) {
    // Your code here
    let ans=true;
    try{
        jwt.verify(token,jwtPassword);
    }
    catch(e){
        ans=false;
    }

    return ans;
}
console.log(verifyJwt("abbc"));
