const userModel = require('../models/User')

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

const postUser = async (req, res) => {
    try {
        const newUser = new userModel(req.body)
        await newUser.save()
        res.status(201).json("User created successfully")
    } catch (error) {
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
