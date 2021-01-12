const fs = require('fs')
const chalk = require('chalk')
const log = console.log
const getNotes = function () {
    return  loadnotes()
}

const addNotes = (title, body) => {
   const notes = loadnotes();
   const duplicate = notes.find((args)=> {
       return args.title === title
   })
    debugger
   if (!duplicate) {
        notes.push({
            title: title,
            body: body
        })
        saveNotes(notes)
        log(chalk.red.bold.inverse('Notes Added'))
   } else {
       log('DUPLICATES FOUND:')
   }
  
}

const saveNotes = (data) => {
    const dataString = JSON.stringify(data)
    fs.writeFileSync('notes.json', dataString)
}

const listNotes = () => {
    const list = getNotes();
    list.forEach(element => {
        log(chalk.yellow.bold.inverse(`title: ${element.title}   body: ${element.body}`))
    });
}

const removeNotes = (title) => {
   const notes = loadnotes();
  
   const newNotes = notes.filter((args)=>{
    return args.title !== title
   })
   saveNotes(newNotes)
   if (notes.length > newNotes.length) {
    log(chalk.green.bold.inverse('Note Removed'))
   } else {
    log(chalk.green.red.inverse('No Note Found'))
   }
}

const loadnotes = () => {
    try {
        const dataBUffer = fs.readFileSync('notes.json')
        const dataJson = dataBUffer.toString()
        return JSON.parse(dataJson)
    }
    catch (e) {
        console.log(e)
        return []
    }
}
   

module.exports = {
    getNotes: getNotes,
    addNotes: addNotes,
    removeNotes: removeNotes,
    listNotes: listNotes
};