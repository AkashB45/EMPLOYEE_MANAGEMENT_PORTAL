import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../index.css'; // Ensure you have the correct path to your CSS file
import { Zoom, Fade } from 'react-awesome-reveal'; // Importing animations from react-awesome-reveal

const LandingPage = () => {
  return (
    <div className="landing-page bg-gray-50 min-h-screen flex flex-col">
      {/* Header */}
      <header className="bg-[#071952] text-white py-4 shadow-md fixed w-full z-10 animate-fade-in-down">
        <div className="container mx-auto flex justify-around items-center">
          <h1 className="text-3xl font-bold">OnBoardMaster</h1>
          <nav>
            <ul className="flex space-x-4">
              <li><a href="#features" className="hover:underline">Features</a></li>
              <li><a href="#about" className="hover:underline">About</a></li>
              <li><a href="#testimonials" className="hover:underline">Testimonials</a></li>
              <li><a href="#contact" className="hover:underline">Contact</a></li>
            </ul>
          </nav>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-grow mt-16">
        {/* Hero Section */}
        
<section className="relative h-screen bg-cover bg-center animate-fade-in" style={{ backgroundImage: 'url(https://img.freepik.com/free-photo/male-executive-shaking-hands-with-female-coworker-teamwork-introduction_1163-3928.jpg?t=st=1720716406~exp=1720720006~hmac=ca75ad35ca1edf3ba3e2601bde3d91f52e1cd2046dcf836829251cb96c856143&w=996)' }}>
  <div className="absolute inset-0 bg-black opacity-50"></div>
  <div className="relative z-10 container mx-auto text-center text-white flex flex-col justify-center h-full">
    <h2 className="text-5xl md:text-6xl font-bold mb-4 animate-bounce">Ready to streamline your employee management?</h2>
    <a href="#features" className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded-full transform hover:scale-110 transition duration-300 inline-block mt-4 text-sm sm:text-base mx-auto">Let's Get Started</a>
  </div>
</section>


        {/* Features Section */}
        <section id="features" className="py-20 bg-white">
          <div className="container mx-auto text-center">
            <h2 className="text-3xl font-bold mb-10">Key Features</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Zoom duration={1000}>
                <div className="card shadow-lg p-6 rounded-lg transform hover:scale-105 transition duration-300">
                  <img src="https://img.freepik.com/free-vector/flat-design-positive-working-environment-illustration_23-2151093398.jpg?t=st=1720685155~exp=1720688755~hmac=7fae73174eb2591180613e4e222af5d49a38f89cff762fe01d5c54f10654cf1e&w=740" alt="Onboarding Process" className="w-full h-48 object-cover rounded-md mb-4" />
                  <h3 className="text-xl font-bold mb-2">Onboarding Process</h3>
                  <p>Guide through every step of the onboarding process, ensuring no detail is overlooked.</p>
                </div>
              </Zoom>
              <Zoom duration={1000}>
                <div className="card shadow-lg p-6 rounded-lg transform hover:scale-105 transition duration-300">
                  <img src="https://img.freepik.com/free-vector/business-people-work-together-project-analysis-strategy-two-female-male-professional-employees-planning-project-young-woman-drinking-coffee-man-sitting-with-laptop-managers-teamwork_575670-2012.jpg?t=st=1720685292~exp=1720688892~hmac=db6e5e117a97e208b3f1b7132c4314a1a1709a1c8675497c39bbd9ca55fb90cb&w=996" alt="Interview Records" className="w-full h-48 object-cover rounded-md mb-4" />
                  <h3 className="text-xl font-bold mb-2">Interview Records</h3>
                  <p>Keep a detailed record of each applicant’s interview history, including dates, feedback, and outcomes.</p>
                </div>
              </Zoom>
              <Zoom duration={1000}>
                <div className="card shadow-lg p-6 rounded-lg transform hover:scale-105 transition duration-300">
                  <img src="https://img.freepik.com/free-vector/business-team-discussing-project_74855-6272.jpg?t=st=1720684943~exp=1720688543~hmac=ab04614d7ea6b7155ffdbf36f3ec7cf2e268ddf0cae4bbc39753ab1bbfe9de9f&w=1060" alt="Real-Time Updates" className="w-full h-48 object-cover rounded-md mb-4" />
                  <h3 className="text-xl font-bold mb-2">Real-Time Updates</h3>
                  <p>Stay informed with real-time status updates on each applicant, helping you make timely decisions.</p>
                </div>
              </Zoom>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="py-20 bg-gray-100 relative">
          <div className="container mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">About OnBoardMaster</h2>
            <p className="text-lg mb-6">
              OnBoardMaster is a comprehensive employee management system designed to streamline the onboarding process and manage employee data efficiently. Our platform offers a range of features to ensure a smooth and organized onboarding experience for new hires, while also providing valuable tools for managing existing employees.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <Fade direction="up" duration={1000}>
                <div className="bg-white p-6 rounded-lg shadow-lg transform hover:scale-105 transition duration-300 bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 text-white">
                  <h3 className="text-2xl font-bold mb-4">Our Mission</h3>
                  <p>
                    Our mission is to simplify the onboarding process and enhance employee management through innovative technology. We aim to provide a user-friendly platform that supports HR professionals and managers in their daily tasks, improving overall efficiency and productivity.
                  </p>
                </div>
              </Fade>
              <Fade direction="up" duration={1000}>
                <div className="bg-white p-6 rounded-lg shadow-lg transform hover:scale-105 transition duration-300 bg-gradient-to-r from-green-500 via-green-600 to-green-700 text-white">
                  <h3 className="text-2xl font-bold mb-4">Why Choose Us</h3>
                  <p>
                    With OnBoardMaster, you can ensure a seamless onboarding experience, keep accurate records of employee data, and stay updated with real-time information. Our platform is designed with a focus on user experience, security, and reliability, making it the ideal choice for organizations of all sizes.
                  </p>
                </div>
              </Fade>
            </div>
          </div>
        </section>

       {/* New Section with Image and Content */}
<section className="py-20 bg-gray-100 flex items-center">
  <div className="container mx-auto flex flex-col md:flex-row items-center">
    <Fade direction="left" duration={1500} className="w-full md:w-1/2 mb-8 md:mb-0 md:mr-8">
      <div className="w-full">
        <h2 className="text-3xl font-bold mb-4">Efficient and Organized</h2>
        <p className="text-lg mb-6">
          OnBoardMaster provides a seamless experience for managing employee data and onboarding processes. With real-time updates and detailed records, you can ensure that every step is accounted for, making your HR tasks more efficient and organized.
        </p>
        <ul className="list-disc list-inside">
          <li>Streamlined onboarding process</li>
          <li>Comprehensive interview records</li>
          <li>Real-time status updates</li>
          <li>User-friendly platform</li>
        </ul>
      </div>
    </Fade>
    <Fade direction="right" duration={1500} className="w-full md:w-1/2">
      <div className="w-full h-full">
        <img src="https://img.freepik.com/free-photo/close-up-woman-working-laptop_23-2149300650.jpg?t=st=1720716295~exp=1720719895~hmac=3d31385b3d64331880ac8559128f35e9587e885ff8ab9d6837974ad6ad19a011&w=996" className="w-full h-full object-cover rounded-lg shadow-lg" />
      </div>
    </Fade>
  </div>
</section>


        {/* Testimonials Section */}
        <section id="testimonials" className="py-20 bg-white">
  <div className="container mx-auto text-center">
    <h2 className="text-3xl font-bold mb-10">What Our Clients Say</h2>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      <div className="card bg-blue-100 shadow-lg p-6 rounded-lg transform hover:scale-105 transition duration-300">
        <p className="text-lg italic mb-4 text-blue-900">"OnBoardMaster has transformed our onboarding process. It's user-friendly and has made our HR tasks so much easier!"</p>
        <p className="font-bold text-blue-800">- Jane Doe, HR Manager</p>
      </div>
      <div className="card bg-green-100 shadow-lg p-6 rounded-lg transform hover:scale-105 transition duration-300">
        <p className="text-lg italic mb-4 text-green-900">"The real-time updates feature is a game-changer. We can now track every step of the onboarding process with ease."</p>
        <p className="font-bold text-green-800">- John Smith, CEO</p>
      </div>
      <div className="card bg-purple-100 shadow-lg p-6 rounded-lg transform hover:scale-105 transition duration-300">
        <p className="text-lg italic mb-4 text-purple-900">"I highly recommend OnBoardMaster. It has improved our efficiency and helps us stay organized."</p>
        <p className="font-bold text-purple-800">- Sarah Lee, Operations Manager</p>
      </div>
    </div>
  </div>
</section>


      </main>

      {/* Footer */}
      <footer className="bg-[#071952] text-white py-8">
        <div className="container mx-auto text-center">
          <p>&copy; 2024 OnBoardMaster. All rights reserved.</p>
          <p>Designed with <span className="text-teal-500">&hearts;</span> by Your Team</p>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;