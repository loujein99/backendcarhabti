const express = require('express')
const  router = express.Router()


const refuelingController  = require('../Controllers/refuelingController')




 
router.post('/ref', refuelingController.ref)
router.get('/show', refuelingController.Show)
router.post('/index', refuelingController.index)
router.post('/delete', refuelingController.destroy)
router.post('/update', refuelingController.update)


module.exports= router