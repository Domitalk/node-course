const fs = require('fs')
const chalk = require('chalk')


const getNotes = () => {
    return 'Your notes...'
}; 

const addNote = (title, body) => {
    const notes = loadNotes()

    // const duplicateNotes = notes.filter((note) => note.title === title)

    // changed to stop iteration once a match is found
    const duplicateNote = notes.find((note) => note.title === title)
    
    if (!duplicateNote) {
        notes.push({
            title, 
            body
        })
        saveNotes(notes)
        console.log('New note added')
    } else {
        console.log('Note title already taken')
    }
}

const removeNote = (title) => {
    const notes = loadNotes() 
    const filteredNotes = notes.filter((note) => note.title !== title)

    if (filteredNotes.length !== notes.length) {
        saveNotes(filteredNotes)
        console.log('Removed a note!')
    } else {
        console.log('There is no note with that title')
    }
}

const listNotes = () => {
    const notes = loadNotes() 
    console.log(chalk.blue("Your notes"))
    notes.forEach((note) => {
        console.log(chalk.red(note.title))
    })
}
// 2. create readNote in notes.js
//  - Search for note by title 
//  - Find note and print title(styled) and body(plain) 
//  - No note found? Print error in red

const readNote = (title) => {
    const notes = loadNotes() 
    const targetNote = notes.find((note) => note.title === title)
    if (targetNote) {
        console.log(chalk.inverse(targetNote.title))
        console.log(targetNote.body)
    } else {
        console.log(chalk.red("There wasn't a note with that title"))
    }
}


// helpers 

const saveNotes = (notes) => {
    const dataJSON = JSON.stringify(notes)
    fs.writeFileSync('notes.json', dataJSON)
}

const loadNotes = () => {
    try {
        const dataBuffer = fs.readFileSync('notes.json')
        const dataJSON = dataBuffer.toString()
        return JSON.parse(dataJSON)    
    } catch (e) {
        return []
    }
}

module.exports = {
    getNotes, 
    addNote, 
    removeNote, 
    listNotes, 
    readNote
}
 