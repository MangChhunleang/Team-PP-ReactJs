import React from 'react';
import { Link } from 'react-router-dom';

const Sidebar = () => {
    return (
        <div className="w-1/3 bg-white bg-opacity-5 text-black">
            <div className="bg-white p-6 py-4 border-b border-black w-full ml-6 mt-11">
                <div className="flex items-center space-x-4 mb-6">
                    <div className="w-10 h-10 rounded-full bg-gray-300 flex items-center justify-center">
                        <i className="far fa-user text-gray-600 text-xl"></i>
                    </div>
                    <div>
                        <h2 className="text-sm font-semibold">Mike</h2>
                        <p className="text-xs">MEMBER ACCOUNT NO: 2094137423380</p>
                    </div>
                </div>
            </div>

            <nav className="space-y-4 ml-8 mt-8">
                <button className="flex items-center justify-center w-[130px] h-10 bg-none-100 rounded-xl text-gray-600 hover:bg-blue-200">
                    <Link to="/profile" className="flex items-center space-x-2">
                        <i className="fas fa-user-circle"></i>
                        <span>My profile</span>
                    </Link>
                </button>
                <button className="flex items-center justify-center w-[200px] h-10 bg-none-100 rounded-xl text-gray-600 hover:bg-blue-200">
                    <Link to="/history" className="flex items-center space-x-2">
                        <i className="fas fa-shopping-cart text-lg"></i>
                        <span>My purchase history</span>
                    </Link>
                </button>
                <div className="py-2 border-t ml-1">
                    <Link
                        to="/sign-out"
                        className="flex items-center px-4 py-2 hover:bg-gray-100 text-gray-800 text-sm"
                    >
                        <i className="fas fa-sign-out-alt w-5"></i>
                        <span className="ml-3">Sign out</span>
                    </Link>
                </div>
            </nav>
        </div>
    );
};

export default Sidebar; 