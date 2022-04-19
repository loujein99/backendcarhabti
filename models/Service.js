// require mongoose
const mongoose=require('mongoose')

// Create the service schema
const serviceSchema= new mongoose.Schema({
date:{
    type:String,
    required:true
},
odometer:{
    type:String,
    required:true
},
value:{
    type:String ,
    required:true,
},
typeservice:{
    type:String ,
    required:true,
},
place:{
    type:String ,
    required:true,
},
notes:{
    type:String ,
    required:true,
}

})
module.exports=mongoose.model('services',serviceSchema)