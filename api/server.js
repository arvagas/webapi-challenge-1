const express = require('express')

const server = express()
server.use(express.json())

function logger(req, res, next) {
    console.log(`[${new Date().toISOString()}] ${req.method} to ${req.url}`)
}

// @@@@@@@@@@ Global Middleware @@@@@@@@@@
server.use(logger)

// Hello World test
server.get('/', (req,res) => {
    res.json('Hello World')
})

module.exports = server