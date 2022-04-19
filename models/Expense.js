// require mongoose
const mongoose=require('mongoose')

// Create the expense schema
const expenseSchema= new mongoose.Schema({
date:{
   type:String ,
    required:true,
},
time:{
    type:String ,
     required:true,
 },
odometer:{
    type:String,
    required:true
},
value:{
    type:String ,
    required:true,
},
typeExpense:{
    type:String ,
    required:true,
},
place:{
    type:String ,
    required:true,
},
reason:{
    type:String ,
    required:true,
},
notes:{
    type:String ,
    required:true,
}

})
const Expe=mongoose.model('expe',expenseSchema)
module.exports= Expe