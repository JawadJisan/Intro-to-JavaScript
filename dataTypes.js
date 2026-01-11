// Type 1: STRING
let userName = "Jhon Doe"
let updateAge = "25"


// Type 2: Number
let userAge = 25


// Type 3: BOOLEAN (True or False)
let isStudent = true
let isEnrolledCourse = false

// Type 4: UNDEFINED (Not assigned yet)
let x;
console.log(x)

// Type 5: NULL (Empty Value) (Intentional)
let emptyValue = null
console.log(emptyValue)

// Type 6: BIGINT (very large number)
let bigNumber = 444545555555555444444n

// Type 7: SYMBOL (Unique identifier)
let id = Symbol("id")
console.log(id)

/* Checking Data types */
// console.log(typeof "Hello")
console.log(typeof userName)
console.log(typeof userAge)
console.log(typeof isStudent)
console.log(typeof x)
console.log(typeof emptyValue)
console.log(typeof [])
console.log(typeof {})
console.log(typeof function(){})
console.log(typeof bigNumber)


// METHODS
// String Methods
console.log(userName.length)
console.log(userName.toUpperCase())
console.log(userName.toLowerCase())
console.log(userName.includes("Jhon"))

// Number Methods
console.log(userAge.toString())
console.log(userAge.toFixed(2))

let emptyValueNew = null
console.log(typeof emptyValueNew) // Object (JavaScript Bug)