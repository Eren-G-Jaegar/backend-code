const mon = require ('mongoose')

const TodoSchema = mon.Schema(
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
      type : mon.Schema.ObjectId,
      ref : "User"
    },
    // It will be an Array of Sub-Todos which is referenced by sub_todo.model.js
    subTodos : [
      {
        type : mon.Schema.Types.ObjectId,
        ref : "SubTodo"
      }
    ]
  } , 
  { timestamps : true})

export const Todo = mon.model("Todo",TodoSchema)