interface User{
    id:string;
    name:string;
    age:number;
    email:string;
    password:string;
};

type updateProps=Pick<User,'name' | 'email' | 'age'>

function updateUser(updateProps:updateProps){
    //db call to update user 
}

