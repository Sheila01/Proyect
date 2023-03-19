import { express } from 'express';
import { router } from 'express';


/*router.get('tracks', (req, res) => {
  const data = ['Hi', 'Baby', '🥰']
  res.send({data})
})

export default router*/


app.listen('tracks', (req, res) => {
  const data = ['Hi', 'Baby', '🥰']
  res.send({data})
})

/*app.get('tracks', )
app.get('/', () => {})*/

export default router