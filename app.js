const express = require('express')
const app = express()
const port = 3000

const Users = require('./controllers/User')

app.get(`/user/:id`, Users.User)

app.listen(port, ()=>console.log(`port = ${port}`))