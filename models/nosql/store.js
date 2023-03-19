import mongoose from 'mongoose';

const StoreSchema = new mongoose.Schema(
  {
    url: {
      type: String
    },
    filename: {
      type: Number
    }
  },
  {
    timestamps: true,
    versionKey: false
  }
)

//module.esports = mongoose.model('Store', StoreSchema)
export default {
  Store,
  StoreSchema
}
 