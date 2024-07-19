import React, { useState } from 'react';
import defaultProfilePic from './profile2.webp'; 
import { BsPencilSquare } from 'react-icons/bs'; // Icon for edit button
import { AiOutlineUpload } from 'react-icons/ai'; // Icon for upload button

const ProfilePage = () => {
  const initialProfile = {
    fullName: 'John Doe',
    jobTitle: 'Administrator',
    emailAddress: 'johnmac@gmail.com',
    phoneNumber: '9574863215',
    username: 'johnBla544@gmail.com',
    profilePic: null
  };

  const [profile, setProfile] = useState({ ...initialProfile });
  const [isEditing, setIsEditing] = useState(false);
  const [showUploadPrompt, setShowUploadPrompt] = useState(false);

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setProfile({
        ...profile,
        profilePic: URL.createObjectURL(file),
        showUploadPrompt: false
      });
    }
  };

  const handleEditProfile = () => {
    setIsEditing(true);
    setShowUploadPrompt(true); // Show upload prompt when editing starts
  };

  const handleSaveProfile = () => {
    // Save profile changes here
    setIsEditing(false);
    setShowUploadPrompt(false);
  };

  const handleCancelEdit = () => {
    // Cancel editing profile
    setProfile({ ...initialProfile });
    setIsEditing(false);
    setShowUploadPrompt(false);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setProfile({ ...profile, [name]: value });
  };

  const handlePasswordChange = () => {
    // Implement password change logic here
    alert('Password Change functionality to be implemented.');
  };

  const handleAddAdmin = () => {
    // Implement add admin logic here
    alert('Add Admin functionality to be implemented.');
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#EBF4F6]">
      <div className="w-full max-w-xl bg-blue-900 rounded-lg shadow-lg overflow-hidden text-white">
        <div className="p-8 border-b border-gray-700">
          <div className="flex items-center">
            <div className="relative">
              <img
                src={profile.profilePic || defaultProfilePic}
                alt="Profile"
                className="h-32 w-32 rounded-full object-cover border-4 border-white shadow-md"
              />
              {isEditing && (
                <div className="absolute bottom-0 right-0 mb-2 mr-2">
                  <button
                    className="text-white rounded-full p-2 focus:outline-none shadow-md"
                    onClick={handleEditProfile}
                  >
                    <AiOutlineUpload />
                  </button>
                </div>
              )}
              {!profile.profilePic && isEditing && (
                <div className="absolute inset-0 flex items-center justify-center text-2xl">
                  <button
                    className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg focus:outline-none"
                    onClick={() => setShowUploadPrompt(true)}
                  >
                    Upload
                  </button>
                </div>
              )}
              {showUploadPrompt && (
                <div className="absolute inset-0 flex items-center justify-center text-2xl">
                  <input
                    type="file"
                    accept="image/*"
                    onChange={handleFileChange}
                    className="hidden"
                    id="profilePicInput"
                  />
                  <label htmlFor="profilePicInput" className="cursor-pointer bg-white text-blue-700 px-4 py-2 rounded-lg shadow-md">
                    Upload
                  </label>
                </div>
              )}
            </div>
            <div className="ml-6">
              <h2 className="text-4xl font-bold">{profile.fullName}</h2>
              <p className="text-gray-300 text-lg">{profile.jobTitle}</p>
            </div>
          </div>
        </div>
        <div className="p-8">
          <div className="mb-6 flex justify-between items-center">
            <h3 className="text-2xl font-semibold">Profile Details</h3>
            {!isEditing && (
              <button
                className="bg-[#37B7C3] hover:bg-blue-600 text-white rounded-full p-2 focus:outline-none shadow-md flex items-center text-lg"
                onClick={handleEditProfile}
              >
                <BsPencilSquare className="mr-2" /> Edit
              </button>
            )}
          </div>
          <div className="mb-6">
            <div className="flex items-center mb-4">
              <span className="w-1/3 text-gray-300 text-lg">Email Address:</span>
              {isEditing ? (
                <input
                  type="email"
                  name="emailAddress"
                  value={profile.emailAddress}
                  onChange={handleInputChange}
                  className="w-2/3 text-black p-2 rounded-lg"
                />
              ) : (
                <span className="text-white text-lg">{profile.emailAddress}</span>
              )}
            </div>
            <div className="flex items-center mb-4">
              <span className="w-1/3 text-gray-300 text-lg">Phone Number:</span>
              {isEditing ? (
                <input
                  type="text"
                  name="phoneNumber"
                  value={profile.phoneNumber}
                  onChange={handleInputChange}
                  className="w-2/3 text-black p-2 rounded-lg"
                />
              ) : (
                <span className="text-white text-lg">{profile.phoneNumber}</span>
              )}
            </div>
            <div className="flex items-center mb-4">
              <span className="w-1/3 text-gray-300 text-lg">Username:</span>
              {isEditing ? (
                <input
                  type="text"
                  name="username"
                  value={profile.username}
                  onChange={handleInputChange}
                  className="w-2/3 text-black p-2 rounded-lg"
                />
              ) : (
                <span className="text-white text-lg">{profile.username}</span>
              )}
            </div>
          </div>
          {isEditing && (
            <div className="flex justify-end">
              <button
                className="bg-green-500 text-white px-6 py-3 rounded-lg hover:bg-green-600 focus:outline-none focus:bg-green-600 mr-3 shadow-md text-lg"
                onClick={handleSaveProfile}
              >
                Save
              </button>
              <button
                className="bg-red-500 text-white px-6 py-3 rounded-lg hover:bg-red-600 focus:outline-none shadow-md text-lg"
                onClick={handleCancelEdit}
              >
                Cancel
              </button>
            </div>
          )}
        </div>
        <div className="p-8 border-t border-gray-700">
          <div className="mb-6">
            <button
              className="bg-gray-500 text-white px-6 py-3 rounded-lg mr-3 hover:bg-gray-600 focus:outline-none shadow-md text-lg"
              onClick={handlePasswordChange}
            >
              Change Password
            </button>
            <button
              className="bg-gray-500 text-white px-6 py-3 rounded-lg hover:bg-gray-600 focus:outline-none shadow-md text-lg"
              onClick={handleAddAdmin}
            >
              Add Another Admin
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;

