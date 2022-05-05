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