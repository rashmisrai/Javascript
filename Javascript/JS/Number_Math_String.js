
let a = 10;
let b = 56.78;

console.log(a);
console.log(b);
console.log(typeof a);
console.log(typeof b);

let c = 5e9;
console.log(c);
let d = 5e-6;
console.log(d);
console.log(typeof c);
console.log(typeof d);


let e = 0.1234567;
let f = 0.2;
let g = e + f;
let h = 2345642343;
console.log(g.toFixed(1));

console.log(typeof g);
console.log(typeof g.toFixed(1)); // Fixed the number after decimal
console.log(e.toPrecision(3)); // Number to be printed after decimal
console.log(h.toLocaleString());// converts the number into string eg: Currency
console.log(e.toExponential());
console.log( typeof h.toString());
console.log(typeof h);

console.log(Math.abs(-9999999)); // Math.abs function converts negative number to positive number
console.log(Math.ceil(9.456)); // Highest number from the provided data: 10
console.log(Math.floor(9.456)); // Lowest number from provided data : 9
console.log(Math.PI); // returns the value of PI
console.log(Math.max(2,45,2456,234567)); // returns max value
console.log(Math.min(2,45,2456,234567)); // returns min value
console.log(Math.trunc(234.567)); // returns the value before decimal
console.log(Math.sign(-5)); // returns -1 for negative numbers and positive 1 for positive numbers 
console.log(Math.round(9023.5)); // rounds a number to the nearest integer.

 console.log(Math.random()); // [0,1)
// It will give you the random values between 0 and 1. where 0is included and 1 is not included
// every time it willgive us the random values 

 console.log(Math.floor(Math.random()*10)); // 0 to 9.0999998899 

// Want the number between 1 to 6

console.log(Math.floor(Math.random()*6)+1);





