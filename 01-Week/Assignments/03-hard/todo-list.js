/*
    Implement a class `Todo` having below methods
    - add(todo): adds todo to list of todos
    - remove(indexOfTodo): reomve todo from list of todos
    - update(index, updatedTodo): update todo at gives index
    - getAll: returns all todos
    - get(indexOfTodo): returns todo at given index
    - clear: deletes all todo
*/

class Todo {
    constructor() {
        this.todos = [];
    }

    add(todo) {
        this.todos.push(todo);
    }

    remove(index) {
        if (index >= 0 && index < this.todos.length) {
            this.todos.splice(index, 1);
        } else {
            console.log("Invalid index");
        }
    }

    update(index, updateTodo) {
        if (index >= 0 && index < this.todos.length) {
            this.todos[index] = updateTodo;
        } else {
            console.log("Invalid index");
        }
    }

    getAll() {
        return this.todos;
    }

    get(index) {
        if (index >= 0 && index < this.todos.length) {
            return this.todos[index];
        } else {
            console.log("Invalid index");
            return null;
        }
    }

    clear() {
        this.todos = [];
    }
}

// Example usage
const myTodos = new Todo();
myTodos.add("Learn JavaScript");
myTodos.add("Build a project");
console.log(myTodos.getAll());
myTodos.update(0, "Master JavaScript");
console.log(myTodos.get(0));
myTodos.remove(1);
console.log(myTodos.getAll());
myTodos.clear();
console.log(myTodos.getAll());