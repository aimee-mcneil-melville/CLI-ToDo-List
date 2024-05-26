/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export async function seed(knex) {
  // Deletes ALL existing entries
  await knex('todos').del()
  await knex('todos').insert([
    { id: 1, task: 'Make sandwhich' },
    { id: 2, task: 'Start fire' },
    { id: 3, task: 'Do trellos' },
  ])
}
