var john = {
    name: `I'm John`,
    age: 24,
    isActive: true,
}

var marry = {
    name: `I'm Marry`,
    age: 23,
    isActive: true,
}

var sam = {
    name : `I'm Sam`,
    age: 15,
    isActive: false
}

let users = new Map()
users.set('john', john)
users.set('marry', marry)
users.set('sam', sam)

console.log(users.size)
console.log(users.get('sam'))
console.log(users.keys())
console.log(users.values())



// for of example --- 
// *************************
for (const key of users.keys()) {
    console.log(key);   
}


for (const val of users.values()) {
    console.log(val);   
}

for (const val of users.values()) {
    console.log(val.name);   
}

// for Of Array *************
for (const [key,val] of users.entries()) {
    console.log(`${key} = ${val.name}`);
}

// foreach (((VALUE is First Allows for ForEach)) 

users.forEach((val,key)=>{
    console.log(`${key} = ${val.age}`);
});


var arrOfArrs = [['one', 0, {name: 'Qattan', age : 38}], ['two',1,{name: 'Nahed', age : 42}], ['tree',3,{name: 'Sozan', age : 48}]];
var newMap = new Map(arrOfArrs);
console.log(newMap);


for (const key of newMap.keys()) {
    console.log(key);
    
}
for (const [key, val] of newMap.entries()) {
    console.log(`${key} = ${val}`);
    
}