import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import HeaderAfterLogin from './HeaderAfterLogin';

const Profile = () => {
    const [isDropdownVisible, setIsDropdownVisible] = useState(false);

    const toggleVisibility = (event) => {
        event.preventDefault();
        setIsDropdownVisible(!isDropdownVisible);
    };

    return (
        <div>
            <HeaderAfterLogin />
            {/* Main Content */}
            <div className="flex w-full mr-36 bg-white text-black">
                {/* Left Sidebar */}
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

                {/* Profile Form */}
                <div className="w-3/4 bg-white bg-opacity-5 p-3 ml-40 mt-10">
                    <h1 className="text-lg font-semibold mb-6">My identity</h1>
                    <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                        {/* Gender Selection */}
                        <div className="flex items-center space-x-4">
                            <div className="flex items-center space-x-2">
                                <input
                                    type="radio"
                                    id="male"
                                    name="gender"
                                    value="male"
                                    className="form-radio"
                                />
                                <label htmlFor="male">Male</label>
                            </div>
                            <div className="flex items-center space-x-2">
                                <input
                                    type="radio"
                                    id="female"
                                    name="gender"
                                    value="female"
                                    className="form-radio"
                                />
                                <label htmlFor="female">Female</label>
                            </div>
                        </div>

                        {/* Name Fields */}
                        <div className="grid grid-cols-2 gap-2">
                            <div>
                                <label className="block text-sm font-medium text-black">
                                    * First Name
                                </label>
                                <input
                                    type="text"
                                    className="mt-1 block w-3/4 text-[#2C2616] bg-white border-2 border-black rounded-md shadow-sm py-2 px-3"
                                    defaultValue="Mike"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-black">
                                    * Last Name
                                </label>
                                <input
                                    type="text"
                                    className="mt-1 bg-white text-black block w-3/4 border-2 border-black rounded-md shadow-sm py-2 px-3"
                                    defaultValue="Brown"
                                />
                            </div>
                        </div>

                        {/* Contact Information */}
                        <div className="grid grid-cols-2 gap-2">
                            <div>
                                <label className="block text-sm font-medium text-black">
                                    Email
                                </label>
                                <input
                                    type="email"
                                    className="mt-1 block w-3/4 text-black bg-white border-2 border-black rounded-md shadow-sm py-2 px-3"
                                    value="mike.brown@gmail.com"
                                    disabled
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-black">
                                    Phone
                                </label>
                                <input
                                    type="text"
                                    className="mt-1 block w-3/4 text-[#2C2616] bg-white border-2 border-black rounded-md shadow-sm py-2 px-3"
                                    defaultValue="+855"
                                />
                                <p className="text-xs text-black mt-2">Optional</p>
                            </div>
                        </div>

                        {/* Birthdate */}
                        <div className="grid grid-cols-2 gap-2">
                            <div>
                                <label className="block text-sm font-medium text-black">
                                    Birthdate
                                </label>
                                <input
                                    type="date"
                                    className="mt-1 block w-3/4 bg-white text-black border-2 border-black rounded-md shadow-sm py-2 px-3"
                                    placeholder="mm/dd/yyyy"
                                />
                                <p className="text-xs text-black mt-2 pb-2.5">Optional</p>
                            </div>
                        </div>

                        {/* Save Button */}
                        <button
                            type="submit"
                            className="text-black bg-white bg-opacity-100 border-2 border-black hover:border-green-500 font-medium px-4 py-2 rounded-md text-sm mt-20"
                        >
                            Save
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Profile;
