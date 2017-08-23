export class TodoDOMRenderer {
  constructor(rootDOMElement) {
    this._dom = rootDOMElement;
  }

  render(listItems) {
    /*<li data-id="1503089590499" class="completed">
     <input class="toggle" type="checkbox" checked>
     <label>Write a failing test</label>
     <button class="destroy"></button>
     </li>*/

    let renderedItems = listItems.map((i) => {
      let toggle = document.createElement('input');
      toggle.classList.add('toggle');
      toggle.setAttribute('type', 'checkbox');

      let task = document.createElement('label');
      task.innerText = i.task;

      let destroy = document.createElement('button');
      destroy.classList.add('destroy');

      let item = document.createElement('li');
      item.dataset.id = i.id;
      item.appendChild(toggle);
      item.appendChild(task);
      item.appendChild(destroy);

      return item;
    });

    while(this._dom.lastChild) {
      this._dom.removeChild(this._dom.lastChild);
    }

    renderedItems.forEach((i) => {
      this._dom.appendChild(i);
    });
  }
}