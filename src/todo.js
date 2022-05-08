import { format } from 'date-fns';

class todoItem { 
    constructor(title, description, dueDate, priority, completed = false) {
        this.title = title;
        this.description = description;
        this.dueDate = dueDate;
        if (this.dueDate == false) this.dueDate = format(new Date(), 'yyyy-MM-dd');
        this.priority = priority;
        this.completed = completed;
    }

    set title(title) {
        this._title = title;
    }

    set description(description) {
        this._description = description;
    }

    set dueDate(dueDate) {
        this._dueDate = dueDate;
    }

    set priority(priority) {
        this._priority = priority;
    }

    set completed(completed) {
        this._completed = completed;
    }

    get title() {
        return this._title;
    }

    get description() {
        return this._description;
    }

    get dueDate() {
        return this._dueDate;
    }

    get priority() {
        return this._priority;
    }

    get completed() {
        return this._completed;
    }

}

export {
    todoItem,
}