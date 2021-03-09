// 5. using argv 
const chalk = require('chalk')
const yargs = require('yargs/yargs')
const { hideBin } = require('yargs/helpers')

const getNotes = require('./notes.js')

// yargs 
// node app.js --title="Hey" 
// yargs.argv = { _: [], title: 'Hey', '$0': 'app.js' }

// const command = process.argv[2]

// console.log(process.argv)
// console.log(yargs.argv)

// if (command === 'add') {
//     console.log('Adding note!')
// } else if (command === 'remove') {
//     console.log('Removing note!')
// }

// yargs.version('1.1.0')

yargs(hideBin(process.argv))
    .command(
        'add',
        'Add a note',
        () => {console.log('Adding a note!')}
    )

// yargs.command({
//     command: 'remove', 
//     describe: 'Remove a note', 
//     handler: function () {
//         console.log('Removing the note')
//     }
// })

// console.log(process.argv[2])



// 4. 
// Challenge: use the chalk lib 

// 1. install ver 2.4.1 of chalk 
// 2. load chalk into app.js 
// 3. use it to print the string 'Success!' to the console in green 
// 4. test work 
// bonus: use docs to mess with other styles, make text bold and inversed  

// const chalk = require('chalk'); 

// console.log(chalk.green.bold.inverse('Success!'))



// 3 
// Challenge: Define and use a func in a new file 
// 1. Create a new file 'notes.js'
// 2. Create getNotes func that returns 'Your notes...'
// 3. Export getNotes func 
// 4. From app.js load in and call func printing msg to console 

// const validator = require('validator') 

// import validator from 'validator';
// import requires a little more work 
//
// FIGURE THIS OUT 
//

// const getNotes = require('./notes.js')
// const msg = getNotes() 

// console.log(validator.isEmail('dominic.m.chu@gmail.com'))



// 2 
// const add = require('./utils.js')

// const sum = add(4, -2)

// console.log(sum) 



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