const express = require('express')

const projDB = require('../../data/helpers/projectModel')

const router = express.Router()

// @@@@@@@@@@ Custom Middleware @@@@@@@@@@
function validateProjectId (req, res, next) {
    const { id } = req.params

    projDB.get(id)
    .then(userId => {
        if (userId) next()
        else res.status(404).json({ message: "invalid project id" })
    })
    .catch(err => res.status(500).json({ message: "error validating project id" }))
}

// @@@@@@@@@@ GET request @@@@@@@@@@
//Get all projects
router.get('/', (req,res) => {
    projDB.get()
    .then(projects => res.json(projects))
    .catch(err => res.status(500).json({ message: "error retrieving projects" }))
})

//Get specific projects w/ actions
router.get('/:id', validateProjectId, (req,res) => {
    const { id } = req.params

    projDB.get(id)
    .then(project => res.json(project))
    .catch(err => res.status(500).json({ message: "error retrieving specific project" }))
})

//Get only the actions of a specific project
router.get('/:id/actions', validateProjectId, (req,res) => {
    const { id } = req.params

    projDB.getProjectActions(id)
    .then(projectActions => res.json(projectActions))
    .catch(err => res.status(500).json({ message: "error retrieving specific project" }))
})

module.exports = router