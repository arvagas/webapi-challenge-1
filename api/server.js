const express = require('express')

const projectsRoute = require('./routes/projectsRoute')
const actionsRoute = require('./routes/actionsRoute')

const server = express()
server.use(express.json())

function logger(req, res, next) {
    console.log(`[${new Date().toISOString()}] ${req.method} to ${req.url}`)

    next()
}

// @@@@@@@@@@ Global Middleware @@@@@@@@@@
server.use(logger)

// Route handling
server.use('/projects', projectsRoute)
server.use('/action', actionsRoute)

// Hello World test
server.get('/', (req,res) => {
    res.json('Hello World')
})

module.exports = server