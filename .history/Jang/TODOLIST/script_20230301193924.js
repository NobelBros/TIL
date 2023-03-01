const form = document.getElementById('form')
const input = document.getElementById('input')
const todoUL = document.getElementById('todos')

form.addEventListener((event) => {
  event.preventDefault()

  addTodo()
})

function addTodo(todo) {
  let todoText = input.value

  if (todo) {
    todoText = todo.text
  }

  if (todoText) {
    const todoEl = document.createElement('li')
    if (todo && todo.completed) {
      todoEl.classList.add('completed')
    }

    todoEl.innerText = todoText

    todosUL.appendChild(todoEl)

    input.value = ''
  }
}
