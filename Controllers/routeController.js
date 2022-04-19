
const bcrypt  =require('bcryptjs')
const jwt    =require('jsonwebtoken')
const Inco = require('../models/Route')


const rou =(req, res, next)=> {
console.log(
    req.body.origine
)
console.log(
    req.body.dateDebut
)

console.log(
    req.body.timeDebut
)
console.log(
    req.body.initOdometer
)
console.log(
    req.body.destination
)
console.log(
    req.body.dateFin
)
console.log(
    req.body.timeFin
)
console.log(
    req.body.finOdometer
)
console.log(
    req.body.valueKm
)
console.log(
    req.body.reason
)
console.log(
    req.body.notes
)

let rou = new Rou({
  ...req.body

})
rout.save()
.then(response=>{
    res.json({
        message:' route add with succes ! ',
        rout:rout
    })
})


.catch(error =>{
    res.json({
        message :error.toString()
    })
})

}
const Show = (req, res)=> {
    Rout.find()
    .then(response => {
        res.json(
            response
        )
    })
        .catch(error =>{
            res.json({
                message:'An error Occured ! '
            })
        })
}

const index =(req, res)=>{
    let RoutID = req.body.RoutID
    Rout.findById(RoutID)
    .then(response =>{
        res.json({
            response
        })
    })
    .catch(error => {
        res.json({
            message:'An error Occured!'
        })
    })
}
const destroy = (req, res, next)=>{
    let RoutID = req.body.RoutID
    
    Rout.findByIdAndRemove(RoutID)
    .then (() => {
        res.json({
            message : 'route deleted deleted ',
          ...req.body
        })

    })

    .catch(error =>{
        res.json({
            message : 'error with deleting route !'
        })
    })
}

const update = (req, res, next)=>{
    let RoutID = req.body.RoutID

    let updateData ={

  
        ...req.body
    
    }

    Rout.findByIdAndUpdate(RoutID , {$set :  updateData})
    .then (() =>{
        res.json({
            message : ' route update with succes !'
        })

    })
.catch(error =>{
    res.json({
        message : 'error with updtaing route !'
    })
})

}
module.exports ={
    rou,Show,index,destroy,update
}
