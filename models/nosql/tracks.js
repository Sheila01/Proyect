import mongoose from 'mongoose';

const trancksSchema = new mongoose.Schema(
  {
    name: {
      type: String,
    },
    albumen: {
      type: String,
    },
    cover: {
      type: String,
      validator: (req) => {
        return true;
      },
      message: "ERROR_URL"
    },
    artist: {
      name: {
        type: String,
      },
      nickname: {
        type: String,
      },
      nacionality: {
        type: String,
      },
    },
    duraction: {
      start:{
        type: Number,
      },
      end: {
        type: Number,
      },
    },
    mediaId: {
      type: mongoose.Types.ObjectId,
    },
  },
  {
    timestamps: true,
    versionKey: false,
  }
)

//module.esports = mongoose.model('Tracks', trancksSchema)
export default {
  Tracks,
  trancksSchema
}