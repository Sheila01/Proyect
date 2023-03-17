const mongoose = require('mongoose')

const dbConnect = () => {
    const DB_URI = process.env.DB_URI
    mongoose.connect(DB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true
    }, (err, res) => {
      if(!err){
        console.log('**** The connect is success ****')
      }else{
        console.log('**** We are having trouble connecting ****')
      }
    })
}

module .exports = dbConnect