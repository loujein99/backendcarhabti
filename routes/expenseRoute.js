const express = require('express')
const  router = express.Router()


const expenseController  = require('../Controllers/expenseController')
router.post('/exp', expenseController.exp)
router.get('/show', expenseController.Show)
router.post('/index', expenseController.findID)
router.post('/delete', expenseController.destroy)
router.post('/update', expenseController.update)


module.exports= router