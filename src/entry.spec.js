
class TodoList {
  constructor() {
    this.items = [];
  }

  add(value) {
    this.items.push(value);
  }

  complete(taskName) {
    let item = this.items.filter((i) => {
      return i.task === taskName;
    })[0];

    item.markComplete();
  }
}

class TodoItem {
  constructor(task) {
    this._task = task;
    this._complete = false;
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

describe('Todo App', () => {
  it('exist', () =>{
    expect(TodoList).toBeDefined();
  });

  describe('Add Item', () => {
    let todo;

    beforeEach(() => {
      todo = new TodoList();
    });

    it('exists', () => {
      expect(todo.add).toBeDefined();
    });

    it('actually adds an item', () => {
      // act
      todo.add(new TodoItem('item'));

      // assert
      expect(todo.items.length).toBe(1);
    });

    it('adds the correct item', () => {
      // act
      todo.add(new TodoItem('item'));

      // assert
      expect(todo.items[0].task).toEqual('item');
    });
  });

  describe('Complete Task', () => {
    let todo;

    beforeEach(() => {
      todo = new TodoList();
    });

    it('exists', () => {
      expect(todo.complete).toBeDefined();
    });

    it('completes the item', () => {
      // arrange
      todo.add(new TodoItem('item'));
      // act
      todo.complete('item');
      // assert
      expect(todo.items[0].complete).toBe(true);

    });
  });

  describe('Todo Item', () => {
    it('exists', () => {
      expect(TodoItem).toBeDefined();
    });

    describe('task', () => {
      it('exists', () => {
        // arrange
        let item = new TodoItem('');

        // assert
        expect(item.task).toBeDefined();
      });
    });

    describe('complete', () => {
      it('exits', () => {
        // arrange
        let item = new TodoItem('item');

        // assert
        expect(item.complete).toBe(false);
      });
    });

    describe('Mark Complete', () => {
      it('exists', () =>{
        let item = new TodoItem('item');
        expect(item.markComplete).toBeDefined();
      });

      it('marks it complete', () => {
        let item = new TodoItem('item');
        item.markComplete();
        expect(item.complete).toBe(true);
      });
    });
  });
});