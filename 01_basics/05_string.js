const name = "Swayan"
const repocount = 50

console.log(name + repocount + " Value")

// console.log(`Hello my name is ${name} and my repo count is ${repocount}`);

const gamename = new String('Swayan-hc')

// console.log(gamename[0])
// console.log(gamename.__proto__)


// console.log(gamename.length);
// console.log(gamename.toUpperCase());
// console.log(gamename.charAt(2));
// console.log(gamename.indexOf('a'));

const newString = gamename.substring(0, 5)
// console.log(newString);

const anotherString = gamename.slice(-8, 4)
// console.log(anotherString);

const newStringOne = "  Swayan  "
console.log(newStringOne.trim())

const url = "https://swayan.com/swayan%20sarkar"

console.log(url.replace('%20', '-'))

console.log(url.includes('swayannn'));

console.log(gamename.split('-'));

