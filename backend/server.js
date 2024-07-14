console.log("Akash");
const express = require('express');
const cors = require('cors');
const morgan = require('morgan')
const path = require('path')
const app = express();
const userRoutes = require('./src/routes/userRoute')
app.use(cors())
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(morgan('tiny'))
app.disable('x-powered-by');
const PORT = process.env.PORT || 4000;

app.get('/',(req,res)=>{
    res.status(201).json("Home GET Request");
})
app.use('/user',userRoutes)

app.listen(PORT,()=>{
    console.log(`Server is running on port ${PORT}`);
})


