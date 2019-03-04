const express = require('express')
const app = express()
const fs = require('fs')
const path = require('path')
const bodyParser = require('body-parser')
const PORT = process.env.PORT || 4000
const cors = require('cors')
const mongoose = require('mongoose')
const config = require('./db/config.js')

mongoose.Promise = global.Promise;
mongoose.connect(config.DB, { useNewUrlParser: true }).then(
    () => {console.log('Database is connected') },
    err => { console.log('Can not connect to the database'+ err)}
);

app.use(cors())
app.use(bodyParser.json({limit: '50mb'}));
app.use(bodyParser.urlencoded({limit: '50mb', extended: true}))

app.use(express.static('./dist'))

// routes
app.use('/locations', require('./db/location.route'))
app.use('/characters', require('./db/character.route'))
app.use('/routes', require('./db/route.route'))


//image posting { image, directory, name }
app.post('/upload', (req, res) => {
    //get the image data
    const { image, directory, name } = req.body
    //save to local directory
    fs.copyFile(image, path.resolve(__dirname, directory, name), err => {
        if(err) console.warn("Could not save image! " + err)
    })
})

app.listen(PORT, function(){
    console.log('Server is running on Port:', PORT)
})