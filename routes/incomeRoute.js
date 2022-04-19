const express = require('express')
const  router = express.Router()


const incomeController  = require('../Controllers/incomeController')




 
router.post('/inc', incomeController.inc)
router.get('/show', incomeController.Show)
router.post('/index', incomeController.index)
router.post('/delete', incomeController.destroy)
router.post('/update', incomeController.update)


module.exports= router