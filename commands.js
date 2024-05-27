import {
  getTodos,
  close,
  deleteRow,
  addRow,
  updateRow,
  searchTable,
  updateCompleted,
} from './db.js'

export async function list() {
  try {
    const todos = await getTodos()
    printTodos(todos)
  } catch (err) {
    logError(err)
  } finally {
    close()
  }
}

function printTodos(todos) {
  todos.forEach((todo) => {
    console.info(`${todo.id}: ${todo.task}: ${todo.completed}`)
  })
}

function logError(err) {
  console.error('Uh oh!', err.message)
}

export async function deleteTodo(id) {
  try {
    await deleteRow(Number(id))
    await list()
  } catch (err) {
    logError(err)
  } finally {
    close()
  }
}

export async function addTodo(data) {
  try {
    await addRow(data)
  } catch (err) {
    logError(err)
  } finally {
    close()
  }
}

export async function updateTodo(id, data) {
  try {
    await updateRow(id, data)
  } catch (err) {
    logError(err)
  } finally {
    close()
  }
}

export async function searchTodo(data) {
  try {
    const todo = await searchTable(data)
    printTodos(todo)
  } catch (err) {
    logError(err)
  } finally {
    close()
  }
}

export async function updateCompletedTodo(id, data) {
  try {
    const todos = await updateCompleted(id, data)
    console.log(todos)
  } catch (err) {
    logError(err)
  } finally {
    close()
  }
}
