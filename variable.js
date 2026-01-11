console.log("Regular Message")
console.info("Information Message")
console.warn("Warning Message")
console.error("Error Message")

/* 
Variable = A Container to Store Data
*/

// var: Oldest way
var oldName = "Old Name"

// let: Moder way
let age = 25;
console.log(age)
let name = "Jawad Jisan"


age = 30;
console.log(age)

let country
console.log(country)
country = "BD"
console.log(country)
/* 
Declaration
Initialization
*/

// const: Modern way

const newName = "New Name"

/* 
var, let, const
* Difference between var, let & const
*/


const person = { name: "Jawad", dept: "CSE" }
console.log(person)
console.log(person.name)
person.dept = "ECE"
console.log(person.dept)

/* 
Golden Rules
1. Use const by default
2. Use let only when you need to change value
3. Never use var (old, causes problem)
*/

let firstname
let first_name
let firstName
let firstName2


// avoide declaring like this
let a
let b
let b1