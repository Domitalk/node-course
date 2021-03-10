const fs = require('fs')

// const book = {
//     title: 'A Wrinkle in Time', 
//     author: 'Madeline L`engle'
// }

// const bookJSON = JSON.stringify(book)
// console.log(bookJSON)

// const parseData = JSON.parse(bookJSON)
// console.log(parseData.author)

// fs.writeFileSync('1-json.json', bookJSON) 

const dataBuffer = fs.readFileSync('1-json.json')
const dataJSON = dataBuffer.toString() 
const data = JSON.parse(dataJSON)
console.log(data.title)
