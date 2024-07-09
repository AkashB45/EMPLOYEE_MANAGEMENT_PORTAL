import { Routes } from 'react-router-dom';
import './App.css';
import ApplicationForm from './components/ApplicationForm/ApplicationForm';
import Sidebar from './components/SideBar/SideBar';
import { Route } from 'react-router-dom';
import { FaBars } from 'react-icons/fa';
import { useState } from 'react';
import UserLogin from './components/Login/UserLogin';
import AdminLogin from './components/Login/AdminLogin';
import ForgotPassword from './components/Login/ForgotPassword';
import SignUp from './components/SignUp/SignUp';
import DashBoard from './components/DashBoard/DashBoard';
function App() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="App">
      {!isOpen && <button
          onClick={toggleSidebar}
          className="text-gray-800 mb-5 fixed top-4 left-4 z-30"
          style={{transform:"scale(2)"}}
        >
          <FaBars />
        </button>}
      
        <Sidebar toggleSidebar={toggleSidebar} isOpen={isOpen} />
      <Routes>
        <Route path="/DashBoard" element={<DashBoard/>} />
        <Route path="/Application" element={<ApplicationForm />} />
        <Route path="/SignUp" element={<SignUp />} />
        <Route path="/AdminLogin" element={<AdminLogin />} />
        <Route path="/UserLogin" element={<UserLogin />} />
        <Route path="/ForgetPassword" element={<ForgotPassword />} />
      </Routes>
    </div>
  );
}

export default App;
