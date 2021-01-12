
const validator = require('validator')
const chalk = require('chalk')
const yargs = require('yargs')

const notes = require('./notes.js')

yargs.command({
    command: 'add',
    describe: 'Add a new note',
    builder: {
        title: {
            describe: 'Note title',
            demandOption: true,
            type: 'string'
        },
        body : {
            describe: 'Body of the notes',
            demandOption: true,
            type: 'string'
        }
    },
    handler:  function (argv) {
        notes.addNotes(argv.title, argv.body)
    }
})


yargs.command({
    command: 'remove',
    describe: 'Remove a new note',
    handler:  function (argv) {
        notes.removeNotes(argv.title, argv.body)
    }
})


yargs.command({
    command: 'list',
    describe: 'list the notes',
    handler:  function () {
        notes.listNotes()
    }
})

yargs.command({
    command: 'read',
    describe: 'read the notes',
    handler:  function () {
        console.log('read the notes')
    }
})
yargs.parse()