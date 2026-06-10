

// First way to create strings - single quote
const a = 'Hello';
console.log(a);

// Second way to create a string - double quote 
const b = "World";
const c = "She's my best friend";
console.log(b);
console.log(c);

// Third way to create a string  - template literal
const d = `Technology has become an integral part of daily life, transforming the way people communicate, learn, and work. From smartphones that connect us instantly across continents to advanced software that helps businesses operate more efficiently, innovation continues to reshape society. While these advancements offer convenience and new opportunities, they also encourage individuals to develop digital skills and adapt to changing environments. As technology evolves, balancing its benefits with responsible use will remain important for creating a future that is both productive and sustainable`
console.log(d);

// .length property of string 
console.log(d.length);
console.log(c.length);
console.log(b.length);
console.log(a.length);

// Accessing individual character by using index
console.log(a[0]);
console.log(a[1]);
console.log(a[2]);
console.log(a[3]);
console.log(a[4]);

// Golden rule: Strings are immutable
let name = 'Rashmi';
name[0] = 'S';
console.log(name);
console.log(name.toUpperCase());
console.log(name.toLowerCase());

console.log(d.indexOf("integral"));
console.log(d.lastIndexOf("to"));

// slice
console.log(d.slice(0,10));
console.log(name.slice(-4,-1));

let number = 'Eleven';
console.log(number.substring(1,5)); // similar as.slice() but it does not accept negative numbers

let details = "Technology has become an integral part of daily life";
console.log(details.replace("Technology", "Education"));

// trim()

let Data = "     Technology has become an integral part of daily life        ";
console.log(Data);
console.log(Data.trim());
console.log(Data.trimStart());
console.log(Data.trimEnd());

//Spliting the data into array

let students = "Rashmi,Bunny,Dibu, Dubu, Chinu";
console.log(students);
console.log(students.split(","));

// New way to use template literalls

let child = "Rashmi";
console.log(`Hello everyone, My name is ${child}`);


// DATE

let date = new Date();
console.log(date);
console.log(date.toString());
console.log(date.getDate());
console.log(date.getDay());
console.log(date.getFullYear());


let timestamp = Date.now();
console.log(timestamp);

let a = new Date(1780548769431);
console.log(a.toDateString());

// In Javascript, the months starts from 0, whereas the days starts from 1..... This is one of the glitch in JS