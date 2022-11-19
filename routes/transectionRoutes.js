// const { Router } = require('express')
const express = require('express')
const {addTransection,getAllTransection} = require("../controllers/transectionCtrl")

// const transectionCtrl = require(./transactionCtrl.js)

//router Object 
const router = express.Router()

//routes

//add transection POST Method
router.post('/add-transection',addTransection)


//get transections
router.post('/get-transection',getAllTransection)


//export

module.exports = router;