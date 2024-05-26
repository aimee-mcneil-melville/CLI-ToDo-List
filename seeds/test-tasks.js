/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export async function seed(knex) {
  // Deletes ALL existing entries
  await knex('todos').del()
  await knex('todos').insert([
    { id: 1, tasks: 'Make sandwhich' },
    { id: 2, tasks: 'Start fire' },
    { id: 3, tasks: 'Do trellos' },
  ])
}
