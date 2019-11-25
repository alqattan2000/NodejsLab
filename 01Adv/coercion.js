
//coercion No1
console.log('5'+ 5);
console.log('5'- 5);


const giveType = typeof []
console.log(giveType);


//coercion No2
// true = 1 1  // false = 0

console.log(true + 5);
console.log(false + 5);

const loginDetails = []
// logic for getting details form DB

const loginID = loginDetails[0]
if (loginID !== undefined) {
    console.log(`Allow user to login`);
} else {
    console.log(`Auth Failed`);
    
}


if (loginID) {
    console.log(`Allow user to login`);
} else {
    console.log(`Auth Failed`);
}

// Values That interpret as false :
// false
// 0
// ''
// null
// undefined 
