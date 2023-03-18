import mongoose from 'mongoose';

const UserSchema = new mongoose.Schema(
  {
    name: {
      type: String
    },
    age: {
      type: Number
    },
    email: {
      type: String,
      unique: true
    },
    password: {
      type: String,
    },
    role: {
      type: ["user", "admin"],
      default: "user"
    },
  },{
    timestamps: true,
    versionKey: false
  }
)

//export default mongoose.model('__', UserSchema)
export default {
  users,
  UserSchema 
}