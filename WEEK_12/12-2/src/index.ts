interface User{
    id:string;
    name:string;
    age:number;
    email:string;
    password:string;
};

type updateProps=Pick<User,'name' | 'email' | 'age'> //it picks properties from an existing type
type updateOptionalPros=Partial<updateProps> //partial makes all the properties as optional

function updateUser(updateProps:updateProps){
    //db call to update user 
}

