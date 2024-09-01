const getNotes = require('./notes.js')
const massage = getNotes()
console.log(massage)





const Myname = 'Adekola'
console.log(Myname)

// const firstname = require('./utils')
// console.log(firstname)

// console.log(addition)
const addition = require('./utils.js')
const sum = addition(5, +2)
console.log(sum)

const fs = require('fs')

fs.writeFileSync('notes.txt', 'This file is created with node.js!')

fs.appendFileSync('notes.txt', ' My name is Yakub.')

fs.appendFileSync('notes.txt', ' Am about  to learn more about node.js.')

fs.appendFileSync('notes.txt',  ' I live in kwara.')
