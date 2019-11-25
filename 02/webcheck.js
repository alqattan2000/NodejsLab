let userEmail = 'lco12';
let password = '1234';
let userChecker =  (myString) => {
    if ((myString.includes('12')) && (myString.length > 4)) {
        return true;
    } else {
        return false;
    }

};

let passCheck = (pass)=> {
    if (pass.includes(123)) {
        return true;
    } else {
        return false;
    }
}
console.log(userChecker(userEmail));
