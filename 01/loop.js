const myToDo =[]

myToDo.push('Learn')
myToDo.push('Study')
myToDo.push('practice')

myToDo.forEach((toDo,i)=>{
    console.log(`${i+1} - ${toDo}`);
})

for (let index = 0; index < myToDo.length;index++) {
    console.log(myToDo[index]);
}