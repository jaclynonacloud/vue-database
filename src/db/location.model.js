const mongoose = require('mongoose')
const Schema = mongoose.Schema

// Define collection and schema for Location
let Location = new Schema({
    title: {
        type: String
    },
    body: {
        type: String
    }
},{
    collection: 'locations'
})

module.exports = mongoose.model('Location', Location)