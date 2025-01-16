import React from "react";

const Header = ({ toggleModal }) => {
  return (
    <div className="w-full mx-auto">
      <header className="flex items-center justify-between p-4 bg-white shadow-md border-b border-gray-200">
        
        {/* <!-- Logo --> */}
        <a href="./home.html">
          <div className="flex items-center space-x-2">
            <img
              src="src/assets/homme/Camphaven.png"
              alt="Logo"
              className="w-17 h-12"
            />
          </div>
        </a>

        {/* <!-- Search Bar --> */}
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

        {/* <!-- User Icon and Basket --> */}
        <div className="flex items-center space-x-6 text-lg">
          {/* <!-- Profile Icon with onclick to toggle modal --> */}
          <div className="flex items-center space-x-6 text-lg">
            <i
              id="profileIcon"
              className="far fa-user-circle text-2xl text-gray-700 cursor-pointer"
              onClick={toggleModal}
            ></i>
          </div>

          <div className="flex items-center text-gray-700">
            <span>Basket / $0.00</span>
            <i className="fas fa-shopping-cart ml-2"></i>
          </div>
          <button className="px-6 py-2 bg-[#019B7E] text-white rounded-full hover:bg-green-700">
            CHECKOUT
          </button>
        </div>
      </header>
    </div>
  );
};

export default Header;
