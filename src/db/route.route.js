const express = require('express')
const router = express.Router()

// Require Route model in our routes module
let Route = require('./route.model')

// add route
router.route('/add').post(function (req, res) {
    let route = new Route(req.body)

    //see if we already have this route
    Route.findOne({lookup:req.body.lookup, route:req.body.route}, (err, result) => {
        if(!result) {
            //if we don't have it, add it
            route.save()
            .then(() => res.status(200).json({'route': 'route in added successfully'}))
            .catch(() => res.status(400).send("unable to save to database"))
        }
    })
})

// get all routes
router.route('/').get(function (req, res) {
    Route.find(function(err, routes){
        if(err) res.json(err)
        else res.json(routes)
    })
})



module.exports = router