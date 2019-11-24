const fs = require('fs')
const chalk = require('chalk')

const readNote = (title) => {
    const notes = loadNotes();
    const note = notes.find((note) => note.title === title);
    if (note){
        console.log(chalk.green(note.title)) 
        } else {
            console.log(chalk.yellow('Note not found'))
        };
}

const listNotes = () => {
    const notes = loadNotes();
    notes.forEach((note) => {
        const noteTitle = note.title;
    })
    
}


const addNote = (title, body) => {
    const notes = loadNotes();
    const duplicationNote = notes.find((note) => notes.title === title)

    if (!duplicationNote){
    notes.push({
        title: title,
        body: body
    })
    saveNotes(notes)
    console.log(chalk.green('Success')) 
    } else {
        console.log(chalk.yellow('Note not taken : Duplicate'))
    };
}


const deleteNote = (title) => {
    const notes = loadNotes();
    const notesToKeep = notes.filter(function (note){
        return note.title !== title
    });
    console.log(chalk.red('Note Deleted'));
    saveNotes(notesToKeep)
    // Replaces the selected notes array, returns new array with out selected
    
}


const saveNotes = (notes) => {
    const dataJSON = JSON.stringify(notes);
    fs.writeFileSync('notes.json', dataJSON)
}


const loadNotes = () => {
    try {
    const dataBuffer = fs.readFileSync('notes.json');
    const dataJSON = dataBuffer.toString();
    return JSON.parse(dataJSON);
    } catch (e) {
        return []
    }
}

module.exports = {
    addNote: addNote,
    deleteNote: deleteNote,
    listNotes: listNotes,
    readNote: readNote
}