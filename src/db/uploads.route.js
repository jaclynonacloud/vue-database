const express = require('express')
const router = express.Router()

// Require Post model in our routes module
let Character = require('./upload.model')

// add character
router.route('/add').post(function (req, res) {
let upload = new Upload(req.body)
upload.save()
        .then(() => res.status(200).json({'upload': 'upload in added successfully'}))
        .catch(() => res.status(400).send("unable to save to database"))
})


module.exports = router