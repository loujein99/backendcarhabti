// require mongoose
const mongoose=require('mongoose')

// Create the refueling schema
const refuelingSchema= new mongoose.Schema({
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
fuel:{
    type:String ,
    required:true,
},
prix:{
    type:String ,
    required:true,
},
cout:{
    type:String ,
    required:true,
},
litres:{
    type:String ,
    required:true,
},
role :{
    type:String,
    default:"true",
},
gasStation:{
    type:String ,
    required:true,
}

})
module.exports=mongoose.model('refueling',refuelingSchema)