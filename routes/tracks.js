import chalk from 'chalk'
import express from 'express'
import { PORT } from './config.js'
import bodyParser from 'body-parser'
import { getItems } from './router/tracks'
import cors from 'cors'

const app = express()
app.use(bodyParser.json())

app.use(cors())


app.post('/users', createUser)

app.get('/', getItems)

//app.get('/users/:id', getUser)

app.listen(PORT, () => {
  const pink = chalk.hex('#ff7ab2')
  console.log(chalk.cyanBright(`This is my ${pink(PORT)}`)) // es casi igual q el q había amor buneo guapa eso luego lo haces tú
})



/**
 * const express = require('express')
const router = express.Router();
const {getItems} = require('../controllers/tracks')

router.get('/', getItems)

module.exports = router
 */