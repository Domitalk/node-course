const fs = require('fs')
// a core module is built into node 

fs.writeFileSync('notes.txt', 'My name is Dom')
// this won't work without loading fs first 

