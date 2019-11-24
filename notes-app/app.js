const validator = require('validator');
const chalk = require('chalk');
const yargs = require('yargs');


const notes = require('./notes.js');

yargs.parse();
//Create Note
yargs.command({
  command: 'add',
  describe: 'Add a Note',
  builder: {
      title: {
        describe: 'Note Title',
        type: 'string'
      },
      body: {
        describe: 'Note Body',
        type: 'string'
      }
  },
  handler: function(argv){
    notes.addNote(argv.title, argv.body);
  }
});

//Remove
yargs.command({
  command: 'remove',
  describe: 'Remove a Note',
  builder: {
    title: {
      type: 'string'
    }
  },
  handler: function(argv){
    notes.deleteNote(argv.title)
  }
});

//Read Note
yargs.command({
  command: 'read',
  describe: 'Read a Note',
  builder: {
    title: {
      type: 'string'
    }
  },
  handler: function(argv){
    notes.readNote(argv.title)
  }
});

//List
yargs.command({
  command: 'list',
  describe: 'List a Note',
  handler: function(){
    notes.listNotes();
  }
});

yargs.parse();





























