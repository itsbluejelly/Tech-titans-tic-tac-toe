// IMPORTING NECESSARY FUNCTIONS AND LIBRARIES
const express = require('express')
const mongoose = require('mongoose')
const dotenv = require('dotenv')
const cors = require('cors')
const eventLogger = require('./middleware/eventLogger')
const connectDB = require('./config/connectDB')
const signUpRouter = require('./routers/signUpRouter')
// const loginRouter = require('./routers/loginRouter')

// INITIATING THE EXPRESS APP
const app = express()
// INITIATING DOTENV
dotenv.config()
// CONNECTING TO MONGOOSE DATABASE
connectDB()

// DECLARING A PORT TO CONNECT TO USING THE .ENV ONE OR THE HARDCODED ONE
const port = process.env.PORT_NUMBER || 5500

// MIDDLEWARE TO ALLOW US TO RECEIVE JSON REQUESTS
app.use(express.json())
// INITIATING CORS TO ALLOW FRONTEND PORT
app.use(cors({origin: 'http://localhost:5173'}))

// MIDDLEWARE ROUTE TO SIGNING UP
app.use('/signup', signUpRouter)
// MIDDLEWARE ROUTE TO LOGGING IN 
// app.use('/login', loginRouter)
// SERVER IS ACTIVATED ONLY WHEN IT IS CONNECTED TO DATABASE
mongoose.connection.once("open", () => {
    app.listen(port)
    eventLogger("Connected to MongoDB successfully", `Server listening on port ${port}`, 'databaseLogs.txt')
})