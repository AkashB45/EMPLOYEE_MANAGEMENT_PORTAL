import React from 'react';

const ContactPage = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="max-w-3xl w-full bg-white p-8 rounded-lg shadow-lg text-center">
        <h1 className="text-4xl font-bold text-[#071952] mb-8">Contact Us</h1>
        
        {/* Contact Information */}
        <div className="text-left mb-8">
          <p className="text-lg text-gray-800 mb-4">
            OnBoardMaster is dedicated to streamlining employee management processes with precision and excellence. Contact us for inquiries, collaborations, or to schedule a demo of our platform.
          </p>
          <div className="flex flex-col space-y-2">
            <p className="text-lg text-gray-800"><strong>Email:</strong> <a href="mailto:info@onboardmaster.com" className="text-[#37B7C3] underline">info@onboardmaster.com</a></p>
            <p className="text-lg text-gray-800"><strong>Phone:</strong> +1-800-123-4567</p>
          </div>
        </div>
        
        {/* Offices */}
        <div className="text-left mb-8">
          <p className="text-lg text-gray-800"><strong>Headquarters:</strong></p>
          <p className="text-lg text-gray-800">1234 Business Park, Anna Salai, Chennai, Tamil Nadu, India.</p>
        </div>

        {/* Additional Information */}
        <div className="text-left mb-8">
          <p className="text-lg text-gray-800"><strong>What You Get When Asking Your Question:</strong></p>
          <ul className="list-disc list-inside text-lg text-gray-800">
            <li>Less than 12-hour response to your inquiry.</li>
            <li>Thoroughness and expertise of our team.</li>
            <li>Personalized plan of action summarized in an email follow-up.</li>
          </ul>
        </div>

        {/* Contact Form */}
        <div className="text-left">
          <p className="text-lg text-gray-800 mb-4">Fill out the form below and we'll get back to you within 12 hours:</p>
          <form className="grid grid-cols-1 gap-4">
            <div className="grid grid-cols-2 gap-4">
              <input type="text" placeholder="First Name *" className="p-3 border border-gray-300 rounded-md focus:outline-none focus:border-[#37B7C3]" />
              <input type="text" placeholder="Last Name *" className="p-3 border border-gray-300 rounded-md focus:outline-none focus:border-[#37B7C3]" />
            </div>
            <input type="email" placeholder="Email Address *" className="p-3 border border-gray-300 rounded-md focus:outline-none focus:border-[#37B7C3]" />
            <input type="tel" placeholder="Phone Number" className="p-3 border border-gray-300 rounded-md focus:outline-none focus:border-[#37B7C3]" />
            <textarea rows="4" placeholder="How may we help you? *" className="p-3 border border-gray-300 rounded-md focus:outline-none focus:border-[#37B7C3]" />
            
            <button type="submit" className="bg-[#37B7C3] text-white py-3 px-6 rounded-md hover:bg-blue-700 transition duration-300 ease-in-out mt-4">Submit</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;