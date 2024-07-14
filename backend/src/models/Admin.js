const mongoose = require('mongoose');
const adminSchema = new mongoose.Schema({
    companyName: { type: String, required: true },
    legalEntityType: { type: String, required: true }, // LLC, Corporation, etc.
    industry: { type: String, required: true },
    companyWebsite: { type: String, required: true },
    companyAddress: { type: String, required: true },
    country: { type: String, required: true },
    state: { type: String, required: true },
    city: { type: String, required: true },
    zipCode: { type: String, required: true },
    phoneNumber: { type: String, required: true },
    companyEmail: { type: String, required: true },
    primaryContact: {
        fullName: { type: String, required: true },
        jobTitle: { type: String, required: true },
        emailAddress: { type: String, required: true },
        phoneNumber: { type: String, required: true }
    },
    adminDetails: {
        username: { type: String, required: true },
        password: { type: String, required: true },
        securityQuestion: { type: String, required: true },
        securityAnswer: { type: String, required: true }
    },
    users: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }],
    applicants: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Applicant' }],
    jobs: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Jobs' }]
});

const Admin = mongoose.model('Admin', adminSchema);

module.exports = Admin;
