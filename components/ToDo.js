var Component = require('./Component');
var $ = require('jquery');
var api = require('../api');

class ToDo extends Component {
  constructor(params) {
    super(params);
    this.todo = params.todo;
    this.index = params.index;
    this.onRemove = params.onRemove;
  }

  getContents() {
    var done = $('<button />');
    done.html('Done');
    done.on('click', () => {
      api.markDone(this.index).then(todo => {
        this.todo.done = todo.done;
        this.update();
        console.log(todo.done);
      });
    });

    var remove = $('<button />');
    remove.html('Remove');
    remove.on('click', () => {
      this.onRemove(this.index);
    });

    var input = $('<input type="text" />');
    input.attr({
      disabled: this.todo.done
    });
    input.val(this.todo.text);


    var save = $('<button />');
    save.html('Save');
    save.on('click', () => {
      api.changeTodo(this.index, input.val()).then(todo => {
        this.todo.text = todo.text;
        this.update();
      });
    });


    return [
      input,
      save,
      done,
      remove
    ];
  }

  draw() {
    return $('<li />');
  }
};

module.exports = ToDo;
