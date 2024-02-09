"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Todo = /** @class */ (function () {
    function Todo() {
        this.Tasks = [];
    }
    Todo.prototype.addTask = function (task) {
        var length = this.Tasks.push(task);
        console.log(task + " has been added to my tasks!");
        return length;
    };
    Todo.prototype.listAllTasks = function () {
        this.Tasks.forEach(function (item) {
            console.log(item + " is in our Tasks list");
        });
    };
    Todo.prototype.deleteTasks = function (task) {
        var index = this.Tasks.indexOf(task);
        if (index > -1) {
            this.Tasks.splice(index, 1);
            console.log(task + " removed from my Tasks list!");
        }
        else {
            console.log(task + " is not in my Tasks list!");
        }
        return this.Tasks.length;
    };
    return Todo;
}());
var myTodo = new Todo();
myTodo.addTask("Sleep");
myTodo.deleteTasks("work");
myTodo.listAllTasks();
