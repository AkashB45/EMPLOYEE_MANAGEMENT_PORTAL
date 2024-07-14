import { Routes,useLocation } from 'react-router-dom';
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
import UserRegisteration from './components/UserRegisteration/UserRegisteration';
import JobListingPage from './components/JobListingPage/JobListingPage';
import Job from './components/JobListingPage/Job';
import EditJob from './components/JobListingPage/EditJob';
import Home from './components/HomePage/Home';
import ContactPage from './components/ContactPage/ContactPage';
import NotFound from './components/NotFoundPage/NotFoundPage';
import NewJobForm from './components/NewJobForm/NewJobForm';
import TermsAndConditions from './components/TermsAndConditions/TermsAndConditions';
import UserListingPage from './components/UserListingPage/UserListingPage';
import User from './components/UserListingPage/User';
import EditUser from './components/UserListingPage/EditUser';
import ApplicantDetails from './components/ApplicantDetails/ApplicantDetails';
import InterviewProgress from './components/InterviewProgress/InterviewProgress';
import LandingPage from './components/LandingPage/LandingPage';
import CreateNewPassword from './components/Login/CreateNewPassword';
import AdminWelcome from './components/HomePage/Admin/AdminWelcome';
import AdminDashBoard from './components/HomePage/Admin/AdminDashBoard';
import UserWelcome from './components/HomePage/User/UserWelcome'
import { ThemeContext } from './Themecontext';
import {useContext} from 'react'
function App() {
  const{isOpen,setIsOpen} = useContext(ThemeContext);
  const location = useLocation();
  const endpoint = location.pathname;
  console.log(endpoint);
  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="App">
      {(endpoint!=='/') && !isOpen && <button
          onClick={toggleSidebar}
          className="text-gray-800 mb-5 fixed top-4 left-4 z-30"
          style={{transform:"scale(2)",left:"3%",top:"3%"}}
          
        >
          <FaBars />
        </button>}
      
        <Sidebar toggleSidebar={toggleSidebar} isOpen={isOpen} />
      <Routes>
        <Route path="/" element={<LandingPage/>} />
        <Route path="/Home" element={<Home/>} />
        <Route path="/Application" element={<ApplicationForm />} />
        <Route path="/JobList">
        <Route index element={<JobListingPage />} />
        <Route path=":id" element={<Job />} />
        <Route path="edit/:id" element={<EditJob />} />
        </Route>
        <Route path="/UserList">
        <Route index element={<UserListingPage />} />
        <Route path=":id" element={<User />} />
        <Route path="edit/:id" element={<EditUser />} />
        </Route>
        <Route path="/SignUp" element={<SignUp />} />
        <Route path="/AdminLogin" element={<AdminLogin />} />
        <Route path="/UserRegisteration" element={<UserRegisteration />} />
        <Route path="/UserLogin" element={<UserLogin />} />
        <Route path="/ForgetPassword" element={<ForgotPassword />} />
        <Route path="/CreateNewPassword" element={<CreateNewPassword />} />
        <Route path="/Terms&Conditions" element={<TermsAndConditions/>} />
        <Route path="/ContactPage" element={<ContactPage/>} />
        <Route path="/NewJobForm" element={<NewJobForm/>} />
        <Route path="/ApplicantDetails" element={<ApplicantDetails/>} />
        <Route path="/InterviewProgress" element={<InterviewProgress/>} />
        <Route path="/AdminWelcome" element={<AdminWelcome/>} />
        <Route path="/UserWelcome" element={<UserWelcome/>} />
        <Route path="/AdminDashBoard" element={<AdminDashBoard/>} />
        <Route path="/*" element={<NotFound/>} />
      </Routes>
    </div>
  );
}

export default App;