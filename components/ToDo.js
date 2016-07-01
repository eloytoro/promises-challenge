var Component = require('./Component');
var $ = require('jquery');

class ToDo extends Component {
  constructor(params) {
    super(params);
    this.text = params.text;
    this.done = params.done;
    this.index = params.index;
    this.onDone = params.onDone;
    this.onRemove = params.onRemove;
    this.onSave = params.onSave;
  }

  getContents() {
    var done = $('<button />');
    done.html('Done');
    done.on('click', () => {
      this.onDone(this.index);
    });

    var remove = $('<button />');
    remove.html('Remove');
    remove.on('click', () => {
      this.onRemove(this.index);
    });

    var save = $('<button />');
    save.html('Save');
    save.on('click', () => {
      this.onSave(this.index);
    });

    var input = $('<input type="text" />');
    input.attr({
      disabled: this.done
    });
    input.val(this.text);

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
