import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import Navbar from './Navbar';
import { Footer } from './Footer';

const MainTents = () => {
    // Refs for modal and carousel
    const profileModalRef = useRef(null);
    const carouselRef = useRef(null);

    // Function to toggle modal visibility
    const toggleModal = () => {
        if (profileModalRef.current) {
            profileModalRef.current.classList.toggle('hidden');
            const isHidden = profileModalRef.current.classList.contains('hidden');
            if (carouselRef.current) {
                carouselRef.current.style.pointerEvents = isHidden ? 'auto' : 'none';
            }
        }
    };

    // Function to toggle dropdown visibility
    const toggleVisibility = (id) => {
        const element = document.getElementById(id);
        if (element) {
            element.classList.toggle('hidden');
        }
    };

    return (
        <div>
            <header className="flex items-center justify-between p-4 bg-white shadow-md border-b border-gray-200">
                {/* Logo */}
                <div className="flex items-center space-x-2">
                    <img src="src/assets/homme/Camphaven.png" alt="Logo" className="w-17 h-12" />
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
                        <button onClick={() => toggleVisibility('dropdown')}>
                            <div className="relative flex items-center justify-center w-[50px] h-10 rounded-xl text-gray-600 hover:bg-blue-200">
                                <i className="fas fa-user-circle mr-1 text-2xl"></i>
                                <i className="fa-solid fa-caret-down"></i>
                            </div>
                        </button>
                        {/* Dropdown Menu */}
                        <div
                            id="dropdown"
                            className="hidden absolute left-0 mt-2 w-64 bg-white border border-gray-200 rounded-lg shadow-lg z-50"
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
                                    href="./myProfile.html"
                                    className="flex items-center px-4 py-2 hover:bg-gray-100 text-gray-800 text-sm"
                                >
                                    <i className="fas fa-user-circle"></i>
                                    <span className="ml-3">My Profile</span>
                                </a>
                                <a
                                    href="./History.html"
                                    className="flex items-center px-4 py-2 hover:bg-gray-100 text-gray-800 text-sm"
                                >
                                    <i className="far fa-file-alt w-5"></i>
                                    <span className="ml-3">Purchase History</span>
                                </a>
                            </div>
                            <div className="py-2 border-t">
                                <a
                                    href=""
                                    className="flex items-center px-4 py-2 hover:bg-gray-100 text-gray-800 text-sm"
                                >
                                    <i className="fas fa-sign-out-alt w-5"></i>
                                    <span className="ml-3">Sign Out</span>
                                </a>
                            </div>
                        </div>
                    </div>

                    <div className="flex items-center text-gray-700">
                        <span>Basket / $30.00</span>
                        <a href="./checkout1.html">
                            <i className="fas fa-shopping-cart ml-2">
                                <span className="absolute top-4 inline-flex px-2 py-1 text-xs font-bold leading-none text-white bg-red-600 rounded-full">
                                    1
                                </span>
                            </i>
                        </a>
                    </div>
                    <button className="px-6 py-2 bg-[#019B7E] text-white rounded-full hover:bg-green-700">
                        CHECKOUT
                    </button>
                </div>
            </header>

            <Navbar />

            {/* Main Content */}
            <div className=" mx-auto grid grid-cols-6 gap-4 p-4">
                {/* <!-- Item --> */}
                <Link to={"/second-tents"}>
                    <div className="relative bg-white group font-bold ">
                        <img src="src/assets/tentshome/tents_item/tent1.jpg" alt="1 Man Tent" className="w-full h-full object-cover" />
                        <div
                            className="absolute inset-0 bg-black bg-opacity-15 flex items-center justify-center group-hover:bg-opacity-50 transition duration-300 ">
                            <span className="text-white group-hover:text-white-500 transition duration-300 ">1 MAN TENTS</span>
                        </div>
                    </div>
                </Link>
                {/* <!-- Item --> */}
                <a href="./tents_prod_detail.html">
                    <div className="relative bg-white font-bold group">
                        <img src="src/assets/tentshome/tents_item/tent2.jpg" alt="2 Man Tent" className="w-full h-full object-cover" />
                        <div
                            className="absolute inset-0 bg-black bg-opacity-15 flex items-center justify-center group-hover:bg-opacity-50 transition duration-300">
                            <span className="text-white group-hover:text-white-500 transition duration-300">2 MAN TENTS</span>
                        </div>
                    </div>
                </a>
                {/* <!-- Item --> */}
                <a href="">
                    <div className="relative bg-white font-bold group">
                        <img src="src/assets/tentshome/tents_item/tent3.jpg" alt="3 Man Tent" className="w-full h-full object-cover" />
                        <div
                            className="absolute inset-0 bg-black bg-opacity-15 flex items-center justify-center group-hover:bg-opacity-50 transition duration-300">
                            <span className="text-white group-hover:text-white-500 transition duration-300 ">3 MAN TENTS</span>
                        </div>
                    </div>
                </a>
                <a href="">
                    <div className="relative bg-white font-bold group">
                        <img src="src/assets/tentshome/tents_item/tent4.jpg" alt="Footprints & Carpets"
                            className="w-full h-full object-cover" />
                        <div
                            className="absolute inset-0 bg-black bg-opacity-15 flex items-center justify-center group-hover:bg-opacity-50 transition duration-300">
                            <span className="text-white group-hover:text-white-500 transition duration-300 ">4 MAN TENTS</span>
                        </div>
                    </div>
                </a>
                {/* <!-- Item --> */}
                <a href="">
                    <div className="relative bg-white font-bold group">
                        <img src="src/assets/tentshome/tents_item/tent5.jpg" alt="4 Man Tent" className="w-full h-full object-cover" />
                        <div
                            className="absolute inset-0 bg-black bg-opacity-15 flex items-center justify-center group-hover:bg-opacity-50 transition duration-300">
                            <span className="text-white group-hover:text-white-500 transition duration-300 ">FOOTPRINTS & CARPETS </span>
                        </div>
                    </div>
                </a>
                {/* <!-- Item --> */}
                <a href="">
                    <div className="relative bg-white font-bold group">
                        <img src="src/assets/tentshome/tents_item/tent6.jpg" alt="Family Tents - Poled"
                            className="w-full h-full object-cover" />
                        <div
                            className="absolute inset-0 bg-black bg-opacity-15 flex items-center justify-center group-hover:bg-opacity-50 transition duration-300">
                            <span className="text-white group-hover:text-white-500 transition duration-300 ">FAMILY TENTS -
                                AIR</span>
                        </div>
                    </div>
                </a>
                {/* <!-- Item --> */}
                <a href="">
                    <div className="relative bg-white font-bold group">
                        <img src="src/assets/tentshome/tents_item/tent7.jpg" alt="Family Tents - Air" className="w-full h-full object-cover" />
                        <div
                            className="absolute inset-0 bg-black bg-opacity-15 flex items-center justify-center group-hover:bg-opacity-50 transition duration-300">
                            <span className="text-white group-hover:text-white-500 transition duration-300text-lg ">AWNINGS - POLED</span>
                        </div>
                    </div>
                </a>
                {/* <!-- Row 2 --> */}
                <a href="">
                    <div className="relative bg-white font-bold group">
                        <img src="src/assets/tentshome/tents_item/tent8.jpg" alt="Awnings - Poled" className="w-full h-full object-cover" />
                        <div
                            className="absolute inset-0 bg-black bg-opacity-15 flex items-center justify-center group-hover:bg-opacity-50 transition duration-300">
                            <span className="text-white group-hover:text-white-500 transition duration-300text-lg ">AWNINGS - AIR</span>
                        </div>
                    </div>
                </a>
                <a href="">
                    <div className="relative bg-white font-bold group">
                        <img src="src/assets/tentshome/tents_item/tent9.jpg" alt="Awnings - Air" className="w-full h-full object-cover" />
                        <div
                            className="absolute inset-0 bg-black bg-opacity-15 flex items-center justify-center group-hover:bg-opacity-50 transition duration-300">
                            <span className="text-white group-hover:text-white-500 transition duration-300text-lg ">UTILITY TENTS</span>
                        </div>
                    </div>
                </a>
                <a href="">
                    <div className="relative bg-white font-bold group">
                        <img src="src/assets/tentshome/tents_item/tent10.jpg" alt="Utility Tents" className="w-full h-full object-cover" />
                        <div
                            className="absolute inset-0 bg-black bg-opacity-15 flex items-center justify-center group-hover:bg-opacity-50 transition duration-300">
                            <span className="text-white group-hover:text-white-500 transition duration-300text-lg ">SHELTERS</span>
                        </div>
                    </div>
                </a>
                <a href="">
                    <div className="relative bg-white font-bold group">
                        <img src="src/assets/tentshome/tents_item/tent11.jpg" alt="Shelters" className="w-full h-full object-cover" />
                        <div
                            className="absolute inset-0 bg-black bg-opacity-15 flex items-center justify-center group-hover:bg-opacity-50 transition duration-300">
                            <span className="text-white group-hover:text-white-500 transition duration-300text-lg ">TENT CARE &
                                REPAIR</span>
                        </div>
                    </div>
                </a>
                <a href="">
                    <div className="relative bg-white font-bold group ">
                        <img src="src/assets/tentshome/tents_item/Tent17.webp" alt="Tent Care & Repair" className="w-full h-full object-cover" />
                        <div
                            className="absolute inset-0 bg-black bg-opacity-15 flex items-center justify-center group-hover:bg-opacity-50 transition duration-300">
                            <span className="text-white group-hover:text-white-500 transition duration-300text-lg ">FOOTPRINTS & CARPETS</span>
                        </div>
                    </div>
                </a>
                <a href="">
                    <div className="relative bg-white font-bold group">
                        <img src="src/assets/tentshome/tents_item/tent12.jpg" alt="Footprints & Carpets"
                            className="w-full h-full object-cover" />
                        <div
                            className="absolute inset-0 bg-black bg-opacity-15 flex items-center justify-center group-hover:bg-opacity-50 transition duration-300">
                            <span className="text-white group-hover:text-white-500 transition duration-300 ">GROUNDSHEETS & TARPS</span>
                        </div>
                    </div>
                </a>
                <a href="">
                    <div className="relative bg-white font-bold group">
                        <img src="src/assets/tentshome/tents_item/tent13.jpg" alt="Footprints & Carpets"
                            className="w-full h-full object-cover" />
                        <div
                            className="absolute inset-0 bg-black bg-opacity-15 flex items-center justify-center group-hover:bg-opacity-50 transition duration-300">
                            <span className="text-white group-hover:text-white-500 transition duration-300 ">PEGS & POLES</span>
                        </div>
                    </div>
                </a>
                <a href="">
                    <div className="relative bg-white font-bold group">
                        <img src="src/assets/tentshome/tents_item/tent14.jpg" alt="Footprints & Carpets"
                            className="w-full h-full object-cover" />
                        <div
                            className="absolute inset-0 bg-black bg-opacity-15 flex items-center justify-center group-hover:bg-opacity-50 transition duration-300">
                            <span className="text-white group-hover:text-white-500 transition duration-300 ">TENT ACCESSORIES</span>
                        </div>
                    </div>
                </a>
                <a href="">
                    <div className="relative bg-white font-bold group">
                        <img src="src/assets/tentshome/tents_item/Tent15.webp" alt="Footprints & Carpets"
                            className="w-full h-full object-cover" />
                        <div
                            className="absolute inset-0 bg-black bg-opacity-15 flex items-center justify-center group-hover:bg-opacity-50 transition duration-300">
                            <span className="text-white group-hover:text-white-500 transition duration-300 ">WINDBREAKS</span>
                        </div>
                    </div>
                </a>

                <a href="">
                    <div className="relative bg-white font-bold group">
                        <img src="src/assets/tentshome/tents_item/tent16.jpg" alt="Footprints & Carpets"
                            className="w-full h-full object-cover" />
                        <div
                            className="absolute inset-0 bg-black bg-opacity-15 flex items-center justify-center group-hover:bg-opacity-50 transition duration-300">
                            <span className="text-white group-hover:text-white-500 transition duration-300 ">TOILETS</span>
                        </div>
                    </div>
                </a>
                <a href="">
                    <div className="relative bg-white font-bold group">
                        <img src="src/assets/tentshome/tents_item/Tent18.webp" alt="Footprints & Carpets"
                            className="w-full h-full object-cover" />
                        <div
                            className="absolute inset-0 bg-black bg-opacity-15 flex items-center justify-center group-hover:bg-opacity-50 transition duration-300">
                            <span className="text-white group-hover:text-white-500 transition duration-300 ">TOILET CHEMICALS</span>
                        </div>
                    </div>
                </a>

            </div>
            <Footer />
        </div>
    );
};

export default MainTents;
