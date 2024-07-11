import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { ThemeContext } from '../../Themecontext';
import Users from './Users';
import NavBar from '../Navbar/Navbar';
import './UserListingPage.css';
 const UserListingPage = () => {
  const { users } = useContext(ThemeContext);

  return (
    <div>
      <NavBar />
      <br />
      <div className="container mx-auto p-5 mt-5">
        <div className="flex justify-end mb-4">
          <Link to="/UserRegisteration" className="bg-gradient-to-r from-indigo-600 to-blue-500 hover:from-indigo-700 hover:to-blue-600 text-white font-semibold py-2 px-6 rounded-md shadow-md transition duration-300 ease-in-out">
            Add User
          </Link>
        </div>
        <h2 className="text-2xl font-semibold mb-6 text-gray-800">Employee Overview</h2>
        {users.length === 0 ? (
          <div className="text-center text-gray-600">
            No Employees Found
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {users.map(user => (
              <div key={user.id} className="flex justify-center">
                <Users user={user} />
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default UserListingPage;
