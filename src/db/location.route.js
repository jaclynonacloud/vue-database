const express = require('express')
const router = express.Router()

// Require Post model in our routes module
let Location = require('./location.model')

// Defined store route
router.route('/add').post(function (req, res) {
let location = new Location(req.body)
    location.save()
        .then(() => {
        res.status(200).json({'location': 'location in added successfully'});
        })
        .catch(() => {
        res.status(400).send("unable to save to database");
        })
})

// Defined get data(index or listing) route
router.route('/').get(function (req, res) {
    Location.find(function(err, locations){
        if(err){
            res.json(err)
        }
        else {
            res.json(locations)
        }
    })
})


module.exports = router