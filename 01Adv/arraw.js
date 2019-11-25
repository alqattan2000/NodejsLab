
// Function level 1
// let sayHello = function(name){
//     return `Hi Mr ${name} this only about arrow function`;
// }
// console.log(sayHello('Qattan'));

// Function Level 2
// let sayHello = (name)=>{
//     return `Hi Mr ${name} this only about arrow function`;
// }
// console.log(sayHello('Qattan'));

// function Level 3
let sayHello = (name)=> `Hi Mr ${name} this only about arrow function`
console.log(sayHello('Qattan'));

const todos = [{
    title: 'Learn',
    isDone: true
},{ title: 'Study',
    isDone: false
},{ title: 'record youtube',
    isDone: false
},{ title: 'call mam',
    isDone: true
},{ title: 'Nodejs',
isDone: false
},{ title: 'javascript',
isDone: true
}];

const thingsToBeDone = todos.filter((todo)=> todo.isDone === false);
thingsToBeDone.forEach((todo)=>{
    console.log(todo.title);
});


const cameras = {
    price: 600,
    weight: 2000,
    myDes:  function() {
        return `This canon camera is of ${this.price}$ and weight of ${this.weight}g`;
    }
};

console.log(cameras.myDes());







