
/**
 * Este metodo es el de la lista
 * @param {*} req 
 * @param {*} res 
 */

const  getItems = (req, res) => {
  const data = ['Hi', 'Baby', '🥰']
  res.send({data})
}

/**
 * Este metodo es el va a obtener el detalle
 * @param {*} req 
 * @param {*} res 
 */

const  getItem = (req, res) => {
  //Este va a obtener el  el detalle de uno 

}

/**
 * Este metodo es el va a obtener el registro
 * @param {*} req 
 * @param {*} res 
 */
const  createItem = (req, res) => {
  //Este va a tener el registro

}

/**
 * Este metodo es el va a optener la actualizar el registro
 * @param {*} req 
 * @param {*} res 
 */
const  updateItem = (req, res) => {
  //Este va a actualidad registro

}
const  deleteItem = (req, res) => {
  //Este va a eliminar un registro

}

export default {getItems, getItem, createItem, updateItem, deleteItem}