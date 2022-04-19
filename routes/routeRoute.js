const express = require('express')
const  router = express.Router()


const routeController  = require('../Controllers/routeController')




 
router.post('/rou', routeController.rou)
router.get('/show', routeController.Show)
router.post('/index', routeController.index)
router.post('/delete', routeController.destroy)
router.post('/update', routeController.update)


module.exports= router