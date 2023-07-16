const express = require('express')
const mongoose = require('mongoose')
const dotenv = require('dotenv')
const cors = require('cors')
const eventLogger = require('./middleware/eventLogger')
const connectDB = require('./config/connectDB')

const app = express()
cors({origin: 'http://localhost:5173/'})
dotenv.config()
connectDB()

const port = process.env.PORT_NUMBER || 5173

app.use(express.json())

mongoose.connection.once("open", () => {
    app.listen(port)
    eventLogger("Connected to MongoDB successfully", `Server listening on port ${port}`, 'databaseLogs.txt')
})


