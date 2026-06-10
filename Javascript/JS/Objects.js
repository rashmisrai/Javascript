// Objects in JS = Collection of labeled data in key-value pair
// Javascript key = String || Symbol

// CRUD: Create, Read, Update, Delete
/*
// Creating an object : C
const person = {
    name: "Rashmi",
    age: 23,
    Gender: "Female",
    Literate: "Yes",
    "Marital Status": "Unmarried"
}
console.log(person);
console.log(typeof person);


//Javascript me jo key hai, woh backend mai as a string store hota hai.Agar woh symbol hua, toh symbol b storekr skte hai

const num ={
    0: 10,
    1: 20,
    2: 30,
    3:40
}
console.log(num);
console.log(typeof num);

//Reading the value from object : R

console.log(num[1]);
console.log(person.name);


let Username = "name"; //CRITICAL USE CASE: Bracket notation allows you to use a variable to determine which property to access.
console.log(person.Username); // Output: Undefined
console.log(person[Username]); // Output: Rashmi

// Updating the values or adding the values in the Object : U
person.city = "Mumbai";  // adding
console.log(person);

person.city = "Lucknow"; //Updating
console.log(person);

//Deleting the data from the object: D
delete person.city;
console.log(person);

// Functions in an object

const stats = {
    key1: 10,
    key2: "Hello", // here key2 = property
    key3: function () { // here key3 = method
        console.log("This is India");
    }

}
console.log(stats);
stats.key3();



const stats2 = {
    key1: 190,
    key2: "Helluo", // here key2 = property
    key3: function () { // here key3 = method
        console.log(`This is India, yes ${this.key1}`);
    }

}
stats2.key3();

// to access only keys
console.log(Object.keys(person));

// to access only values
console.log(Object.values(person));

// to access both keys and values 
console.log(Object.entries(person));

*/

// Loop using for in loop

//Old method - should not use
const person2 = {
    name: "Rashmi",
    age: 23,
    Gender: "Female",
    Literate: "Yes",
    "Marital Status": "Unmarried"
}

// for (let key in person){ // should not use for in loop as it can create bugs into your code
//     console.log(key, person[key]);
// }

// instead lets use for of loop

// for(keys of Object.entries(person2)){
//     console.log(keys);

// }
// // sirf keys chaiye
// console.log(Object.keys(person2));
// console.log(Object.values(person2));
// console.log(Object.entries(person2));

// Advance concepts

// Objects are a Reference Type, toh isko easily change kr skte h agar dusra refer krne wala variable ka value change hota h
const a = {
    fruit: "Papaya"
}
let b = a;
b['fruit'] = "Mango";
console.log(a); // Mango

let ab = {
    fruit: "Papaya"
}
let bu = ab;
bu['fruit'] = "Mango";
console.log(ab);

// Suppose tumhe chaiye ki object ki copy bane aur original wale object m changes na ho
// then use (...) spread operator ya fir Object.assign() = shallow copy of an object

const original = { 
    name: "Alice", 
    age: 30 
};

const copy = {...original};
copy.age = 40;
console.log(original);
console.log(copy);

// (Note: This is a "shallow" copy. If the object contains other objects, those nested objects will still be references, not copies.)

const original1 = { 
    name: "Alice", 
    age: 30,
    address: {
        city: 'Mumbai',
        State: 'Maharashtra',
        pincode: 401209
    }
};

const copy1 = {...original1};
copy1.address.city = "Pune";
console.log(original1);

// PROPERTY VALUE SHORTHAND
const state = "Maharashtra";
const state2 = "U.P";

const j = { // old way
    state: state,
    state2: state2
};
console.log(j);

const k ={state, state2}; // new way
console.log(k);

// METHOD SHORTHAND

const body ={
    part1: "Head",
    part2: function(){
        console.log("Full body");
    }
}
console.log(body);
body.part2();

const d = {
    name:" Rashmi",
    class(){
        console.log("Gangster");
    }
}
d.class();

//Computed Property Names: Use a variable as a property key during creation by putting it in brackets.
let name = "Username";
const aaa ={
    [name]: "Rashmi"
}
console.log(aaa);

// For loop

// accessing only the keys : Object.keys()
const v ={
    child1: "Rashmi",
    child2: "Ankit",
    child3: "Bunny",
    child4: "Dibu"
}
console.log(v);

for(let keys of Object.keys(v)){ // for accessing keys
    console.log(keys);
}

for(let values of Object.values(v)){ // for accessing values
    console.log(values);
}

for(let data of Object.entries(v)){ // for accessing both key and values
    console.log(data);
}

const s = structuredClone(v); // use to create a duplicate of reference data
console.log(s);

s.child1 = 'Babu';
console.log(v);
console.log(s);

// structuredClone() is the modern, correct, and recommended way to create a deep copy in JavaScript.

// Object destrucuring

const vv ={
    child1: "Rashmi",
    child2: "Ankit",
    child3: "Bunny",
    child4: "Dibu",
    child5:{
        age:12
    }
}

const {child1, child3, child5:{age}} = vv;
console.log(child1);
console.log(child3);
console.log(age);


let aaaa = [12,23,344,56,543,345];
let [q,w,e] = aaaa;
console.log(q,w,e);


// Creating symbol
const r = Symbol("Xoc");
const y = Symbol("Xoc");
console.log(r == y);


