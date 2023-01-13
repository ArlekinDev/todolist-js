// вешаем событие для отрисовки удаления задания
todosWrapper.addEventListener("click", deleteTodos)

// функция
function deleteTodos(e) {

  // если таргет не равен нашему ("delete"), то функция завершит свою работу
  if (e.target.dataset.action !== "delete") return

  const parentWrapper = e.target.closest(".body-todo-todos--todo")

  // ловля id удаленноно элемениа
  const parentId = Number(parentWrapper.dataset.id)

  // удаление задач с массива
  todos = todos.filter((todo) => todo.id !== parentId)

  // отрисовка удаления задания
  parentWrapper.remove()

  // запускаем отрисовку пустой таблички
  showEmptyPlate()

   // сохранение данных в localStorage
   saveToLocal()

}