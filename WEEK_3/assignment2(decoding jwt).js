const jwt = require('jsonwebtoken');
function decodeJwt(token) {
    // Your code here
    const decoded=jwt.decode(token);
    if(decoded){
        return true;
    }
    else {
        return false;
    }
}
console.log(decodeJwt("eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c"))
