const mongoose = require('../database/mongodb'); // Ensure you have the correct path to your MongoDB connection file

const applicantSchema = new mongoose.Schema({
    id: { type: Number, required: true, unique: true },
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    contactNo: { type: String, required: true},
    position: { type: String, required: true },
    resume: { type: String, required: true },
    status: { type: String, required: true ,default:"New"}
});

const Applicant = mongoose.model("Applicant", applicantSchema);

module.exports = Applicant;
