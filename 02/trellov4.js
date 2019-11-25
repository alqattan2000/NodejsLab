//const myTodos = ['Learn', 'Study', 'Go to GYM', 'Play with Jojo', 'Make Youtube'];


const newTodos = [
    {
    title: 'Learn',
    isDone : false,
},{
    title: 'Study',
    isDone : false,
},{
    title: 'Make Youtube',
    isDone : true,
}];

// const findTodo = (anyTodos,title)=>{

// const index = anyTodos.findIndex(function(todo,index){
// return todo.title.toLowerCase() === title.toLowerCase();
// })
// return newTodos[index];
// };

// const v = findTodo(newTodos,'learn');
// console.log(v);


const findTodo = (myTodos, title)=>{
    const titleReturned = myTodos.find((todo, index)=>{
        return todo.title.toLowerCase() === title.toLowerCase()
    })
    return titleReturned;
}
console.log(findTodo(newTodos, 'make yo*'));
