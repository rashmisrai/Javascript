// Variable can be created in three ways
// 1. Using var
// 2. Using let
// 3. Using const

var name ='Rashmi';
let age = 25;
const country = 'India';

console.log(name);
console.log(age);
console.log(country);

//We should not use Var to declare variable because it can be re-declared and updated. 
// It can lead to bugs in the code. So, it is recommended to use let and const to declare variables.

// Data Types in JavaScript

//Primitives data types in JavaScript are:
// 1. String
// 2. Number
// 3. Boolean
// 4. Null
// 5. Undefined
// 6. Symbol

let str = 'Hello World'; // String
let num = 25; // Number
let bool = true;
let nullValue = null; // Null
let undefinedValue; // Undefined
let symbolValue = Symbol('symbol'); // Symbol

console.log(str);
console.log(num);
console.log(bool);
console.log(nullValue);
console.log(undefinedValue);
console.log(symbolValue);

//Non-primitive data types in JavaScript are:
// 1. Object
// 2. Array
// 3. Function

let obj = { name: 'Rashmi', age: 25 }; // Object
let arr = [1, 2, 3, 4, 5]; // Array
function greet() { // Function

    console.log('Hello World');
}
console.log(obj);
console.log(arr);
greet();

// In JavaScript, we can also use typeof operator to check the data type of a variable.

console.log(typeof str);    
console.log(typeof num);
console.log(typeof bool);
console.log(typeof nullValue);
console.log(typeof undefinedValue);
console.log(typeof symbolValue);
console.log(typeof obj);
console.log(typeof arr);
console.log(typeof greet);

// Primitives data types are immutable, 
// which means that their value cannot be changed once they are created. 
// Non-primitive data types are mutable, 
// which means that their value can be changed after they are created.

//Passing by value and passing by reference
// In JavaScript, primitive data types are passed by value, which means that when we assign a primitive value to a variable, 
// a copy of the value is created and stored in the variable. 
// Non-primitive data types are passed by reference, 
// which means that when we assign a non-primitive value to a variable, 
// a reference to the value is created and stored in the variable.      
let a = 10; // Primitive data type
let b = a;
console.log(a); // 10
console.log(b); // 10

b = 20;
console.log(a); //10
console.log(b); //20

let obj1 = { name: 'Rashmi' };
let obj2 = obj1;

console.log(obj1); // { name: 'Rashmi' }
console.log(obj2); // { name: 'Rashmi' }
obj2.name = 'Rashmi Rathod';
console.log(obj1); // { name: 'Rashmi Rathod' }
console.log(obj2); // { name: 'Rashmi Rathod' }

