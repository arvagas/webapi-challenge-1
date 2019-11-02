require('dotenv').config()

const express = require('express')
const path = require('path')

const defaults = require('./config/defaults')
const server = require('./api/server')

if (process.env.NODE_ENV === 'production') {
    // Serve any static files
    server.use(express.static(path.join(__dirname, 'client/build')));
    
    // Handle React routing, return all requests to React app
    server.get('*', (req, res) => {
        res.sendFile(path.join(__dirname, 'client/build', 'index.html'));
    });
}

const port = defaults.port
server.listen(port, () => {
    console.log(`*** Running on http://localhost:${port} ***`)
})