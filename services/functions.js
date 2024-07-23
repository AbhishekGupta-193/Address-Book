import {User} from "../model/user.js";

const userData=[]; 

//CREATE USER FUNCTION
function createUser(fullName,address,age,number,state){
    const user = new User(fullName,address,age,number,state);
    userData.push(user);
}

createUser('Abhishek Kumar Gupta','Dumka',22,7992417318,'Jharkhand');  //User 1
createUser('John Doe','Kormangala',32,9892417318,'Karnataka');  // User 2
createUser('Ram Sharma','Patna',30,7777417318,'Bihar');  // User 2

