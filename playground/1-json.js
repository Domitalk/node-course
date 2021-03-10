// Challenge: work with json and the fs 

// 1. load and parse the json data
// 2. change the name and age prop using your info
// 3. stringify the changed object and overwrite the original data
// 4. test your work by viewing data in the json file 

const fs = require('fs'); 

let personInfoJS = JSON.parse(fs.readFileSync('1-json.json').toString())

personInfoJS.name = 'Dominic';
personInfoJS.age = 35; 

const personInfoJSON = JSON.stringify(personInfoJS)

fs.writeFileSync('1-json.json', personInfoJSON) 



// const fs = require('fs')

// // js object 
// const book = {
//     title: 'A Wrinkle in Time', 
//     author: 'Madeline L`engle'
// }

// // convert js object into JSON 
// // aka the object key is also a string 
// const bookJSON = JSON.stringify(book)
// console.log(bookJSON)

// // convert the JSON back into js object 
// const parseData = JSON.parse(bookJSON)
// console.log(parseData.author)

// // in order to write use JSON for .json file 
// fs.writeFileSync('1-json.json', bookJSON) 

// // when reading from .json, .readFileSync doesn't give readable format
// // must .toString() in order to get a readable JSON 
// // then parse that JSON to JS to use standard JS key value pairs 
// const dataBuffer = fs.readFileSync('1-json.json')
// const dataJSON = dataBuffer.toString() 
// const data = JSON.parse(dataJSON)
// console.log(data.title)


