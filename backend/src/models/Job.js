const mongoose = require('../database/mongodb'); // Ensure you have the correct path to your MongoDB connection file

const jobSchema = new mongoose.Schema({
    title: { type: String, required: true ,unique: true },
    description: { type: String, required: true },
    type: { type: String, required: true,default:"Full-Time"},
    salary: { type: String, required: true },
    postedDate: { type: Date, required: true},
    location: { type: String, required: true },
    qualification: { type: String, required: true },
    experience: { type: String, required: true },
    skills: { type: [String], required: true },
    vacancy: { type: Number, required: true },
    selected: { type: Number, required: true },
    rejected: { type: Number, required: true },
    inprogress: { type: Number, required: true },
    applicants: [{ type: Schema.Types.ObjectId, ref: 'Applicant' }]
});

const Jobs = mongoose.model('Jobs', jobSchema);

module.exports = Jobs;
