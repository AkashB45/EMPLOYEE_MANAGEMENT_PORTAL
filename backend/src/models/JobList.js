const mongoose = require('../database/mongodb'); // Ensure you have the correct path to your MongoDB connection file

const postSchema = new mongoose.Schema({
    id: { type: Number, required: true },
    title: { type: String, required: true },
    company: { type: String, required: true },
    location: { type: String, required: true },
    type: { type: String, required: true,default:"Full-Time"},
    salary: { type: String, required: true },
    description: { type: String, required: true },
    postedDate: { type: Date, required: true ,default:()=>new Date()},
    skills: { type: [String], required: true }
});

const Post = mongoose.model('Post', postSchema);

module.exports = Post;
