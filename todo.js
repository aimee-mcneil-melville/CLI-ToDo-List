#!/usr/bin/env node
import * as commands from './commands.js'

const userInputs = process.argv
console.log(userInputs)
const cmd = userInputs[2]
const value = userInputs[3]
const input = userInputs[3]
switch (cmd) {
  case 'list':
    await commands.list()
    break
  case 'delete':
    await commands.deleteTodo(value)
    break
  case 'add':
    await commands.addTodo(input)
    break

  default:
    console.log(`I don't understand that command: ${cmd}`)
}
