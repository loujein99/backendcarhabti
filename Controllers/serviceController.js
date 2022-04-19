/*
const bcrypt  =require('bcryptjs')
const jwt    =require('jsonwebtoken')
const Service = require('../models/Service')
const Inco = require('../models/Service')


const serv =(req, res, next)=> {
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

let serv = new Serv({
  ...req.body

})
Servi.save()
.then(response=>{
    res.json({
        message:' Service add with succes ! ',
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
    Servi.find()
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
    let ServiID = req.body.ServiID
    Servi.findById(ServiID)
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
    let ServiID = req.body.ServiID
    
    Servi.findByIdAndRemove(ServiID)
    .then (() => {
        res.json({
            message : 'service deleted deleted ',
          ...req.body
        })

    })

    .catch(error =>{
        res.json({
            message : 'error with deleting service !'
        })
    })
}

const update = (req, res, next)=>{
    let ServiID = req.body.ServiID

    let updateData ={

  
        ...req.body
    
    }

    Servi.findByIdAndUpdate(ServiID , {$set :  updateData})
    .then (() =>{
        res.json({
            message : ' service update with succes !'
        })

    })
.catch(error =>{
    res.json({
        message : 'error with updtaing service !'
    })
})

}
module.exports ={
    serv,Show,index,destroy,update
}
*/