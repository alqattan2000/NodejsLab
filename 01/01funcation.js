// Function
let sayHello = function (name) {
    console.log(`Greeting message for ${name}`);
    console.log(`Hey ${name}`);
}
// sayHello('John')


let fullNameMaker = function (firstName,lastName) {
    console.log('Welcome to LCO')
    console.log(`Happy to have you, ${firstName} ${lastName}`)
}

// fullNameMaker('Mohammed', 'Qattan')

let myAdder = function (num1, num2) {
    return num1 + num2
}

// console.log(myAdder(4,5))

let myMultiplier = function (num1,num2) {
    return num1 * num2
}

// Default Values for parameters ***
// console.log(myMultiplier(6,5))

let guestUser = function (name = 'guest', courseCount = 0) {

    return `Hello ${name} & your course count is ${courseCount}`
}

console.log(guestUser('Qattan'))