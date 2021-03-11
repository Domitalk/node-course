// 5. using argv 
const chalk = require('chalk')
const yargs = require('yargs')

const notes = require('./notes.js')

// console.log(yargs.command)
// node app.js add --title="titleName" 
yargs.command({
    command: 'add',
    describe: 'adding a note', 
    builder: {
        title: {
            describe: 'Note title',
            demandOption: true, 
            type: 'string'
        }, 
        body: {
            describe: 'Note Body', 
            demandOption: true, 
            type: 'string'
        }
    }, 
    handler(argv) {
        // console.log('Title: ' + argv.title)
        // console.log('Body: ' + argv.body)
        notes.addNote(argv.title, argv.body)
    }
})

// Challenge: setup command option and function 

// 1. setup the remove command to take a req title 
// 2. create and export removeNote func from notes.js 
// 3. call removeNote in remove command handler 
// 4. have removeNote log the title of the note that was removed 
// 5. test your work 

// create a remove command 
yargs.command({
    command: 'remove', 
    describe: 'removing a note', 
    builder: {
        title: {
            describe: 'Note title',
            demandOption: true, 
            type: 'string'
        }
    },
    handler(argv) {
        notes.removeNote(argv.title)
        // console.log('Removing a note!')
    }
})

// list command 
// 1. create and export listNotes from notes.js
//  - "Your notes" using chalk
//  - Print note title for each note 
// 2. call listNotes from command handler 
// 3. test 

yargs.command({
    command: 'list', 
    describe: 'list notes',
    handler() {
        notes.listNotes()
        // console.log(`Listing notes!`)
    }
})

// read command 
yargs.command({
    command: 'read', 
    describe: 'read notes', 
    handler() {
        console.log('Reading notes!')
    }
})

yargs.parse()



// yargs 
// node app.js --title="Hey" 
// yargs.argv = { _: [], title: 'Hey', '$0': 'app.js' }

// const command = process.argv[2]

// console.log(process.argv)

// if (command === 'add') {
//     console.log('Adding note!')
// } else if (command === 'remove') {
//     console.log('Removing note!')
// }



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