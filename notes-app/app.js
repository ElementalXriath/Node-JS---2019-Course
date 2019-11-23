const validator = require('validator');
const chalk = require('chalk');
const yargs = require('yargs');

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
        type: 'String'
      }
  },
  handler: function(argv){
    console.log('Title : ', argv.title)
    console.log('Body : ', argv.body)
  }
});

//Remove
yargs.command({
  command: 'remove',
  describe: 'Remove a Note',
  handler: function(){
    console.log('Removing a new note')
  }
});

//Read Note
yargs.command({
  command: 'read',
  describe: 'Read a Note',
  handler: function(){
    console.log('Reading new note')
  }
});

//List
yargs.command({
  command: 'list',
  describe: 'List a Note',
  handler: function(){
    console.log('List a new note')
  }
});

yargs.parse();





























