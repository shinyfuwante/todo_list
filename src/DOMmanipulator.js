import { todoItem } from "./todo";
import { projectList } from "./project";


const domManipulator = (() => {
    const addTodo = (e, currentProject) => {
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

        currentProject.addTodo(newTodo);
        console.log(currentProject);
    }

    return {
        addTodo,
    }
})();


export {
    domManipulator,
}