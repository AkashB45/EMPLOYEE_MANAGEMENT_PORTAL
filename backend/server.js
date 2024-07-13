console.log("Akash");
import express from 'express';
import cors from 'cors';
import morgan from 'morgan';
// import {mongoose} from './src/database/mongodb.js'
const app = express();

app.use(cors())
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(morgan('tiny'))
app.disable('x-powered-by');
const PORT = process.env.PORT || 4000;

app.get('/',(req,res)=>{
    res.status(201).json("Home GET Request");
})

app.listen(PORT,()=>{
    console.log(`Server is running on port ${PORT}`);
})


