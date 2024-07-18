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
        admins: [{ name: '', email:'', password: ''}],
        agreedToTerms: false
    });

    const backgroundImage = "https://img.freepik.com/free-vector/vector-grunge-color-texture_2065-554.jpg?t=st=1720893626~exp=1720897226~hmac=122921af79b70e451af9b31c34ac0a9f1f8f99a0d03c510c59a58964116489b9&w=740";

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

    const handleAdminChange = (index, e) => {
        const { name, value } = e.target;
        const newAdmins = [...formData.admins];
        newAdmins[index][name] = value;
        setFormData({ ...formData, admins: newAdmins });
    };

    const addAdmin = () => {
        setFormData(prevState => ({
            ...prevState,
            admins: [...prevState.admins, { name: '', email: '', password: '' }]
        }));
    };

    const removeAdmin = (index) => {
        const newAdmins = formData.admins.filter((_, i) => i !== index);
        setFormData({ ...formData, admins: newAdmins });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission here (e.g., API call, validation)
        console.log(formData);
    };

    return (
        <div className="min-h-screen flex justify-center items-center py-12 px-4 sm:px-6 lg:px-8 bg-[#EBF4F6]"
            style={{
                backgroundImage: `url(${backgroundImage})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
            }}>
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
                                <input id="companyZipCode" name="companyZipCode" type="number" onChange={handleChange} className="form-control rounded-lg shadow-sm focus:ring-indigo-500 focus:border-indigo-500" placeholder="Zip Code" />
                            </div>
                            <div>
                                <label htmlFor="companyPhoneNumber" className="block text-black font-medium mb-1">Phone Number</label>
                                <input id="companyPhoneNumber" name="companyPhoneNumber" type="number" onChange={handleChange} className="form-control rounded-lg shadow-sm focus:ring-indigo-500 focus:border-indigo-500" placeholder="Phone Number"  />
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
                                <input id="contactPhoneNumber" name="contactPhoneNumber" type="number" onChange={handleChange} className="form-control rounded-lg shadow-sm focus:ring-indigo-500 focus:border-indigo-500" placeholder="Phone Number" />
                            </div>
                        </div>
                    </div>

                    {/* Admin Details (Page 3) */}
                    <div className="space-y-4">
                        <h3 className="text-xl font-semibold text-black">Admin Details</h3>
                        {formData.admins.map((admin, index) => (
                            <div key={index} className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                <div>
                                    <label htmlFor={`username-${index}`} className="block text-black font-medium mb-1">Username</label>
                                    <input id={`username-${index}`} name="username" type="text" required value={admin.name} onChange={(e) => handleAdminChange(index, e)} className="form-control rounded-lg shadow-sm focus:ring-indigo-500 focus:border-indigo-500" placeholder="Username" />
                                </div>
                                <div>
                                    <label htmlFor={`email-${index}`} className="block text-black font-medium mb-1">Email</label>
                                    <input id={`email-${index}`} name="email" type="email" required value={admin.email} onChange={(e) => handleAdminChange(index, e)} className="form-control rounded-lg shadow-sm focus:ring-indigo-500 focus:border-indigo-500" placeholder="Email" />
                                </div>
                                <div>
                                    <label htmlFor={`password-${index}`} className="block text-black font-medium mb-1">Password</label>
                                    <input id={`password-${index}`} name="password" type="password" required value={admin.password} onChange={(e) => handleAdminChange(index, e)} className="form-control rounded-lg shadow-sm focus:ring-indigo-500 focus:border-indigo-500" placeholder="" />
                                </div>
                                
                                {index > 0 && (
                                    <div className="col-span-2 text-right">
                                        <button type="button" onClick={() => removeAdmin(index)} className="text-red-500 hover:text-red-700">
                                            Remove Admin
                                        </button>
                                    </div>
                                )}
                            </div>
                        ))}
                        <div className="col-span-2 text-right">
                            <button type="button" onClick={addAdmin} className="text-blue-500 hover:text-blue-700">
                                Add Another Admin
                            </button>
                        </div>
                    </div>

                    {/* Agreement to Terms */}
                    <div className="space-y-4">
                        <div>
                            <label htmlFor="agreedToTerms" className="flex items-center">
                                <input id="agreedToTerms" name="agreedToTerms" type="checkbox" required onChange={handleChange} className="mr-2 leading-tight" />
                                <span className="text-sm text-black">
                                    I agree to the
                                    <Link to="/Terms&Conditions" className="text-indigo-600 underline">Terms of Service</Link>
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
                    <Link className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800" to="/AdminLogIn">
                        Already have an Account? LogIn
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default SignUp;
