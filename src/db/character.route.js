const express = require('express')
const router = express.Router()
const fs = require('fs')
const path = require('path')

// Require Post model in our routes module
let Character = require('./character.model')

// add character
router.route('/add').post(function (req, res) {
    let character = new Character(req.body)

    //add uploads
    character = handleUploads(character)

    character.save()
            .then(() => res.status(200).json({'character': 'location in added successfully'}))
            .catch(() => res.status(400).send("unable to save to database"))
})

// get all characters
router.route('/').get(function (req, res) {
    Character.find(function(err, characters){
        if(err) res.json(err)
        else res.json(characters)
    })
})


// get single character
router.route('/:lookup').get(function (req, res) {
    let lookup = req.params.lookup
    Character.findOne({lookup}, function (err, character){
        if(err) res.json(err)
        else res.json(character)
    })
})

// update given character
router.route('/update/:lookup').post(function (req, res) {
    let lookup = req.params.lookup
    Character.findOne({lookup}, function(err, character) {
        if (!character) res.status(404).send("data is not found")
        else {

            //update uploads
            req.body = handleUploads(character, req.body)

            Character.updateOne({lookup}, req.body)
                .then(() => {
                    res.json('Update complete')
                })
                .catch(() => {
                    res.status(400).send("unable to update the database")
                })

        }
    })
})

function handleUploads(character, reqBody) {
    //handle uploads
    let reqObj = reqBody || character


    //PROFILE
    if(reqObj.profile != null && reqObj.profile != '' && reqObj.profile.startsWith('data:image/png;')) {
        var data = reqObj.profile.replace(/^data:image\/\w+;base64,/, "")
        var buff = new Buffer(data, 'base64')
        //save to local directory
        const wPath = path.resolve(__dirname, `../assets/uploads/profiles/${reqObj.lookup}.png`)
        fs.writeFile(wPath, buff, (err) => {
            if (err) {
                // there was an error
                console.log(err);
            } else {
                // data written successfully
                console.log("file written successfully");
            }
        })
        //set to local name
        reqObj.profile = `uploads/profiles/${reqObj.lookup}.png`
    }

    //THUMBNAIL
    if(reqObj.thumbnail != null && reqObj.thumbnail != '' && reqObj.thumbnail.startsWith('data:image/png;')) {
        var data = reqObj.thumbnail.replace(/^data:image\/\w+;base64,/, "")
        var buff = new Buffer(data, 'base64')
        //save to local directory
        const wPath = path.resolve(__dirname, `../assets/uploads/thumbnails/${reqObj.lookup}.png`)
        fs.writeFile(wPath, buff, (err) => {
            if (err) {
                // there was an error
                console.log(err);
            } else {
                // data written successfully
                console.log("file written successfully");
            }
        })
        //set to local name
        reqObj.thumbnail = `uploads/thumbnails/${reqObj.lookup}.png`
    }


    //HEADER
    if(reqObj.header.src != null && reqObj.header.src != '' && reqObj.header.src.startsWith('data:image/png;')) {
        var data = reqObj.header.src.replace(/^data:image\/\w+;base64,/, "")
        var buff = new Buffer(data, 'base64')
        //save to local directory
        const wPath = path.resolve(__dirname, `../assets/uploads/headers/${reqObj.lookup}.png`)
        fs.writeFile(wPath, buff, (err) => {
            if (err) {
                // there was an error
                console.log(err);
            } else {
                // data written successfully
                console.log("file written successfully");
            }
        })
        //set to local name
        reqObj.header.src = `uploads/headers/${reqObj.lookup}.png`
    }

    return reqObj
}



module.exports = router