const mongoose = require('../database/mongodb'); // Ensure you have the correct path to your MongoDB connection file

const userSchema = new mongoose.Schema({
    name: { type: String, required: true },
    position: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    joinDate: { type: Date, required: true},
    status: { type: String, required: true ,default:"Active"},
    location: { type: String, required: true },
});

const User = mongoose.model("User", userSchema);

module.exports = User;
