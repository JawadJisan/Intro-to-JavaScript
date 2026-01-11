let m = 10, n = 3
console.log(m + n)
console.log(m - n)
console.log(m * n)

let count = 5
console.log(count++)
console.log(count)
console.log(++count)


count = count + 10
console.log(count)
count += 5
count -= 5

/* Comparision Operators */
let number4 = 7
let number5 = "7"

console.log(5 == 5)
console.log(5 === 5)

console.log(5 != 7)
console.log(5 !== 5)

console.log(number4 == number5)
console.log(number4 === number5)
/* 
== vs ===
== (Loose equality)
=== (Strict equality)
*/

// Magis Javascript 
console.log(0 == false)
console.log(0 === false)
console.log(null == undefined)
console.log(null === undefined)

// Relational Operators
console.log(10 > 5)
console.log(10 < 5)
console.log(10 <= 5)
console.log(10 >= 5)

console.log("apple" > "banana")


/* Logical Operators */
console.log(true && true)
console.log(true && false)
console.log(false && true)
console.log(false && false)

console.log(true || true)
console.log(true || false)
console.log(false || true)
console.log(false || false)

console.log(!true)
console.log(!false)
console.log(!!true)

let result1 = true  && console.log("Thie runs")
let result2 = false  && console.log("Thie runs")

let result3 = console.log("first")  || console.log("Thie runs")
let result4 = false  || console.log("Thie runs")