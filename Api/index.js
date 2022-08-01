
const express = require('express')
const cors = require('cors')
const routes  = require('./routes.js')

const app = express()
let port = process.env.PORT;
if (port == null || port == "") {
  port = 8000
}

app.use(cors())
app.use(routes)
app.listen(port, () => console.log(`SERVER RUNNING ON PORT: ${port}`))

module.exports = app
