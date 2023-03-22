const express = require('express');
const router = express.Router();


router.get('/', (req, res) => {
  const data = ['Hi', 'Baby', '🥰']
  res.send({data})
})

module.exports = router

//export default router

/*
app.listen('tracks', (req, res) => {
  const data = ['Hi', 'Baby', '🥰']
  res.send({data})
})

module.exports = router
*/
/*app.get('tracks', )
app.get('/', () => {})*/

//export default router