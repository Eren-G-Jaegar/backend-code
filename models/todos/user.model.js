const mongoose = require ('mongoose')

const userSchema = new mongoose.Schema(
  {
    useranme : {
      type : String,
      required : true,
      unique : true,
      lowercaser : true
    },
    email :{
      type : String,
      required : true,
      unique : true,
      lowercase : true,
    },
    password : {
      type : String,
      required : [true , "Password is mandatory"]
    },
    userIsActive : Boolean
  },
  { timestamps : true}
)

export const User = mongoose.model("User",userSchema)