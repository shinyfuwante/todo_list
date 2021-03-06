import './reset.css';
import { projectList } from './project';
import { todoItem } from './todo';
import { domManipulator as DM } from './DOMmanipulator';

const projects = new projectList();

const todo1 = new todoItem("Chores", "vacuum and mop", "", "high");
const todo2 = new todoItem("Code", "Todo Project", "", "high");
const todo3 = new todoItem("Cook", "Chicken", "", "high");

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


const buttonForm = document.querySelector('button#add-to-do');
buttonForm.addEventListener('click', (e) => DM.addTodo(e, projects));
const openformBtn = document.querySelector('button#open-form');
openformBtn.addEventListener('click', (e) => DM.openForm(e));

DM.renderToDos(projects);