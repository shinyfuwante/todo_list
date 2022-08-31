import { todoItem } from "./todo";
import { projectList } from "./project";

const newToDoForm = document.querySelector('form.add-todo');
const todoContainer = document.querySelector('body');

const domManipulator = (() => {
    const addTodo = (e, currentProject) => {
        e.preventDefault();
    
        let formValid = newToDoForm.checkValidity();
        if (!formValid) {
            newToDoForm.reportValidity(); 
            return;
        }
    
        const newTitle = document.querySelector('input#new-todo-title').value;
        const newDesc = document.querySelector('input#new-todo-description').value;
        const newDueDate = document.querySelector('input#new-todo-due-date').value;
        const newPrio = document.querySelector('select#new-todo-priority').value;
        
        const newTodo = new todoItem(newTitle, newDesc, newDueDate, newPrio);
        console.log(newTodo);

        currentProject.addTodo(newTodo);
        console.log(currentProject);
    }

    const openForm = (e) => {
        newToDoForm.classList.toggle('hidden');
    }

    const renderToDos = (currentProject) => {
        currentProject.list.forEach(todoObject => renderShortTodo(todoObject));
    }

    const toggleCheckBox = (e, todoObject) => {
        console.log('clicking checkbox');
    }

    const renderShortTodo = (todoObject) => {
        const todoItem = document.createElement('div');
        todoItem.classList.add('todo-object');

        //create a checkbox here
        const todoCheckbox = document.createElement('button');
        todoCheckbox.classList.add('todo-completed');
        todoCheckbox.addEventListener('click', e => toggleCheckBox(e, todoObject));
        todoItem.appendChild(todoCheckbox);

        const todoTitle = document.createElement('span');
        todoTitle.innerText = todoObject.title;
        todoItem.appendChild(todoTitle);
        
        // const todoDesc = document.createElement('span');
        // todoDesc.innerText = todoObject.description;
        // todoItem.appendChild(todoDesc);

        const todoDueDate = document.createElement('span');
        todoDueDate.innerText = todoObject.dueDate;
        todoItem.appendChild(todoDueDate);

        //create a button here to expand on details

        // const todoPriority = document.createElement('span');
        // todoPriority.innerText = todoObject.priority;
        // todoItem.appendChild(todoPriority);

        // const todoCompleted = document.createElement('span');
        // todoCompleted.innerText = todoObject.completed;
        // todoItem.appendChild(todoCompleted);

        todoContainer.appendChild(todoItem);

    }

    return {
        addTodo,
        openForm,
        renderToDos,
    }
})();


export {
    domManipulator,
}