import React from 'react';

const Home = () => {
  return (
    <div className="bg-[#EBF4F6] min-h-screen font-sans">
      {/* Header section */}
      <header className="bg-[#071952] text-white py-6">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl font-bold text-center">Welcome to OnboardMaster</h1>
          <p className="text-lg text-center mt-2">
            Transform your employee management with our intuitive interface.
          </p>
        </div>
      </header>

      {/* Main content section */}
      <main className="container mx-auto px-4 py-8">

        {/* Enhanced paragraph section */}
        <section className="bg-gray-200 rounded-lg shadow-md p-8 mb-8">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-semibold mb-4 text-gray-800">Streamline Your Employee Onboarding Process</h2>
            <p className="text-lg leading-relaxed mb-4">
              OnboardMaster guides you through every step of the onboarding process, ensuring no detail is overlooked. Keep a detailed record of each applicant’s interview history, including dates, feedback, and outcomes, all in one place. Stay informed with real-time status updates on each applicant, helping you make timely decisions and keep your team on the same page.
            </p>
            <p className="text-lg leading-relaxed">
              Our application is meticulously designed with a focus on user experience, making it seamless to navigate and manage all your employee data efficiently. We prioritize the security of your data, ensuring that all information is stored safely and can be accessed reliably whenever needed.
            </p>
          </div>
        </section>

        {/* Key Features section */}
        <section className="bg-gray-200 rounded-lg shadow-md p-8 mb-8">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-semibold mb-4 text-gray-800">Key Features</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {/* Feature card 1 */}
              <div className="bg-[#071952] text-white rounded-lg p-6">
                <h3 className="text-xl font-semibold mb-2">Simplify Onboarding</h3>
                <p className="text-base">Our intuitive interface guides you through every step.</p>
              </div>

              {/* Feature card 2 */}
              <div className="bg-[#071952] text-white rounded-lg p-6">
                <h3 className="text-xl font-semibold mb-2">Interview Tracking</h3>
                <p className="text-base">Keep track of each applicant’s interview history.</p>
              </div>

              {/* Feature card 3 */}
              <div className="bg-[#071952] text-white rounded-lg p-6">
                <h3 className="text-xl font-semibold mb-2">Real-time Updates</h3>
                <p className="text-base">Stay informed with real-time status updates.</p>
              </div>

              {/* Feature card 4 */}
              <div className="bg-[#071952] text-white rounded-lg p-6">
                <h3 className="text-xl font-semibold mb-2">User-Friendly Interface</h3>
                <p className="text-base">Designed for easy navigation and management.</p>
              </div>
            </div>
          </div>
        </section>

      </main>
    </div>
  );
};

export default Home;
