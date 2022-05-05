class projectList { 
    constructor (list = []) {
        this.list = list;
    }

    get length() {
        return this.list.length;
    }

    contains(todoObject) {
        for (let i = 0; i < this.length; i++) {
            const item = this.list[i];
            if (item.toString() == todoObject.toString()) {
                return true;
            }
        }
        return false;
    }

    getObject(todoObject) {
        if (this.contains(todoObject)) {
            for (let i = 0; i < this.length; i++) {
                const item = this.list[i];
                if (item.toString() == todoObject.toString()) {
                    return item;
                }
            }
        }
        console.log('Failed to retrieve object');
    }

    addTodo(todoObject) {
        this.list.push(todoObject);
    }
    
    removeTodo(todoObject) {
        console.log(this.length);
        for (let i = 0; i < (this.length); i++) {
            const item = this.list[i];
            if (item.toString() == todoObject.toString()) {
                this.list.splice(i, 1);
            }
        }
    }
}

export {projectList};