import mongoose from 'mongoose';

const dbConnect = () => {
    const DB_URI = process.env.DB_URI
    mongoose.connect(DB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true
    }, (err, res) => {
      if(!err){
        console.log('**** The connect is success')
      }
    })
}

export default dbConnect