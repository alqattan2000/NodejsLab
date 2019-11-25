let myTodos = {
    dat: 'Monday',
    Meetings: 0,
    meetDone: 0,

    addMeeting: function (Meetings) {
        this.Meetings =+ Meetings;
    },
    addDone: function(Done) {
        this.meetDone = this.Meetings - Done;
    },
    reset : function () {
        this.addDone = this.Meetings = 0;
    },
    summary: function() {
        return `You have ${this.Meetings - this.meetDone } left to be Done !!`;
    },

};

myTodos.addMeeting(9);
myTodos.addDone(4);
myTodos.summary();
console.log(myTodos.summary());
console.log(myTodos);
myTodos.reset();
console.log(myTodos);
