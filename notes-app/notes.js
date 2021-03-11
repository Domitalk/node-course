const fs = require('fs')

const getNotes = function () {
    return 'Your notes...'
}; 

const addNote = function (title, body) {
    const notes = loadNotes()
    const duplicateNotes = notes.filter(function (note) {
        return note.title === title 
    })
    
    if (duplicateNotes.length === 0) {
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

// 2. create and export removeNote func from notes.js 
const removeNote = function (title) {
    const notes = loadNotes() 
    const filteredNotes = notes.filter(function (note) {
        return note.title !== title 
    })

    if (filteredNotes.length !== notes.length) {
        saveNotes(filteredNotes)
        console.log('Removed a note!')
    } else {
        console.log('There is no note with that title')
    }
}




// helpers 

const saveNotes = function (notes) {
    const dataJSON = JSON.stringify(notes)
    fs.writeFileSync('notes.json', dataJSON)
}

const loadNotes = function () {
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
    removeNote
}
 