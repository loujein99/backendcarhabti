const express = require('express')
const  router = express.Router()


const AuthController  = require('../Controllers/UserAuth')




 
router.post('/register'    , AuthController.register)
router.post('/login',AuthController.login)
router.post("/reEnvoyerConfirmationEmail", AuthController.reEnvoyerConfirmationEmail);
router.get("/confirmation/:token", AuthController.confirmation);




module.exports= router