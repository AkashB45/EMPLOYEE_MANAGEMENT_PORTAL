import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link, useNavigate } from 'react-router-dom';

const ForgotPassword = () => {
  const [email, setEmail] = useState('');
  const [otp, setOtp] = useState('');
  const [otpSent, setOtpSent] = useState(false);
  const [message, setMessage] = useState('');
  const navigate = useNavigate();
  const handlePasswordReset = (e) => {
    e.preventDefault();
    // Logic to send OTP to the user's email
    setOtpSent(true);
    setMessage('OTP sent to your email!');
  };

  const handleOtpVerification = (e) => {
    e.preventDefault();
    // Logic to verify OTP
    navigate('/CreateNewPassword');
    setMessage('Entered wrong OTP');
  };

  const handleResendOtp = () => {
    // Logic to resend OTP
    setMessage('OTP resent to your email!');
  };

  return (
    <div className="flex items-center justify-center min-h-screen" style={{ background: "#EBF4F6" }}>
      <div className="w-full max-w-md bg-white shadow-lg rounded-lg p-8">
        <h2 className="text-center mb-8 text-2xl font-semibold">Forgot Password</h2>
        <form onSubmit={otpSent ? handleOtpVerification : handlePasswordReset}>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
              Enter your email:
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="email"
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          {otpSent && (
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="otp">
                Enter OTP:
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="otp"
                type="text"
                placeholder="OTP"
                value={otp}
                onChange={(e) => setOtp(e.target.value)}
                required
              />
              <p className={message === 'Entered wrong OTP' ? "text-red-500 mt-2" : "text-green-500 mt-2"}>{message}</p>
              <button
                type="button"
                className="text-blue-500 hover:underline mt-2"
                onClick={handleResendOtp}
              >
                Resend OTP
              </button>
            </div>
          )}
          <div className="flex items-center justify-between mb-4">
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg w-full focus:outline-none focus:shadow-outline"
              type="submit"
              style={{ background: '#071952' }}
            >
              {otpSent ? 'Verify OTP' : 'Send OTP'}
            </button>
          </div>
          <div className="text-center mt-4">
            <Link
              className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800"
              to="/AdminLogin"
            >
              Return back to Login
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ForgotPassword;
