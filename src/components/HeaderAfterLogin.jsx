import React from "react";
import { Link } from 'react-router-dom';

const HeaderAfterLogin = () => {
  const toggleVisibility = (event, id) => {
    const dropdown = document.getElementById(id);
    if (dropdown) {
      dropdown.classList.toggle("hidden");
    }
  };

  return (
    <header className="flex items-center justify-between p-4 bg-white shadow-md border-b border-gray-200">
      {/* Logo */}
      <div className="flex items-center space-x-2">
        <img
          src="src/assets/homme/Camphaven.png"
          alt="Logo"
          className="w-17 h-12"
        />
      </div>

      {/* Search Bar */}
      <div className="flex-grow mx-5 text-lg">
        <div className="relative">
          <input
            type="text"
            placeholder="Search products"
            className="w-full py-2 pl-12 pr-4 border-2 border-gray-300 rounded-lg bg-gray-100 text-gray-600 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-green-500"
          />
          <i className="fas fa-search absolute top-1/2 transform -translate-y-1/2 left-4 text-gray-500"></i>
        </div>
      </div>

      {/* User Icon and Basket */}
      <div className="flex items-center space-x-6 text-lg">
        {/* Profile Icon */}
        <div className="relative">
          <button
            onClick={(e) => toggleVisibility(e, "dropdown")}
            className="relative flex items-center justify-center w-[50px] h-10 bg-none-100 rounded-xl text-gray-600 hover:bg-blue-200"
          >
            <i className="fas fa-user-circle mr-1 text-2xl"></i>
            <i className="fa-solid fa-caret-down"></i>
          </button>

          {/* Dropdown Menu */}
          <div
            id="dropdown"
            className="hidden z-50 absolute left-0 mt-2 w-64 bg-white border border-gray-200 rounded-lg shadow-lg"
          >
            <div className="p-4 border-b">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 rounded-full bg-gray-300 flex items-center justify-center">
                  <i className="far fa-user text-gray-600 text-xl"></i>
                </div>
                <div>
                  <p className="font-medium text-gray-800">Miker</p>
                  <p className="text-sm text-gray-500">View your profile</p>
                </div>
              </div>
            </div>
            <div className="py-2">
              <a
                href="./myProflie.html"
                className="flex items-center px-4 py-2 hover:bg-gray-100 text-gray-800 text-sm"
              >
                <i className="fas fa-user-circle"></i>
                <span className="ml-3">My profile</span>
              </a>
              <a
                href="./History.html"
                className="flex items-center px-4 py-2 hover:bg-gray-100 text-gray-800 text-sm"
              >
                <i className="far fa-file-alt w-5"></i>
                <span className="ml-3">Purchases History</span>
              </a>
            </div>
            <div className="py-2 border-t">
              <a
                href="./home.html"
                className="flex items-center px-4 py-2 hover:bg-gray-100 text-gray-800 text-sm"
              >
                <i className="fas fa-sign-out-alt w-5"></i>
                <span className="ml-3">Sign out</span>
              </a>
            </div>
          </div>
        </div>

        {/* Basket */}
        <div className="flex items-center text-gray-700">
          <span>Basket / $30.00</span>
          <Link to="/check-card">
            <i className="fas fa-shopping-cart ml-2">
              <span className="absolute mr-10 top-4 inline-flex px-2 py-1 text-xs font-bold leading-none text-white bg-red-600 rounded-full">
                1
              </span>
            </i>
          </Link>
        </div>
        <a href="./order_sammary.html">
          <button className="px-6 py-2 bg-[#019B7E] text-white rounded-full hover:bg-green-700">
            CHECKOUT
          </button>
        </a>
      </div>
    </header>
  );
};

export default HeaderAfterLogin;
