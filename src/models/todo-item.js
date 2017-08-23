export class TodoItem {
  constructor(id, task) {
    this._id = id;
    this._task = task;
    this._complete = false;
  }

  get id() {
    return this._id;
  }

  get task() {
    return this._task;
  }

  get complete() {
    return this._complete;
  }

  markComplete() {
    this._complete = true;
  }
}