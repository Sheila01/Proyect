import express from 'express'
import cors from 'cors';

const app = express();

app.use(cors())

const port = 3001

app.listen(port => {
  console.log(`Ey bro your port  is: http://localhost ${port}`)
})

