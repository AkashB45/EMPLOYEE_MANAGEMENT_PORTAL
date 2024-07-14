
const userRoutes = require('express').Router();

userRoutes.route('/userRegisteration').get((req,res)=>{
    res.status(201).json("User Registeration GET Request")})



module.exports =  userRoutes;