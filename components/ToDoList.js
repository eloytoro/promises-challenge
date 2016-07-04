var Component = require('./Component');
var ToDo = require('./ToDo');
var $ = require('jquery');
var api = require('../api');

class ToDoList extends Component {
  constructor(params) {
    super(params);
    this.todos = [];
    api.getTodos().then(todos => {
      this.todos = todos;
      this.update();
    });
  }

  handleRemove(index) {
    api.deleteTodo(index).then(todos => {
      this.todos = todos;
      this.update();
    });
  }

  handleAdd() {
    api.addTodo().then(todo => {
      this.todos.push(todo);
      this.update();
    });
  }

  getContents() {
    var button = $('<button />');
    button.html('Add One');
    button.on('click', () => this.handleAdd());

    return [].concat(
      this.todos.map((todo, index) => {
        return new ToDo({
          todo: todo,
          index: index,
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
