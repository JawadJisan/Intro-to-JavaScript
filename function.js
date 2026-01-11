// Function = Reusable Block of Code

function test() {
    console.log("test")
}

function add(a, b) {
    const sum = a + b
    console.log(sum)
}

add(5, 6)
add(666, 565)

function getPersoneName(name) {
    console.log(name + " Hi There")
}

getPersoneName("Talha")

console.log(5 + "66")

function totalAvg(a, b, c) {
    return (a + b + c) / 3
}

const firstAvg = totalAvg(5, 10, 15)
console.log(firstAvg)

function calculatePrev(a) {
    console.log(firstAvg + a)
}
calculatePrev(5)
test()


// Immadeatly Calling Function
// (() => {
//     console.log("This function calls immediately");
// })();

