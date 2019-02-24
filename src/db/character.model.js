const mongoose = require('mongoose')
const Schema = mongoose.Schema

// Define collection and schema for Character
let Character = new Schema({
    lookup: String,
    firstName: String,
    middleName: String,
    lastName: String,
    maidenName: String,
    preferredName: String,
    nickName: String,
    pronunciation: String,
    age: { local:Number, global:Number },
    gender: { key:String, lookup:String, other:String, route:String },
    typeBase: { key:String, lookup:String, other:String, route:String },
    typeMod: { key:String, lookup:String, other:String, route:String },
    speciesBase: { key:String, lookup:String, other:String, route:String },
    speciesMod: { key:String, lookup:String, other:String, route:String },
    birthplace: { key:String, lookup:String, route:String },
    home: { key:String, lookup:String, route:String },
    career: String,
    status: { key:String, lookup:String, other:String, route:String },
    role: { key:String, lookup:String, other:String, route:String },
    height: String,
    weight: String,
    spirituality: { key:String, lookup:String, other:String, route:String },
    sexuality: { key:String, lookup:String, other:String, route:String },
    sexualPreference: { key:String, lookup:String, other:String, route:String },
    birthday: Date,
    aliases: [],
    quotes: [],
    trivia: [],
    relationships: {
        family: [],
        friends: [],
        acquaintances: [],
        enemies: []
    },
    shortDescription: String,
    description: String,
    history: String,
    characteristics: String,
    header: { src:String, caption:String },
    profile: String,
    thumbnail: String
},{
    collection: 'characters'
})

module.exports = mongoose.model('Character', Character)