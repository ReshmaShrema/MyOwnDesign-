// importing  library
const express = require('express');
const env = require('dotenv');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const userRoutes = require('./routes/user')

const app = express();
env.config();




mongoose.connect(process.env.MONGO_DB_URL).then(() => {
    console.log('Database Connected');
});



// parsing middleware
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use('/api',userRoutes)

// app.get('/',(req,res,next)=>{
//     res.status(200).json({
//         message:"message form server"
//     })
// })


app.post('/data',(req,res,next)=>{
    res.status(200).json({
        message:req.body
    })
})



app.listen(process.env.PORT,()=>{
    console.log(`server running at port ${process.env.PORT}`)
})



