class projectList { 
    constructor (list = []) {
        this.list = list;
    }

    addTodo(todoObject) {
        this.list.push(todoObject);
    }
    
    removeTodo(todoObject) {
        for (let i = 0; i < this.list.size; i++) {
            const item = list[i];
            if (item.toString() == todoObject.toString()) {
                list.splice(i, 1);
            }
        }
    }
}

export {projectList};