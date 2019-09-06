require('dotenv').config()

const defaults = require('./config/defaults')
const server = require('./api/server')

const port = defaults.port
server.listen(port, () => {
    console.log(`*** Running on http://localhost:${port} ***`)
})