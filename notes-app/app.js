// 1
// const fs = require('fs')
// a core module is built into node 

// fs.writeFileSync('notes.txt', 'My name is Dom')
// this won't work without loading fs first 


// Challenge: Append a message to notes.txt 

// Use appendFileSync to the file 
// Run the script 
// Check file for changes 

// fs.appendFileSync('notes.txt', ' appended text')


// 2 
// const add = require('./utils.js')

// const sum = add(4, -2)

// console.log(sum) 


// 3 
// Challenge: Define and use a func in a new file 
// 1. Create a new file 'notes.js'
// 2. Create getNotes func that returns 'Your notes...'
// 3. Export getNotes func 
// 4. From app.js load in and call func printing msg to console 

const getNotes = require('./notes.js')
const msg = getNotes() 
console.log(msg) 