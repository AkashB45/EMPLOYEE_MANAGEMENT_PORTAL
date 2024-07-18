const userModel = require('../models/User')
const { v4: uuidv4 } = require('uuid');
const {format} = require('date-fns')
const postUser = async (req, res) => {
    try {
        const {name, position, email, location, department } = req.body;

        // Check if the email already exists
        const existingUser = await userModel.findOne({ email: email });
        if (existingUser) {
            return res.status(400).send({ error: "Email already existing.." });
        }

        // If the email does not exist, create a new user
        const newUser = new userModel({
             // Assuming id should be generated using uuid
            name,
            position,
            email,
            password: uuidv4(), // Generate a password using uuidv4 or use req.body.password if provided
            location,
            department,
            joinDate: format(Date.now(),"yyyy-MM-dd"),
            status: "Active",
        });

        // Save the new user to the database
        await newUser.save();
        res.status(201).send({ msg: "User Created Successfully" });
    } catch (error) {
        res.status(500).send({ error: error.message });
    }
};

const getUsers = async (req, res) => {
    try {
        const user = await userModel.find()
        res.status(200).json(user)
    } catch (error) {
        res.status(500).json(error)
    }
}

const getUserbyId =async(req,res)=>{
    try{
        const user = await userModel.findById(req.params.id)
        res.status(200).json(user)
    }catch(error){
        res.status(500).json(error)
    }
}


const updateUser = async (req, res) => {
    try {
        const user = await userModel.findByIdAndUpdate(req.params.id, req.body, { new: true })
        res.status(200).json(user)
    } catch (error) {
        res.status(500).json(error)
    }
}

const deleteUser = async (req, res) => {
    try {
        const user = await userModel.findByIdAndDelete(req.params.id)
        res.status(200).json("Delete successfully")
    } catch (error) {
        res.status(500).json(error)
    }
}

module.exports = { getUsers, postUser, updateUser, deleteUser, getUserbyId }
