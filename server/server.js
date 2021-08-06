const express = require('express')
const session = require('express-session')
const cors = require('cors')
const bcrypt = require('bcrypt')

const app = express()

app.use(cors())

app.get('/api/', (req, res) => {
    res.json({
        "Status": "server Listening At Port 5001"
    })
})

app.listen('5001', () => {
    console.log('Listening For Port 5001')
})