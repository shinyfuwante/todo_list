class todoItem { 
    constructor(title, description, dueDate, priority, completed = False) {
        this.title = title;
        this.description = description;
        this.dueDate = dueDate;
        this.priority = priority;
        this.completed = completed;
    }
    toString() {
        return this.title;
    }
}

export {
    todoItem,
}