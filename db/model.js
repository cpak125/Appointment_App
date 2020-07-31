const mongoose = require('mongoose')
const { ApptSchema } = require('./schema')

const ApptModel= mongoose.model('Appt', ApptSchema)

module.exports = {
    Appt: ApptModel
}