export class TodoList {
  constructor(renderer) {
    this.renderer = renderer;

    this.items = [];

    this.renderer.render(this.items);
  }

  add(value) {
    this.items.push(value);
    this.renderer.render(this.items);
  }

  complete(id) {
    let item = this.items.filter((i) => {
      return i.id === id;
    })[0];

    item.markComplete();

    this.renderer.render(this.items);
  }

  clearCompleted() {
    this.items = this.items.filter(i => {
      return !i.complete;
    });

    this.renderer.render(this.items);
  }
}