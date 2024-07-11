import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../index';

const TermsAndConditions = () => {
  return (
    <div className="min-h-screen bg-[#EBF4F6] py-10 px-5 sm:px-20">
      <div className="container bg-white p-10 rounded-lg shadow-lg mx-auto">
        <h1 className="text-4xl font-bold mb-8 text-red-600 border-b-4 border-[#37B7C3] pb-2 text-center">Terms and Conditions</h1>
        
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-[#071952]">Introduction</h2>
          <p className="text-[#071952] leading-relaxed">
            Welcome to <strong>OnBoardMaster Employee Management Portal</strong>. By accessing or using our portal, you agree to comply with and be bound by the following terms and conditions. Please read them carefully. If you do not agree to these terms, you should not use this portal.
          </p>
        </section>
        
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-[#071952]">Definitions</h2>
          <p className="text-[#071952] leading-relaxed"><strong>"Portal"</strong> refers to the Employee Management Portal provided by OnBoardMaster.</p>
          <p className="text-[#071952] leading-relaxed"><strong>"User"</strong> refers to any individual or entity who accesses and uses the Portal.</p>
          <p className="text-[#071952] leading-relaxed"><strong>"We", "Us", "Our"</strong> refers to OnBoardMaster.</p>
        </section>
        
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-[#071952]">Use of the Portal</h2>
          <p className="text-[#071952] leading-relaxed"><strong>Eligibility:</strong> You must be at least 18 years old to use this portal. By using the portal, you represent and warrant that you are at least 18 years old and have the legal capacity to enter into this agreement.</p>
          <p className="text-[#071952] leading-relaxed"><strong>Account Registration:</strong> To access certain features of the portal, you may need to register an account. You agree to provide accurate and complete information during the registration process and to keep this information up to date.</p>
          <p className="text-[#071952] leading-relaxed"><strong>User Responsibilities:</strong> You are responsible for maintaining the confidentiality of your account credentials and for all activities that occur under your account. You agree to notify us immediately of any unauthorized use of your account or any other breach of security.</p>
        </section>
        
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-[#071952]">User Conduct</h2>
          <p className="text-[#071952] leading-relaxed"><strong>Prohibited Activities:</strong> You agree not to:</p>
          <ul className="list-disc list-inside ml-6 text-[#071952] leading-relaxed">
            <li>Use the portal for any unlawful purpose.</li>
            <li>Upload or transmit any content that is offensive, defamatory, or infringing on any third party’s rights.</li>
            <li>Interfere with the operation of the portal or any other user's use of the portal.</li>
          </ul>
          <p className="text-[#071952] leading-relaxed"><strong>Compliance with Laws:</strong> You agree to comply with all applicable local, state, national, and international laws and regulations in your use of the portal.</p>
        </section>
        
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-[#071952]">Intellectual Property</h2>
          <p className="text-[#071952] leading-relaxed"><strong>Ownership:</strong> All content and materials available on the portal, including but not limited to text, graphics, logos, icons, images, audio clips, video clips, and software, are the property of OnBoardMaster or its licensors and are protected by intellectual property laws.</p>
          <p className="text-[#071952] leading-relaxed"><strong>License:</strong> We grant you a limited, non-exclusive, non-transferable license to access and use the portal for personal or internal business purposes.</p>
        </section>
        
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-[#071952]">Data Privacy</h2>
          <p className="text-[#071952] leading-relaxed"><strong>Privacy Policy:</strong> Your use of the portal is also governed by our Privacy Policy, which can be found <a href="link-to-privacy-policy" className="text-[#37B7C3] underline">here</a>. By using the portal, you consent to the collection, use, and sharing of your information as described in our Privacy Policy.</p>
        </section>
        
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-[#071952]">Disclaimers and Limitation of Liability</h2>
          <p className="text-[#071952] leading-relaxed"><strong>Disclaimer of Warranties:</strong> The portal is provided on an "as-is" and "as-available" basis. We make no warranties, expressed or implied, regarding the portal's operation or the information, content, or materials included on the portal.</p>
          <p className="text-[#071952] leading-relaxed"><strong>Limitation of Liability:</strong> In no event shall OnBoardMaster be liable for any indirect, incidental, special, consequential, or punitive damages arising out of or in connection with your use of the portal.</p>
        </section>
        
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-[#071952]">Termination</h2>
          <p className="text-[#071952] leading-relaxed">We reserve the right to terminate or suspend your access to the portal, without notice and for any reason, including but not limited to a breach of these terms.</p>
        </section>
        
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-[#071952]">Changes to Terms and Conditions</h2>
          <p className="text-[#071952] leading-relaxed">We may update these terms and conditions from time to time. We will notify you of any changes by posting the new terms on the portal. Your continued use of the portal after any such changes constitutes your acceptance of the new terms.</p>
        </section>
        
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-[#071952]">Governing Law</h2>
          <p className="text-[#071952] leading-relaxed">These terms and conditions are governed by and construed in accordance with the laws of Tamil Nadu, India, and you agree to submit to the exclusive jurisdiction of the courts located in Tamil Nadu for the resolution of any disputes.</p>
        </section>
        
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-[#071952]">Contact Information</h2>
          <p className="text-[#071952] leading-relaxed">If you have any questions or concerns about these terms and conditions, please contact us at:</p>
          <p className="text-[#071952] leading-relaxed">
            <strong>OnBoardMaster</strong><br />
            1234 Business Park,<br />
            Anna Salai, Chennai,<br />
            Tamil Nadu, India.<br />
            Email: <a href="mailto:support@onboardmaster.com" className="text-[#37B7C3] underline">support@onboardmaster.com</a><br />
            Phone: +91-44-12345678
          </p>
        </section>
      </div>
    </div>
  );
};

export default TermsAndConditions;