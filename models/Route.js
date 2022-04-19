// require mongoose
const mongoose=require('mongoose')

// Create the route schema
const routeSchema= new mongoose.Schema({
origine:{
    type:String,
    required:true
},
dateDebut:{
    type:String,
    required:true
},
timeDebut:{
    type:String ,
    required:true,
},
initOdometer:{
    type:String ,
    required:true,
},
destination:{
    type:String ,
    required:true,
},
dateFin:{
    type:String,
    required:true
},
timeFin:{
    type:String ,
    required:true,
},
finOdometer:{
    type:String ,
    required:true,
},
valueKm:{
    type:String ,
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
const Rout=mongoose.model('rout',routeSchema)
module.exports= Rout