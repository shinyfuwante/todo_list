import './reset.css';
import { projectList } from './project';
import { todoItem } from './todo';

const projects = new projectList();

const todo1 = new todoItem("Chores", "vacuum and mop", "any", "high");
const todo2 = new todoItem("Code", "Todo Project", "any", "high");
const todo3 = new todoItem("Cook", "Chicken", "any", "high");

projects.addTodo(todo1);
projects.addTodo(todo2);
projects.addTodo(todo3);

console.log(projects);

projects.removeTodo(todo2);

console.log(projects.contains(todo2));
console.log(projects.getObject(todo1));
console.log(projects);

console.log(todo2);
todo2.title = "Some other title";
todo2.description = "Some description";
todo2.dueDate = "Some Date";
todo2.priority = "Sick";
todo2.completed = !todo2.completed;
console.log(todo2);

const body = document.querySelector('body');
console.log(body);
const button = document.createElement('button');
button.innerText = '+';
body.appendChild(button);


const createNewTodo = (e) => {
    const newTodo = new todoItem("Something to do", "We gotta do something", "Tomorrow", "Highest");
    console.log(newTodo);
    projects.addTodo(newTodo);
    console.log(projects);
}

button.addEventListener('click', createNewTodo);
const addTodo = (e) => {
    e.preventDefault();

    const form = document.querySelector('form.add-todo');
    let formValid = form.checkValidity();
    if (!formValid) {
        form.reportValidity(); 
        return;
    }

    const newTitle = document.querySelector('input#new-todo-title').value;
    const newDesc = document.querySelector('input#new-todo-description').value;
    const newDueDate = document.querySelector('input#new-todo-due-date').value;
    const newPrio = document.querySelector('select#new-todo-priority').value;
    
    const newTodo = new todoItem(newTitle, newDesc, newDueDate, newPrio);
    console.log(newTodo);
}

const buttonForm = document.querySelector('button#add-to-do');


buttonForm.addEventListener('click', addTodo);
