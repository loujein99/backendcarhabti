const express   = require('express')
const mongoose  = require('mongoose')
const morgan    = require('morgan')
const bodyParser = require('body-parser')

const AuthRoute = require ('./routes/auth')
const Incomerout = require ('./routes/incomeRoute')
const Expenserout = require ('./routes/expenseRoute')
const Refuelingrout = require ('./routes/refuelingRoute')
const Routerout = require ('./routes/routeRoute')
//const Servicerout = require ('./routes/serviceRoute')

mongoose.connect('mongodb+srv://loujein:12345lb@cluster0.ow0qm.mongodb.net/myFirstDatabase?retryWrites=true&w=majority',{useNewUrlParser : true , useUnifiedTopology:true})
const db  = mongoose.connection

db.on('error',(err) =>{
    console.log(err)
} )

db.once('open', ()=> {
    console.log('DB Connection Estabblished !')
})



const app=express()

app.use(morgan('dev'))
app.use(bodyParser.urlencoded({extended : true}))
app.use(bodyParser.json())


const PORT = process.env.PORT || 3000

app.listen(PORT,  ()=> {
    console.log(`server is running on port ${PORT}`)
})

app.use('/api',AuthRoute)
app.use('/inco',Incomerout)
app.use('/exp',Expenserout)
app.use('/ref',Refuelingrout)
app.use('/rou',Routerout)
//app.use('/ser',serviceRoute)


