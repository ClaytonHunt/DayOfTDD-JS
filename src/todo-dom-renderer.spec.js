import {TodoItem} from "./models/todo-item";
import {TodoDOMRenderer} from "./todo-dom-renderer";

describe('Todo DOM Renderer', () => {
  describe('In General', () => {
    it('exists', () => {
      expect(TodoDOMRenderer).toBeDefined();
    });

    it('can be constructed', () => {
      let renderer = new TodoDOMRenderer();

      expect(renderer instanceof TodoDOMRenderer).toBe(true);
    });
  });

  describe('After Instantiation', () => {
    let renderer;
    let domList;

    beforeEach(() => {
      domList = document.createElement('ul');
      domList.classList.add('todo-list');

      renderer = new TodoDOMRenderer(domList);
    });

    describe('Render', () => {
      it('exist', () => {
        expect(renderer.render).toBeDefined();
      });
    });

    it('it updates core dom element', () => {
      // act
      renderer.render([new TodoItem(1, 'Test Item')]);

      // assert

      /*<li data-id="1503089590499" class="completed">
        <input class="toggle" type="checkbox" checked>
      <label>Write a failing test</label>
      <button class="destroy"></button>
        </li>*/

      expect(domList.outerHTML).toBe('<ul class="todo-list"><li data-id="1"><input class="toggle" type="checkbox"><label>Test Item</label><button class="destroy"></button></li></ul>');
    });
  });
});