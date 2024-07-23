import { User } from "../model/user.js";

const userData = [];

//CREATE USER FUNCTION
function createUser(fullName, address, age, number, state) {
    const user = new User(fullName, address, age, number, state);
    userData.push(user);
}

createUser('Abhishek Kumar Gupta', 'Dumka', 22, 7992417318, 'Jharkhand');  //User 1
createUser('John Doe', 'Kormangala', 32, 9892417318, 'Karnataka');  // User 2
createUser('Ram Sharma', 'Patna', 30, 7777417318, 'Bihar');  // User 2

//READ USER FUNCTION
function readUsers() {
    return userData;
}
const allUsers = readUsers();
console.log(allUsers);


//UPDATE USER FUNCTION
function findUserByName(name) {
    return userData.find(user => user.fullName == name);
}

function updateUser(name, newDetails) {
    const user = findUserByName(name);
    if (user) {
        Object.assign(user, newDetails);
        return true;
    }
    return false;
}

const updated = updateUser('Ram Sharma', { address: 'Bhagalpur', age: 25 });
console.log(updated);
console.log(allUsers);


//DELETE USER FUNCTION

function deleteUser(name) {
    const user = findUserByName(name);
    const index = userData.indexOf(user);
    if (index != -1) {
        userData.splice(index, 1);
        return true;
    }
    return false;
}

const deleted = deleteUser('Ram Sharma');
console.log(deleted)
console.log(allUsers);


//SEARCHING USER

function findUserByAddress(address) {
    return userData.find(user => user.address == address);      //search by address
}
function findUserByAddress(state) {
    return userData.find(user => user.state == state);          //search by state
}
function findUserByAddress(number) {
    return userData.find(user => user.number == number);        //search by number
}
function findUserByAddress(age) {
    return userData.find(user => user.age == age);              //search by age
}