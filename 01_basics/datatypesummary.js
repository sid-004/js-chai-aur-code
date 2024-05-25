// Primitive

// 7 types: String, Number, Boolean, Null, Undefined, Symbol, BigInt

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id);
console.log(anotherId);


console.log(id === anotherId);

const bigNumber = 218631236845247895452014452235n


// Reference (Non primitive)

// Array, Objects, Functions

const heros = ["shaktiman", "naagraj", "doga"]
let myObj = {
    name: "Swayan",
    age: 19,
}

const myFunction = function(){
    console.log("Hello World");
}

console.log(typeof myObj)