
const fs = require('fs');

/* //Write data using JSON
const book = {
    title: 'Ego is the Enemy',
    author: 'Ryan'
};

const bookJSON = JSON.stringify(book);

fs.writeFileSync('1-json.json', bookJSON)*/


/* //Read Data
const dataBuffer = fs.readFileSync('1-json.json');

console.log(dataBuffer);

const dataJSON = dataBuffer.toString();

const data = JSON.parse(dataJSON);

console.log(data)*/

// Over Ride Challange

const person = {
    name: "Johnny",
    planet: "Earth",
    age: 30
};

const personJSON = JSON.stringify(person);

fs.writeFileSync('1-json.json', personJSON)