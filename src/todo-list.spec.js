import {TodoList} from "./todo-list";
import {TodoItem} from "./models/todo-item";

class SpyRenderEngine {
  constructor() {
    this._renderCallCount = 0;
  }

  get renderCallCount() {
    return this._renderCallCount;
  }

  render() {
    this._renderCallCount++;
  }
}

describe('Todo List', () => {
  describe('In General', () => {
    it('exist', () =>{
      expect(TodoList).toBeDefined();
    });
  });

  describe('After Initialization', () => {
    let todo;
    let spyRenderer;

    beforeEach(() => {
      spyRenderer = new SpyRenderEngine();
      todo = new TodoList(spyRenderer);
    });

    it('renders on construction', () => {
      expect(spyRenderer.renderCallCount).toBe(1);
    });

    describe('Add Item', () => {
      it('exists', () => {
        expect(todo.add).toBeDefined();
      });

      it('actually adds an item', () => {
        // act
        todo.add(new TodoItem(1, 'item'));

        // assert
        expect(todo.items.length).toBe(1);
      });

      it('adds the correct item', () => {
        // act
        todo.add(new TodoItem(1, 'item'));

        // assert
        expect(todo.items[0].task).toEqual('item');
      });

      it('updates rendered items', () => {
        // act
        todo.add(new TodoItem(1, 'item'));

        // assert
        expect(spyRenderer.renderCallCount).toBe(2);
      });
    });

    describe('Complete Task', () => {
      it('exists', () => {
        expect(todo.complete).toBeDefined();
      });

      it('completes the item', () => {
        // arrange
        todo.add(new TodoItem(1, 'item'));
        // act
        todo.complete(1);
        // assert
        expect(todo.items[0].complete).toBe(true);
      });

      it('updates rendered items', () => {
        // arrange
        todo.add(new TodoItem(1, 'item'));

        // act
        todo.complete(1);

        // assert
        expect(spyRenderer.renderCallCount).toBe(3);
      });
    });

    describe('Clear Completed', () => {
      it('exist', () => {
        expect(todo.clearCompleted).toBeDefined();
      });

      it('it removes completed items', () => {
        // arrange
        todo.add(new TodoItem(1, 'item'));
        todo.complete(1);

        // act
        todo.clearCompleted();

        // assert
        expect(todo.items.length).toBe(0);
      });

      it('does not remove uncomplete items', () => {
        // arrange
        todo.add(new TodoItem(1, 'item1'));
        todo.add(new TodoItem(2, 'item2'));
        todo.complete(1);

        // act
        todo.clearCompleted();

        // assert
        expect(todo.items.length).toBe(1);
        expect(todo.items[0].task).toBe('item2');
      });

      it('updates rendered items', () => {
        // act
        todo.clearCompleted();

        // assert
        expect(spyRenderer.renderCallCount).toBe(2);
      });
    });
  });
});