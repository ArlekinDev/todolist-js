// константы для работы для списка задач
const form = document.querySelector("form"),
    createInput = document.querySelector(".footer-create-todos--input"),
    dataOfTodo = document.querySelector(".footer-create-todos--date"),
    todosWrapper = document.querySelector(".body-todo--todos"),
    emptyWrapp = document.querySelector(".body-todo--empty")
bodyTodo = document.querySelector(".body-todo")


// массив для localStorage
let todos = [];

// получаем данные с localStorage
if(localStorage.getItem("todos")) {
    todos = JSON.parse(localStorage.getItem("todos"))
    todos.forEach(todo => renderTodo(todo))
}

// запускаем отрисовку пустой таблички
showEmptyPlate()

// cобытие
form.addEventListener("submit", addTodo)

// функция
function addTodo(e) {
    // обнуляем базовую работу формы
    e.preventDefault()

    // получаем данные 
    const todosObj = {
        text: createInput.value,
        date: dataOfTodo.value == "" ? new Date().toLocaleDateString() : dataOfTodo.value,
        id: Number(Math.random().toString().substr(2, 6)),
        done: false
    }

    // Добавление обьекта с данными в массив
    todos.push(todosObj)

    // сохранение данных в localStorage
    saveToLocal()

    renderTodo(todosObj)

    // обнуляем значения инпута после добавления элемента
    createInput.value = null
    createInput.focus()

    // запускаем отрисовку пустой таблички
    showEmptyPlate()

}

// отрисовка пустой таблички
function showEmptyPlate() {
    // создаем табличку
    if (todos.length === 0) {
        const emptyPlateElement = `
        <div class="body-todo--empty">
            <span class="body-todo-empty--title">Cписок дел пуст  =(</span>
        </div>
        `
        bodyTodo.insertAdjacentHTML("afterbegin", emptyPlateElement)
    }

    // удаляем табличку
    if (todos.length > 0) {
        const emptyCreatedPlate = document.querySelector(".body-todo--empty")
        emptyCreatedPlate ? emptyCreatedPlate.remove() : null;
    }
}

// сохранение данных в localStorage
function saveToLocal () {
    return localStorage.setItem("todos", JSON.stringify(todos))
}

function renderTodo (todo) {
  
    // формируем css класс
    const cssClass = todo.done ? "done" : "body-todo-todos--todo--title"

    // формируем наш список с задачае
    const todoHtml = `
    <div class="body-todo-todos--todo" data-id=${todo.id}>
        <div class="todo-input-items">
            <span class=${cssClass}>${todo.text}</span>

            <span class="body-todo-todos--todo--date">${todo.date}</span>
        </div>

        <div class="body-todo-todos--todo-btn-wrapper">
            <div data-action="done" class="body-todo-todos--todo-btn-wrapper--btn">
                <img src="./images/tick.svg" alt="icon">
            </div>
            <div data-action="delete"  class="body-todo-todos--todo-btn-wrapper--btn">
                <img src="./images/cross.svg" alt="icon">
            </div>
        </div>
    </div>
    `

    // добавляем спиксок задач
    todosWrapper.insertAdjacentHTML("beforeend", todoHtml)
}