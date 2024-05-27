import knexfile from './knexfile.js'
import knex from 'knex'

const db = knex(knexfile.development)

export function getTodos() {
  return db('todos').select()
}

// Your DB functions go here
export function close() {
  db.destroy()
}

export async function deleteRow(id) {
  return await db('todos').where('id', id).del()
}

export async function addRow(data) {
  return await db('todos').insert({ task: data })
}

export async function updateRow(id, data) {
  return await db('todos').where('id', id).update('task', data)
}
