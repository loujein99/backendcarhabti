// require mongoose
const mongoose=require('mongoose')

// Create the income schema
const incomeSchema= new mongoose.Schema({
date:{
   type:String ,
    required:true,
},
time:{
    type:String ,
     required:true,
 },
odometer:{
    type:String ,
    required:true,
},
value:{
    type:String ,
    required:true,
},
typeincome:{
    type:String ,
    required:true,
},
notes:{
    type:String ,
    required:true,
}

})

const Inco=mongoose.model('inco',incomeSchema)
module.exports= Inco