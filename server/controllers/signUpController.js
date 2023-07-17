const bcrypt = require('bcrypt')
const eventLogger = require('../middleware/eventLogger')
const UserModel = require('../model/User')

async function signUpController(req, res, next){
    eventLogger(req.path, req.method, 'eventLogs.txt')
    const user = req.body

    try{
        const foundUser = await UserModel.findOne({username: user.username})

        if(foundUser){
            throw new Error("Account already registered")
        }else{
            const hashedPassword = await bcrypt.hash(user.password, 14)
            const savedUser = await UserModel.create({
                username: user.username,
                password: hashedPassword
            })
            res.status(201).send("Account created successfully")
            eventLogger("Account created successfully", `User ID is ${savedUser._id}`, 'databaseLogs.txt')
        }
    }catch(error){
        res.status(400).json({
            Error: {
                [error.name]: error.message
                }
            })
        eventLogger(error.name, error.message, 'errorLogs.txt')
    }

    next()
}

module.exports = signUpController