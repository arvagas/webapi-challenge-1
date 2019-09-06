const express = require('express')

const actDB = require('../../data/helpers/actionModel')

const router = express.Router()

// @@@@@@@@@@ Custom Middleware @@@@@@@@@@
function validateActionId(req, res, next) {
    const { id } = req.params

    actDB.get(id)
    .then(actId => {
        if (actId) next()
        else res.status(400).json({ message: "invalid action id" })
    })
    .catch(err => res.status(500).json({ message: "error validating action id" }))
}

module.exports = router