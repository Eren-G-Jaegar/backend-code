const mongoose = require ('mongoose')

const subTodos = mongoose.Schema(
  {
    content : {
      type : String,
      required : true
    },
    complete : {
      type : Boolean,
      default : false
    },
    createdBy : {
      type : mongoose.Schema.ObjectId,
      ref : "User"
    }
  },
  { timestamps : true})

export const SubTodos = mongoose.model("SubTodo",subTodos)