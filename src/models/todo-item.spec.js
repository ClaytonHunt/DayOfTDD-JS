import {TodoItem} from "./todo-item";

describe('Todo Item', () => {
  it('exists', () => {
    expect(TodoItem).toBeDefined();
  });

  describe('Id', () => {
    it('exists', () => {
      // arrange
      let item = new TodoItem(1, 'item');

      // assert
      expect(item.id).toBeDefined();
    });

    it('it is populated from the constructor', () => {
      // arrange
      let item = new TodoItem(1, 'item');

      // assert
      expect(item.id).toBe(1);
    });
  });

  describe('Task', () => {
    it('exists', () => {
      // arrange
      let item = new TodoItem(1, '');

      // assert
      expect(item.task).toBeDefined();
    });

    it('is populated from constructor', () => {
      // arrange
      let item = new TodoItem(1, 'test value');

      // assert
      expect(item.task).toBe('test value');
    });
  });

  describe('Complete', () => {
    it('exits', () => {
      // arrange
      let item = new TodoItem(1, 'item');

      // assert
      expect(item.complete).toBe(false);
    });
  });

  describe('Mark Complete', () => {
    it('exists', () =>{
      let item = new TodoItem(1, 'item');
      expect(item.markComplete).toBeDefined();
    });

    it('marks it complete', () => {
      let item = new TodoItem(1, 'item');
      item.markComplete();
      expect(item.complete).toBe(true);
    });
  });
});