import mongoose from 'mongoose';
import jwt from 'jsonwebtoken'
const UserSchema = new mongoose.Schema({
    
    userName:{
        type: String,
        required: true
    },
    userEmail: {
        type: String,
        required: true
    },
    userPassword: {
        type: String,
        required: true
    }
});
UserSchema.methods.generateToken =  async function (){
  try{
  return JsonWebTokenError.sign({
    userId: this._id.toString(),
    userEmail:this.email,
  },
  process.env.JWT_SECRET ,
  {
    expiresIn:"30d"
  }
  )
  }
  catch (error){
    console.log(error)

  }
}
const User = mongoose.model('User', UserSchema);

export default User;