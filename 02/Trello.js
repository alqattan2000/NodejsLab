let myTodos = {
    day: 'Monday',
    meetings : 0,
    meetDone : 0
};

let addMeeting = (todo, meet = 0)=>{
    todo.meetings = todo.meetings + meet;
};

let meetDone = (todo, meet = 0)=>{
    todo.meetDone = todo.meetDone + meet;
};

let resetDay = (todo)=>{
    todo.meetings = 0;
    todo.meetDone = 0;
};

let getSummaryOfDay =(todo)=>{
    let meetLeft = todo.meetings - todo.meetDone;
    return `You have ${meetLeft} meeting today !!`;
};

addMeeting(myTodos,4);
console.log(myTodos);
addMeeting(myTodos,2);
meetDone(myTodos,3);
console.log(getSummaryOfDay(myTodos));
console.log(myTodos);

// addMeeting(myTodos , 4);
// console.log(myTodos);
// meetDone(myTodos , 2);
// console.log(myTodos);
