var ToDoList = require('./components/ToDoList');
var $ = require('jquery');

var app = new ToDoList();

app.mount($('#root'));
