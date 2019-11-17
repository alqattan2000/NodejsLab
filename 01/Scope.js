let iAmGlobel = 'SoneValue'

if (true) {
    let iAmLocal = 'SomeLocalValue'
    iAmGlobel = 'test'
    console.log(iAmGlobel)
    console.log(iAmLocal)
}
console.log(iAmLocal)
console.log(iAmGlobel)