const express = require('express')

const projectsRoute = require('./routes/projectsRoute')

const server = express()
server.use(express.json())

function logger(req, res, next) {
    console.log(`[${new Date().toISOString()}] ${req.method} to ${req.url}`)
}

// @@@@@@@@@@ Global Middleware @@@@@@@@@@
server.use(logger)

// Route handling
server.use('/projects', projectsRoute)

// Hello World test
server.get('/', (req,res) => {
    res.json('Hello World')
})

module.exports = server