import "./style.css";
import {TodoList} from "./todo-list"
import {TodoDOMRenderer} from "./todo-dom-renderer";
import {TodoItem} from "./models/todo-item";

(() => {
  let body = document.body;
  let newTodo = document.querySelector('.new-todo');
  let list = document.querySelector('.todo-list');

  let renderer = new TodoDOMRenderer(list);
  let todo = new TodoList(renderer);

  body.onkeyup = (e) => {
    if(e.srcElement === newTodo) {
      if(e.key === "Escape") {
        newTodo.value = '';
      }

      if(e.key === "Enter") {
        todo.add(new TodoItem(1, newTodo.value));
        newTodo.value = '';
      }
    }
  };
})();