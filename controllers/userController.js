
const userModel = require('../models/userModel')


//login call back function

const loginController = async(req,res) => {


    try {

        //desstructure user login data 

        const {email,password} = req.body
        await userModel.findOne({email,password});
        if(!user) {
            return res.status(404).send("User Not Found")
        }

        res.status(200).json({
            success:true,
            user,
        })
        
    } catch (error) {
        res.status(400).json({
            success:false,
            error,
        })
    }

}


//register callback function 

const registerController = async(req,res) => {

    try {

        const newUser = new userModel(req.body)
        await newUser.save()
        res.status(201).json({
            success:true,
            newUser
        })
        
    } catch (error) {


        res.status(400).json({
            success:false,
            error
        })
        
    }

}


module.exports = {loginController,registerController};