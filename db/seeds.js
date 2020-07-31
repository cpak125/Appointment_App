require('dotenv').config()
const mongoose = require('mongoose')

mongoose.connect(
    process.env.MONGODB_URI,
    { useNewUrlParser: true }
)

const { Appt } = require('./model')

const appt1 = new Appt({
    time: '9:00am - 10:00am',
    name: '',
    phoneNumber: ''
})

const appt2 = new Appt({
    time: '10:00am - 11:00am',
    name: '',
    phoneNumber: ''
})

const appt3 = new Appt({
    time: '11:00am - 12:00pm',
    name: '',
    phoneNumber: ''
})

const appt4 = new Appt({
    time: '12:00pm - 1:00pm',
    name: '',
    phoneNumber: ''
})

const appt5 = new Appt({
    time: '1:00pm - 2:00pm',
    name: '',
    phoneNumber: ''
})

const appt6 = new Appt({
    time: '2:00pm - 3:00pm',
    name: '',
    phoneNumber: ''
})

const appt7 = new Appt({
    time: '3:00pm -4:00pm',
    name: '',
    phoneNumber: ''
})

const appt8 = new Appt({
    time: '4:00pm - 5:00pm',
    name: '',
    phoneNumber: ''
})

Appt.remove({})
    .then(() => appt1.save())
    .then(() => appt2.save())
    .then(() => appt3.save())
    .then(() => appt4.save())
    .then(() => appt5.save())
    .then(() => appt6.save())
    .then(() => appt7.save())
    .then(() => appt8.save())
    .then(() => console.log('Successful Save'))
    .then(() => mongoose.connection.close())
