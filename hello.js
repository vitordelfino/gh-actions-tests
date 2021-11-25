const fs = require('fs');

const json = fs.readFileSync('./users.json')

console.log('Hello', process.env.USERNAME);
console.log('json', json)