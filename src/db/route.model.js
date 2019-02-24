const mongoose = require('mongoose')
const Schema = mongoose.Schema

// Define collection and schema for Character
let Route = new Schema({
    lookup: String,
    route: String
},{
    collection: 'routes'
})

module.exports = mongoose.model('Route', Route)