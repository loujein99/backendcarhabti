
const bcrypt  =require('bcryptjs')
const jwt    =require('jsonwebtoken')
const Refu = require('../models/refueling')


const ref =(req, res, next)=> {
console.log(
    req.body.date
)
console.log(
    req.body.time
)

console.log(
    req.body.odometer
)
console.log(
    req.body.fuel
)
console.log(
    req.body.prix
)
console.log(
    req.body.cout
)
console.log(
    req.body.litres
)
console.log(
    req.body.role
)
console.log(
    req.body.gasStation
)

let refu = new Refu({
  ...req.body

})
refu.save()
.then(response=>{
    res.json({
        message:' redueling add with succes ! ',
        refu:refu
    })
})


.catch(error =>{
    res.json({
        message :error.toString()
    })
})

}
const Show = (req, res)=> {
    Refu.find()
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
    let RefuID = req.body.RefuID
    Refu.findById(RefuID)
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
    let RefuID = req.body.RefuID
    
    Refu.findByIdAndRemove(RefuID)
    .then (() => {
        res.json({
            message : 'refueling deleted deleted ',
          ...req.body
        })

    })

    .catch(error =>{
        res.json({
            message : 'error with deleting refueling !'
        })
    })
}

const update = (req, res, next)=>{
    let RefuID = req.body.RefuID

    let updateData ={

  
        ...req.body
    
    }

    Refu.findByIdAndUpdate(RefuID , {$set :  updateData})
    .then (() =>{
        res.json({
            message : ' refueling update with succes !'
        })

    })
.catch(error =>{
    res.json({
        message : 'error with updtaing refueling !'
    })
})

}
module.exports ={
    ref,Show,index,destroy,update
}
