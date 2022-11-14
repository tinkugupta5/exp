const express = require('express')
const cors = require('cors')
const morgan = require('morgan')
const dotenv = require('dotenv')
const colors = require('color')
const connectDB = require("./config/connectDB")

//CONFIG DOT ENV FILE

dotenv.config();

// database call
connectDB()

// rest object
const app = express();

//middlewares

app.use(morgan("dev"));
app.use(express.json())
app.use(cors());

//routes

// app.get("/", (req,res) => {
//     res.send("<h1>Hellow form server</h1>")
// })

app.use('/api/v1/users',require('./routes/userRoute'))

//port 

const PORT = 8080 || process.env.PORT;

// LISTEN SERVER

app.listen(PORT,() => {
    console.log(`Server running on port ${PORT}`);
})

