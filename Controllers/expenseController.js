
const bcrypt  =require('bcryptjs')
const jwt    =require('jsonwebtoken')
const Expe = require('../models/Expense')


const exp =(req, res, next)=> {
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
    req.body.typeExpense
)
console.log(
    req.body.place

)
console.log(
    req.body.reason

)
console.log(
    req.body.notes
)
let expe = new Expe({
  ...req.body

})

expe.save()
.then(response=>{
    res.json({
        message:' expense add with succes ! ',
        expe:expe
    })
})


.catch(error =>{
    res.json({
        message :error.toString()
    })
})

}
const Show = (req, res)=> {
    Expe.find()
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

const findID =(req, res)=>{
    let ExpID = req.body.ExpID
    Expe.findById(ExpID)
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
    let ExpID = req.body.ExpID
    
    Expe.findByIdAndRemove(ExpID)
    .then (() => {
        res.json({
            message : 'expense deleted deleted ',
          ...req.body
        })

    })

    .catch(error =>{
        res.json({
            message : 'error with deleting expense !'
        })
    })
}

const update = (req, res, next)=>{
    let ExpID = req.body.ExpID

    let updateData ={

  
        ...req.body
    
    }

    expe.findByIdAndUpdate(ExpID , {$set :  updateData})
    .then (() =>{
        res.json({
            message : ' expense update with succes !'
        })

    })
.catch(error =>{
    res.json({
        message : 'error with updtaing user !'
    })
})

}
module.exports ={
    exp,Show,findID,destroy,update
}
