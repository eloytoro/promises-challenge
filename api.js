var storage = {
  todos: [{
    text: 'hacer el challenge',
    done: false
  }, {
    text: 'hacerlo bien',
    done: false
  }, {
    text: 'entender promises',
    done: false
  }]
};

export function getTodos() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(storage.todos);
    }, 100);
  });
}

export function changeTodo(index, text) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      var todo = starge.todos[index];
      if (!todo) {
        reject(new Error('No such ToDo!'));
      }
      todo.text = text;
      resolve(todo);
    }, 100);
  });
}

export function addTodo() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      var todo = { done: false, text: '' };
      storage.todos.push(todo);
      resolve(todo);
    }, 100);
  });
}

export function markDone(index) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      var todo = starge.todos[index];
      if (!todo) {
        reject(new Error('No such ToDo!'));
      }
      todo.done = true;
      resolve(todo);
    }, 100);
  });
}

export function deleteTodo(index) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      var todo = starge.todos[index];
      if (!todo) {
        reject(new Error('No such ToDo!'));
      }
      storage.todos.splice(index, 1);
      resolve(storage.todos);
    }, 100);
  });
}
