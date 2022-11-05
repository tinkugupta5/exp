const mongoose = require('mongoose')
const colors = require('color')

// craete a function to connect with database 

const connectDb = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URL);
        console.log(`Server Running on ${mongoose.connection.host}`.bgCyan.white)
    } catch (error) {
        console.log(`tttttt ${error}`.bgRed);
    }
}


module.exports = connectDb