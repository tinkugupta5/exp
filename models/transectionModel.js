const mongoose = require('mongoose')

const transectionSchema = new mongoose.Schema ({

    amount:{
        type:Number,
        required:[true,'amount is require']
    },
    category:{
        type:String,
        required:[true,'Category is require']
    },
    refrence:{
        type:String,
        
    },

    description:{
        type:String,
        required:[true,'desc is require']
    },

    date:{
        type:String,
        require:[true,'data is required']
    }

    
},{timestamps:true})

const transectionModel = mongoose.model('transections',transectionSchema)