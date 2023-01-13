// вешаем событие для отрисовки того что задание выполнено
todosWrapper.addEventListener("click", doneTodos)

// функция
function doneTodos(e) {

    // если таргет не равен нашему ("done"), то функция завершит свою работу
    if (e.target.dataset.action !== "done") return

    const parentWrapper = e.target.closest(".body-todo-todos--todo")

    // ловля id выбранного элемениа
    const parentId = Number(parentWrapper.dataset.id)

    // находим нажатый обьект
    let currentTodos = todos.find((todo) => todo.id === parentId)

    // тогглер выполненного задания
    currentTodos.done = !currentTodos.done

     // сохранение данных в localStorage
     saveToLocal()

    // отрисовка выполненного задания
    return parentWrapper.querySelector(".body-todo-todos--todo--title").classList.toggle("done")

}