const init = function () {
  const button = document.querySelector('button');
  button.addEventListener('click', handleButtonClick);

  const todosArray = JSON.parse(localStorage.getItem('todoList')) || [];
  populate(todosArray);
}

const populate = function (todos) {
  // this function needs to:
  // - loop through the array of todos, invoking addItem() for each todo item
}

const addItem = function (item) {
  const ul = document.querySelector('#todo-list');
  // this function needs to:
  // - create an li element containing the string 'item'
  // - append the li to the "todo-list" ul
}

const handleButtonClick = function () {
  // this function needs to:
  // - get hold of the input box's value
  // - append it to the "todo-list" ul by invoking addItem()
  // - add it to local storage by invoking save()
}

const save = function (newItem) {
  // this function needs to:
  // - get the data back from local storage and parse to an array
  // - add the newItem to the array
  // - stringify the updated array
  // - save it back to localstoage
}

document.addEventListener("DOMContentLoaded", app);
