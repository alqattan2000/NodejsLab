const convertToRs= (dollar)=> {
    if (typeof dollar === 'number') {
        return dollar * 64 
    } else {
        throw Error('Amount needs to be in Number')
    }
   };

   try {
const myBal = convertToRs('five')
console.log(myBal);
   } catch (e) {
    console.log(e.message)      
   }
console.log('I will not run if program crashes');

// const myBal = convertToRs('five')
// console.log(myBal);
