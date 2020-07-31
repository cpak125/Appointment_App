const Schema = require('mongoose').Schema

const ApptSchema = new Schema({
    time: String,
    name: String,
    phoneNumber: String
})

module.exports = {
    ApptSchema
}