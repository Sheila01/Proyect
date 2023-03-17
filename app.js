const express = require('express')
const cors = require('cors')
require('dotenv').config()

const app = express()

app.use(cors())

const port = process.env.PORT 

app.listen(port, () => {
  console.log(`Ey bro your port  is: http://localhost ${port}`)
})

