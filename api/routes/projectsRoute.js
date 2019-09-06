const express = require('express')

const projDB = require('../../data/helpers/projectModel')

const router = express.Router()

// @@@@@@@@@@ Custom Middleware @@@@@@@@@@
function validateProjectId (req, res, next) {
    projDB.get(id)
    .then(userId => {
        if (userId) next()
        else res.status(404).json({ message: "invalid project id" })
    })
    .catch(err => res.status(500).json({ message: "error validating project id" }))
}

module.exports = router