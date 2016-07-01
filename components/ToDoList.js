var Component = require('./Component');
var ToDo = require('./ToDo');
var $ = require('jquery');
var api = require('../api');

class ToDoList extends Component {
  constructor(params) {
    super(params);
    this.todos = [];
  }

  refresh() {
    api.getTodos().then(todos => {
      this.todos = todos;
      this.update();
    });
  }

  handleDone() {
    // ...
  }

  handleSave() {
    // ...
  }

  handleRemove() {
    // ...
  }

  handleAdd() {
    api.addTodo().then((todo) => {
      // ...
    });
  }

  getContents() {
    var button = $('<button />');
    button.html('Add One');
    button.on('click', () => this.handleAdd());

    return [].concat(
      this.todos.map((todo, index) => {
        return new ToDo({
          text: todo.text,
          done: todo.done,
          index: index,
          onDone: (index) => {
            this.handleDone(index);
          },
          onSave: (index) => {
            this.handleSave(index);
          },
          onRemove: (index) => {
            this.handleRemove(index);
          }
        })
      }),
      button
    );
  }

  draw() {
    return $('<ul />');
  }
};

module.exports = ToDoList;
