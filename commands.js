import {
  getTodos,
  close,
  deleteRow,
  addRow,
  updateRow,
  searchTable,
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
    console.info(`${todo.id}: ${todo.task}`)
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
    const todos = await searchTable(data)
    printTodos(todos)
  } catch (err) {
    logError(err)
  } finally {
    close()
  }
}
