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

// @@@@@@@@@@ GET requests @@@@@@@@@@
//Get all actions
router.get('/', (req,res) => {
    actDB.get()
    .then(actions => res.json(actions))
    .catch(err => res.status(500).json({ message: "error retrieving actions" }))
})

//Get specific actions
router.get('/:id', validateActionId, (req,res) => {
    const { id } = req.params

    actDB.get(id)
    .then(action => res.json(action))
    .catch(err => res.status(500).json({ message: "error retrieving specific project" }))
})

module.exports = router