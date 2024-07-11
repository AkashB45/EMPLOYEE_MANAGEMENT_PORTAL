import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';

const SignUp = () => {
    const [formData, setFormData] = useState({
        companyName: '',
        legalEntityType: '',
        industry: '',
        companyWebsite: '',
        companyAddress: '',
        companyCountry: '',
        companyState: '',
        companyCity: '',
        companyZipCode: '',
        companyPhoneNumber: '',
        companyEmail: '',
        contactFullName: '',
        contactJobTitle: '',
        contactEmail: '',
        contactPhoneNumber: '',
        username: '',
        password: '',
        confirmPassword: '',
        securityQuestion: '',
        securityAnswer: '',
        agreedToTerms: false
    });

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;

        // Validate phone number length
        if ((name === 'companyPhoneNumber' || name === 'contactPhoneNumber') && value.length > 10) {
            return;
        }

        setFormData(prevState => ({
            ...prevState,
            [name]: type === 'checkbox' ? checked : value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission here (e.g., API call, validation)
        console.log(formData);
    };

    return (
        <div className="min-h-screen  flex justify-center items-center py-12 px-4 sm:px-6 lg:px-8 bg-[#EBF4F6]">
            <div className="absolute inset-0 opacity-60"></div>
            <div className="max-w-4xl w-full bg-white bg-opacity-90 rounded-lg shadow-xl p-8 relative z-10">
                <h2 className="text-3xl font-bold text-center text-black mb-6">Register Your Company</h2>
                <form className="space-y-6" onSubmit={handleSubmit}>
                    {/* Company Details (Page 1) */}
                    <div className="space-y-4">
                        <h3 className="text-xl font-semibold text-black">Company Details</h3>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            <div>
                                <label htmlFor="companyName" className="block text-black font-medium mb-1">Company Name</label>
                                <input id="companyName" name="companyName" type="text" required onChange={handleChange} className="form-control rounded-lg shadow-sm focus:ring-indigo-500 focus:border-indigo-500" placeholder="Company Name" />
                            </div>
                            <div>
                                <label htmlFor="legalEntityType" className="block text-black font-medium mb-1">Legal Entity Type</label>
                                <input id="legalEntityType" name="legalEntityType" type="text" onChange={handleChange} className="form-control rounded-lg shadow-sm focus:ring-indigo-500 focus:border-indigo-500" placeholder="LLC, Corporation, etc." />
                            </div>
                            <div>
                                <label htmlFor="industry" className="block text-black font-medium mb-1">Industry</label>
                                <input id="industry" name="industry" type="text" onChange={handleChange} className="form-control rounded-lg shadow-sm focus:ring-indigo-500 focus:border-indigo-500" placeholder="Industry" />
                            </div>
                            <div>
                                <label htmlFor="companyWebsite" className="block text-black font-medium mb-1">Company Website</label>
                                <input id="companyWebsite" name="companyWebsite" type="url" onChange={handleChange} className="form-control rounded-lg shadow-sm focus:ring-indigo-500 focus:border-indigo-500" placeholder="https://example.com" />
                            </div>
                            <div>
                                <label htmlFor="companyAddress" className="block text-black font-medium mb-1">Company Address</label>
                                <input id="companyAddress" name="companyAddress" type="text" required onChange={handleChange} className="form-control rounded-lg shadow-sm focus:ring-indigo-500 focus:border-indigo-500" placeholder="Address" />
                            </div>
                            <div>
                                <label htmlFor="companyCountry" className="block text-black font-medium mb-1">Country</label>
                                <input id="companyCountry" name="companyCountry" type="text" onChange={handleChange} className="form-control rounded-lg shadow-sm focus:ring-indigo-500 focus:border-indigo-500" placeholder="Country" />
                            </div>
                            <div>
                                <label htmlFor="companyState" className="block text-black font-medium mb-1">State</label>
                                <input id="companyState" name="companyState" type="text" onChange={handleChange} className="form-control rounded-lg shadow-sm focus:ring-indigo-500 focus:border-indigo-500" placeholder="State" />
                            </div>
                            <div>
                                <label htmlFor="companyCity" className="block text-black font-medium mb-1">City</label>
                                <input id="companyCity" name="companyCity" type="text" onChange={handleChange} className="form-control rounded-lg shadow-sm focus:ring-indigo-500 focus:border-indigo-500" placeholder="City" />
                            </div>
                            <div>
                                <label htmlFor="companyZipCode" className="block text-black font-medium mb-1">Zip Code</label>
                                <input id="companyZipCode" name="companyZipCode" type="text" onChange={handleChange} className="form-control rounded-lg shadow-sm focus:ring-indigo-500 focus:border-indigo-500" placeholder="Zip Code" />
                            </div>
                            <div>
                                <label htmlFor="companyPhoneNumber" className="block text-black font-medium mb-1">Phone Number</label>
                                <input id="companyPhoneNumber" name="companyPhoneNumber" type="tel" maxLength="10" onChange={handleChange} className="form-control rounded-lg shadow-sm focus:ring-indigo-500 focus:border-indigo-500" placeholder="Phone Number" />
                            </div>
                            <div>
                                <label htmlFor="companyEmail" className="block text-black font-medium mb-1">Company Email</label>
                                <input id="companyEmail" name="companyEmail" type="email" onChange={handleChange} className="form-control rounded-lg shadow-sm focus:ring-indigo-500 focus:border-indigo-500" placeholder="info@example.com" />
                            </div>
                        </div>
                    </div>

                    {/* Primary Contact (Page 2) */}
                    <div className="space-y-4">
                        <h3 className="text-xl font-semibold text-black">Primary Contact</h3>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            <div>
                                <label htmlFor="contactFullName" className="block text-black font-medium mb-1">Full Name</label>
                                <input id="contactFullName" name="contactFullName" type="text" required onChange={handleChange} className="form-control rounded-lg shadow-sm focus:ring-indigo-500 focus:border-indigo-500" placeholder="Full Name" />
                            </div>
                            <div>
                                <label htmlFor="contactJobTitle" className="block text-black font-medium mb-1">Job Title</label>
                                <input id="contactJobTitle" name="contactJobTitle" type="text" onChange={handleChange} className="form-control rounded-lg shadow-sm focus:ring-indigo-500 focus:border-indigo-500" placeholder="Job Title" />
                            </div>
                            <div>
                                <label htmlFor="contactEmail" className="block text-black font-medium mb-1">Email Address</label>
                                <input id="contactEmail" name="contactEmail" type="email" onChange={handleChange} className="form-control rounded-lg shadow-sm focus:ring-indigo-500 focus:border-indigo-500" placeholder="contact@example.com" />
                            </div>
                            <div>
                                <label htmlFor="contactPhoneNumber" className="block text-black font-medium mb-1">Phone Number</label>
                                <input id="contactPhoneNumber" name="contactPhoneNumber" type="tel" maxLength="10" onChange={handleChange} className="form-control rounded-lg shadow-sm focus:ring-indigo-500 focus:border-indigo-500" placeholder="Phone Number" />
                            </div>
                        </div>
                    </div>

                    {/* Username, Password, Security Questions (Page 3) */}
                    <div className="space-y-4">
                        <h3 className="text-xl font-semibold text-black">Admin Details</h3>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            <div>
                                <label htmlFor="username" className="block text-black font-medium mb-1">Username (Email)</label>
                                <input id="username" name="username" type="email" required onChange={handleChange} className="form-control rounded-lg shadow-sm focus:ring-indigo-500 focus:border-indigo-500" placeholder="Username (Email)" />
                            </div>
                            <div>
                                <label htmlFor="password" className="block text-black font-medium mb-1">Password</label>
                                <input id="password" name="password" type="password" required onChange={handleChange} className="form-control rounded-lg shadow-sm focus:ring-indigo-500 focus:border-indigo-500" placeholder="" />
                            </div>
                            <div>
                                <label htmlFor="confirmPassword" className="block text-black font-medium mb-1">Confirm Password</label>
                                <input id="confirmPassword" name="confirmPassword" type="password" required onChange={handleChange} className="form-control rounded-lg shadow-sm focus:ring-indigo-500 focus:border-indigo-500" placeholder="" />
                            </div>
                            <div>
                                <label htmlFor="securityQuestion" className="block text-black font-medium mb-1">Security Question</label>
                                <input id="securityQuestion" name="securityQuestion" type="text" onChange={handleChange} className="form-control rounded-lg shadow-sm focus:ring-indigo-500 focus:border-indigo-500" placeholder="Security Question" />
                            </div>
                            <div>
                                <label htmlFor="securityAnswer" className="block text-black font-medium mb-1">Security Answer</label>
                                <input id="securityAnswer" name="securityAnswer" type="text" onChange={handleChange} className="form-control rounded-lg shadow-sm focus:ring-indigo-500 focus:border-indigo-500" placeholder="Security Answer" />
                            </div>
                        </div>
                    </div>

                    {/* Agreement to Terms */}
                    <div className="space-y-4">
                        <div>
                            <label htmlFor="agreedToTerms" className="flex items-center">
                                <input id="agreedToTerms" name="agreedToTerms" type="checkbox" required onChange={handleChange} className="mr-2 leading-tight" />
                                <span className="text-sm text-black">
                                    I agree to the 
                                    <Link to={"/Terms&Conditions"} className="text-indigo-600 underline">Terms of Service</Link>
                                </span>
                            </label>
                        </div>
                    </div>

                    {/* Submit Button */}
                    <div className="flex items-center justify-center mt-6">
                        <button type="submit" className="w-1/2 bg-[#071952] hover:bg-[#071952] text-white font-bold py-2 px-4 rounded-lg focus:outline-none focus:shadow-outline transition duration-150">
                            Register
                        </button>
                    </div>
                </form>
                <div className="text-center mt-4">
            <Link
              className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800"
              to={"/AdminLogIn"}
            >
              Already have an Account? LogIn
            </Link>
          </div>
            </div>
        </div>
    );
};

export default SignUp;
