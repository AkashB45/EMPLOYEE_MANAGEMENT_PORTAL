const mongoose = require('../database/mongodb'); // Ensure you have the correct path to your MongoDB connection file

const applicantSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true },
    contactNo: { type: Number, required: true,max:10},
    position: { type: String, required: true ,unique:true},
    department: { type: String, required: true ,unique:true},
    resume: { type: String, required: true },
    qualification: { type: String, required: true },
    experience: { type: String, required: true },
    skills: { type: [String], required: true },
    status: { type: String, required: true ,default:"New"}
});

const Applicant = mongoose.model("Applicant", applicantSchema);

module.exports = Applicant;
