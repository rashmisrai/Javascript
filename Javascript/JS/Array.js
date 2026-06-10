// Arrays
let a =[12,13,14,147];
console.log(a);

let names = ["Rashmi", "Bunny", "Rathod"];
console.log(names);

let stateCode = [33, "Maharashtra", 24, "Uttar Pradesh"];
console.log(stateCode);

// length of an array
console.log(a.length);
console.log(names.length);
console.log(stateCode.length);

// Accessing the elements in an array
console.log(a[1], names[2], stateCode[3]); // Reading an element

//Changing the values in an array
// Case 1: where we are declaring the array using 'let'
names[0] = "Baby";
console.log(names); // writing an element

// getting the last item in an array

const mixed = [1, "Hello", true, null];
console.log(mixed[mixed.length-1]);

// Adding item at last in an array
mixed.push("Rashmi");
console.log(mixed);

// deleting the item at the end of an array and gives it as an answer
console.log(mixed.pop());


// Don't use these (unshift and shift methods): This will create a prblm for the memory
// Adding the item at the first 
mixed.unshift("Babu");
console.log(mixed);

//Deleting the item at the first
mixed.shift();
console.log(mixed);

// Looping over an array
const state = ["Maharashtra", "U.P", "Gujrat", "Kolkata", "Hyderabad" ];

//For loop
for (let index = 0; index < state.length; index++) {
    const element = state[index];
    console.log(element);
    
}

//Forof Loop
for (const element of state) {
    console.log(element);
}

//Advance array manipulation

let months =["Jan","Feb","March","April","May"];
console.log(months);

months.splice(0,2); //splice() method will change the original array
console.log(months);

months.splice(0,1,"London");
console.log(months);

let days = ["Sun","Mon","Tue","Wed"];
console.log(days);

let t = days.slice(0,2); // slie() method will not change the originalarray. It will give a new array
console.log(t);

//Combining two arrays 

let f = [...months,...days];
console.log(f);

//Add element in the middle of an array
let g = [...months,78,"Hi",...days];
console.log(g);

// Converting string into an array
let diseases  = "Malaria,Dengue";
console.log(diseases.split(","));

// Converting an array into a string
let animals =[10,20,29,"Tiger","Lion"];
console.log(animals.join("-"));

console.log(animals.indexOf(20));
console.log(animals.lastIndexOf("Lion"));
console.log(animals.includes("Tall"));
console.log(animals.includes(20));


//Sorting an array - Ascending order
let fruits = ["Cherry", "Apple", "Banana"];
console.log(fruits.sort()); // output: [ 'Apple', 'Banana', 'Cherry' ]

let num = [100, 2, 5, 25, 1];
console.log(num.sort());
// It converts the number into a string and thenon the basis of ASCII table numbering it sorts 

//Sorting an array - Descending order
// Method 1: First sort then reverse 
console.log(fruits.reverse());

// Method 2: Use function
console.log(fruits.sort((a,b)=>a-b));

/*Let's analyze `(a, b) => a - b` for ascending order (smallest to largest):**

- **Case 1:** Let's say `a` is `5` and `b` is `10`.
    - `a - b` is `5 - 10 = -5` (a negative number).
    - The rule says: if negative, `a` comes before `b`. This is correct.
- **Case 2:** Let's say `a` is `25` and `b` is `2`.
    - `a - b` is `25 - 2 = 23` (a positive number).
    - The rule says: if positive, `a` comes after `b`. This is correct.
- **Case 3:** Let's say `a` is `100` and `b` is `100`.
    - `a - b` is `100 - 100 = 0`.
    - The rule says: if zero, the order doesn't matter. This is correct.
    */

let arr =[1,2,3,4,[12,23,45,56,[123,456,235,235]]];
console.log(arr.flat(Infinity)); //.flat() creates a new array by pulling out all the items from the sub-arrays. It is non-mutating.
console.log(arr);

console.log(Array.isArray(arr));
console.log(typeof arr);
// Every array is an object, but not every object is an array.
const arr = [1,2,3];      // Array + Object
const obj = {a:1,b:2};    // Only Object

