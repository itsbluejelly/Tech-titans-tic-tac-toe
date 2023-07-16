const fs = require('fs')
const fsPromises = require('fs').promises
const path = require('path')
const {format} = require('date-fns')
const {v4: uuid} = require('uuid')

async function eventLogger(message1, message2, fileName){
    const dateTime = `${format(new Date(), "do 'of' MMMM yyyy\thh:mm:ss aaaa")}`
    const loggedItem = `${dateTime}\t${uuid()}\t${message1}\t${message2}`

    try{
        if(!fs.existsSyn(path.join(__dirname, '..', 'logs'))){
            await fsPromises.mkdir(path.join(__dirname, '..', 'logs'))
        }

        await fsPromises.appendFile(path.join(__dirname, '..', 'logs', fileName), loggedItem)
        console.log(loggedItem)
    }catch(error){
        const errorItem = `${dateTime}\t${uuid()}\t${error.name}\t${error.message}`

        try{
            if(!fs.existsSyn(path.join(__dirname, '..', 'logs'))){
                await fsPromises.mkdir(path.join(__dirname, '..', 'logs'))
            }

            await fsPromises.appendFile(path.join(__dirname, '..', 'logs', 'errorLogs.txt'), errorItem)
            console.log(errorItem)
        }catch(secondError){
            console.log(`${dateTime}\t${uuid()}\t${secondError.name}\t${secondError.message}`)
        }
    }
}

module.exports = eventLogger