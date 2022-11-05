const todoInput = document.querySelector('.todoInput');

const todoBtn = document.querySelector('.todoBtn');
todoBtn.addEventListener("click", addTodo);

function addTodo(event) {
  event.preventDefault();

  const todoDiv = document.createElement("div");
  todoDiv.classList.add("todo");
  const newTodo = document.createElement("li");
  newTodo.innerText = todoInput.value;
  todoInput.value = "";
  todoDiv.appendChild(newTodo);
  todoList.appendChild(todoDiv);
}

const todoList = document.querySelector('.todoList');
todoList.addEventListener("click", deleteCheck);

const clickTexto = document.querySelector ('.todoList')
$(clickTexto).click(function(){
$(clickTexto).css("text-decoration", "line-through");
})

