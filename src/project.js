class projectList { 
    constructor (list = []) {
        this.list = list;
    }

    get length() {
        return this.list.length;
    }

    get list() {
        return this.list;
    }

    contains(todoObject) {
        return this.list.includes(todoObject);
    }

    getObject(todoObject) {
        if (this.contains(todoObject)) {
            for (let i = 0; i < this.length; i++) {
                const item = this.list[i];
                if (item.toString() == todoObject.toString()) {
                    return i;
                }
            }
        }
        return -1;
    }

    addTodo(todoObject) {
        this.list.push(todoObject);
    }
    
    removeTodo(todoObject) {
        this.list = this.list.filter(object => object != todoObject);
    }
}

export {projectList};