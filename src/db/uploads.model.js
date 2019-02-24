const mongoose = require('mongoose')
const Schema = mongoose.Schema

// Define collection and schema for Location
let Uploads = new Schema({
    image: String,
    directory: String,
    name: String
},{
    collection: 'uploads'
})

module.exports = mongoose.model('Uploads', Uploads)