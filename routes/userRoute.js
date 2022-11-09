const { Router } = require('express')
const express = require('express')
const {loginController, registerController} = require('../controllers/userController')
//router Object 

const router = express.Router()

//router
//POST || LOGIN user

router.post('/login',loginController)

//POST || Register user

router.post('/register',registerController)


//export

module.exports = router