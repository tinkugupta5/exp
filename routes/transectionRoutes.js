// const { Router } = require('express')
const express = require('express')
const {addTransection,getAllTransection,editTransection} = require("../controllers/transectionCtrl")

// const transectionCtrl = require(./transactionCtrl.js)

//router Object 
const router = express.Router()

//routes

//add transection POST Method
router.post('/add-transection',addTransection)

//edit transection POST Method
router.post('/edit-transection',editTransection)


//get transections
router.post('/get-transection',getAllTransection)


//export

module.exports = router;


// edit and del  3:55 