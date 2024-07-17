const mongoose = require('mongoose');
const companySchema = new mongoose.Schema({
    companyName: { type: String, required: true },
    legalEntityType: { type: String, required: true }, // LLC, Corporation, etc.
    industry: { type: String, required: true },
    companyWebsite: { type: String, required: true },
    companyAddress: { type: String, required: true },
    country: { type: String, required: true },
    state: { type: String, required: true },
    city: { type: String, required: true },
    zipCode: { type: Number, required: true  },
    phoneNumber: { type: Number, required: true ,max: 10},
    companyEmail: { type: String, required: true ,unique:true},
    primaryContact: {
        fullName: { type: String, required: true },
        jobTitle: { type: String, required: true },
        emailAddress: { type: String, required: true },
        phoneNumber: { type: Number, required: true ,max: 10}
    },
    adminDetails: [{type: mongoose.Schema.Types.ObjectId, ref: 'Admin'}],
    department:[{type: mongoose.Schema.Types.ObjectId, ref: 'Department'}],
});

const Company = mongoose.model('Company', companySchema);

module.exports = Company;
