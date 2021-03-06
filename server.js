require('dotenv').config()
const express = require('express')
const path = require('path')
const cookieParser = require('cookie-parser')
const logger = require('morgan')
const mongoose= require('mongoose')

mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true })
const connection = mongoose.connection
connection.on('connected', () => {
  console.log('Mongoose Connected Successfully')
})

connection.on('error', (err) => {
  console.log('Mongoose default connection error: ' + err)
})


const app = express()

app.use(logger('dev'))
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(cookieParser())
app.use(express.static(__dirname + '/client/build/'))

const apptsController = require('./routes/apptsController')
app.use('/api/appts', apptsController)

app.get('/*', (req,res) => {
    res.sendFile(__dirname + '/client/build/index.html')
  })
  


module.exports = app
