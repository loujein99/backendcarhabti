
const bcrypt  =require('bcryptjs')
const jwt    =require('jsonwebtoken')
const Inco = require('../models/Income')


const inc =(req, res, next)=> {
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
    req.body.value
)
console.log(
    req.body.typeincome
)
console.log(
    req.body.notes
)

let inco = new Inco({
  ...req.body

})
inco.save()
.then(response=>{
    res.json({
        message:' user add with succes ! ',
        inco:inco
    })
})


.catch(error =>{
    res.json({
        message :error.toString()
    })
})

}
const Show = (req, res)=> {
    Inco.find()
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
    let IncoID = req.body.IncoID
    Inco.findById(IncoID)
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
    let IncoID = req.body.IncoID
    
    Inco.findByIdAndRemove(IncoID)
    .then (() => {
        res.json({
            message : 'income deleted deleted ',
          ...req.body
        })

    })

    .catch(error =>{
        res.json({
            message : 'error with deleting user !'
        })
    })
}

const update = (req, res, next)=>{
    let IncoID = req.body.IncoID

    let updateData ={

  
        ...req.body
    
    }

    Inco.findByIdAndUpdate(IncoID , {$set :  updateData})
    .then (() =>{
        res.json({
            message : ' user update with succes !'
        })

    })
.catch(error =>{
    res.json({
        message : 'error with updtaing user !'
    })
})

}
module.exports ={
    inc,Show,index,destroy,update
}
