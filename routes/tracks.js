import chalk from 'chalk'
import express from 'express'
import { PORT } from './config.js'
import bodyParser from 'body-parser'
import { getItems } from './users/controller.js'
import cors from 'cors'

const app = express()
app.use(bodyParser.json())

app.use(cors())


//app.post('/users', createUser)

app.get('/', getItems)

//app.get('/users/:id', getUser)

app.listen(PORT, () => {
  //const pink = chalk.hex('#ff7ab2')
  console.log(chalk.cyanBright(`This is my ${pink(PORT)}`)) // es casi igual q el q había amor buneo guapa eso luego lo haces tú
})



/*const express = require('express');
const router = express.Router();
import getItems from '.routes//tracks'
*/

//router.get('/', getItems)


//module.exports = router

//export default router

/*
app.listen('tracks', (req, res) => {
  const data = ['Hi', 'Baby', '🥰']
  res.send({data})
})
*/
/*module.exports = router
*/
/*app.get('tracks', )
app.get('/', () => {})*/

//export default router