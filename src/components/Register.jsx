import React, { useState } from 'react';

const Register = ({ isModalOpen, toggleModal, onLogin }) => {
  const [isSignIn, setIsSignIn] = useState(false);

  const toggleForm = () => {
    setIsSignIn(!isSignIn);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simply call onLogin without any validation
    onLogin();
  };

  return (
    <>
      {/* Modal Background Overlay */}
      <div
        id="profileModal"
        className={`fixed inset-0 bg-gray-900 bg-opacity-50 flex items-center justify-center ${isModalOpen ? '' : 'hidden'} z-50`}
      >
        <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md relative">
          <button
            onClick={toggleModal}
            className="absolute top-2 right-2 text-gray-700 text-lg"
          >
            ✕
          </button>
          <h2 className="text-2xl font-bold mb-4">{isSignIn ? 'Sign In' : 'Create your account'}</h2>

          {!isSignIn ? (
            <form id="registrationForm" className="mb-4" onSubmit={handleSubmit}>
              <div className="mb-4">
                <label
                  className="block text-gray-700 text-sm font-bold mb-2"
                  htmlFor="email"
                >
                  Email address
                </label>
                <input
                  className="shadow appearance-none border border-gray-300 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="email"
                  type="email"
                />
              </div>
              <div className="mb-4">
                <label
                  className="block text-gray-700 text-sm font-bold mb-2"
                  htmlFor="first-name"
                >
                  First name
                </label>
                <input
                  className="shadow appearance-none border border-gray-300 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="first-name"
                  type="text"
                />
              </div>
              <div className="mb-6">
                <label
                  className="block text-gray-700 text-sm font-bold mb-2"
                  htmlFor="password"
                >
                  Password
                </label>
                <input
                  className="shadow appearance-none border border-gray-300 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                  id="password"
                  type="password"
                />
              </div>
              <p className="text-xs mb-6">
                By clicking Register or Continue with Google, Facebook, or
                Apple, you agree to the
                <a href="#" className="text-blue-500"> Terms of Use</a> and
                <a href="#" className="text-blue-500"> Privacy Policy</a>.
              </p>
              <button
                className="bg-gray-500 text-white font-bold py-2 px-4 rounded w-full mb-4"
                type="submit"
              >
                Register
              </button>
            </form>
          ) : (
            <form id="signInForm" className="mb-4" onSubmit={handleSubmit}>
              <div className="mb-4">
                <label
                  className="block text-gray-700 text-sm font-bold mb-2"
                  htmlFor="signInEmail"
                >
                  Email address
                </label>
                <input
                  className="shadow appearance-none border border-gray-300 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="signInEmail"
                  type="email"
                />
              </div>
              <div className="mb-6">
                <label
                  className="block text-gray-700 text-sm font-bold mb-2"
                  htmlFor="signInPassword"
                >
                  Password
                </label>
                <input
                  className="shadow appearance-none border border-gray-300 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                  id="signInPassword"
                  type="password"
                />
              </div>
              <div className="flex items-center mb-4">
                <input className="mr-2" type="checkbox" id="stay-signed-in" />
                <label className="text-sm" htmlFor="stay-signed-in">Stay signed in</label>
                <a href="#" className="ml-auto text-sm text-gray-500">Forgot your password?</a>
              </div>
              <button type="submit" className="w-full bg-black text-white rounded py-2 mb-4 text-center block">
                Sign in
              </button>
              <a href="#" className="block text-center text-sm text-gray-500 mb-4">Trouble signing in?</a>
            </form>
          )}

          <div className="flex items-center justify-center mb-4">
            <span className="border-t border-gray-300 flex-grow"></span>
            <span className="mx-4 text-gray-500">OR</span>
            <span className="border-t border-gray-300 flex-grow"></span>
          </div>
          <button className="bg-white border border-gray-300 text-gray-700 font-bold py-2 px-4 rounded w-full mb-2 flex items-center justify-center">
            <i className="fab fa-google mr-2"></i> Continue with Google
          </button>

          {/* Toggle Sign-In/Register Form */}
          <button
            onClick={toggleForm}
            className="mt-4 text-blue-500 cursor-pointer"
          >
            {isSignIn ? 'Switch to Register' : 'Switch to Sign In'}
          </button>
        </div>
      </div>
    </>
  );
};

export default Register;
