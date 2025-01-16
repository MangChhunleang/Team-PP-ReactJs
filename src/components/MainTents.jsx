import React, { useRef } from 'react';
import { Link } from 'react-router-dom';

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

            <nav className="bg-white py-2">
                <div className="flex justify-center space-x-2 text-xs text-gray-300 font-semibold tracking-wide">
                    <div className="relative group z-10">
                        <button className="font-lato text-[10px] focus:outline-none text-[#666666D9] hover:text-black">
                            TENTS&ACCESSORIES{" "}
                            <i className="fas fa-chevron-down text-xs ml-1"></i>
                        </button>
                        <div className="absolute left-0 mt-2 w-[530px] bg-white shadow-lg border border-gray-200 opacity-0 group-hover:opacity-100 pointer-events-none group-hover:pointer-events-auto transition-opacity duration-300 font-lato">
                            <div className="grid grid-cols-4 gap-4 p-6">
                                {/* Column 1 */}
                                <div>
                                    <p className="text-gray-800 font-bold text-[9px] mb-2">
                                        TENTS&SHELTERS
                                    </p>
                                    <hr className="mt-2" />
                                    <ul className="text-gray-600 space-y-1">
                                        <li>
                                            <Link to={"/men-tents1"}
                                                href="#"
                                                className="hover:text-black text-[#666666D9] text-[9px]"
                                            >
                                                1MAN TENTS
                                            </Link>
                                        </li>
                                        <hr className="mt-2" />
                                        <li>
                                            <a
                                                href="#"
                                                className="hover:text-black text-[#666666D9] text-[9px]"
                                            >
                                                2MAN TENTS
                                            </a>
                                        </li>
                                        <hr className="mt-2" />
                                        <li>
                                            <a
                                                href="#"
                                                className="hover:text-black text-[#666666D9] text-[9px]"
                                            >
                                                3MAN TENTS
                                            </a>
                                        </li>
                                        <hr className="mt-2" />
                                        <li>
                                            <a
                                                href="#"
                                                className="hover:text-black text-[#666666D9] text-[9px]"
                                            >
                                                4MAN TENTS
                                            </a>
                                        </li>
                                        <hr className="mt-2" />
                                        <li>
                                            <a
                                                href="#"
                                                className="hover:text-black text-[#666666D9] text-[9px]"
                                            >
                                                FAMILY TENTS - POLED
                                            </a>
                                        </li>
                                        <hr className="mt-2" />
                                        <li>
                                            <a
                                                href="#"
                                                className="hover:text-black text-[#666666D9] text-[9px]"
                                            >
                                                FAMILY TENTS - AIR
                                            </a>
                                        </li>
                                        <hr className="mt-2" />
                                        <li>
                                            <a
                                                href="#"
                                                className="hover:text-black text-[#666666D9] text-[9px]"
                                            >
                                                BLACKOUT TENTS
                                            </a>
                                        </li>
                                        <hr className="mt-2" />
                                        <li>
                                            <a
                                                href="#"
                                                className="hover:text-black text-[#666666D9] text-[9px]"
                                            >
                                                UTILITY TENTS
                                            </a>
                                        </li>
                                        <hr className="mt-2" />
                                        <li>
                                            <a
                                                href="#"
                                                className="hover:text-black text-[#666666D9] text-[9px]"
                                            >
                                                SHELTERS
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                                {/* Column 2 */}
                                <div>
                                    <p className="text-gray-800 font-bold text-[9px] mb-2">
                                        AWNINGS
                                    </p>
                                    <hr className="mt-2" />
                                    <ul className="text-gray-600 space-y-1">
                                        <li>
                                            <a
                                                href="#"
                                                className="hover:text-black text-[#666666D9] text-[9px]"
                                            >
                                                AWNINGS - POLED
                                            </a>
                                        </li>
                                        <hr className="mt-2" />
                                        <li>
                                            <a
                                                href="#"
                                                className="hover:text-black text-[#666666D9] text-[9px]"
                                            >
                                                AWNINGS - AIR
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                                {/* Column 3 */}
                                <div>
                                    <p className="text-gray-800 font-bold text-[9px] mb-2">
                                        ACCESSORIES
                                    </p>
                                    <hr className="mt-2" />
                                    <ul className="text-gray-600 space-y-1">
                                        <li>
                                            <a
                                                href="#"
                                                className="hover:text-black text-[#666666D9] text-[9px]"
                                            >
                                                WINDBREAKS
                                            </a>
                                        </li>
                                        <hr className="mt-2" />
                                        <li>
                                            <a
                                                href="#"
                                                className="hover:text-black text-[#666666D9] text-[9px]"
                                            >
                                                PEGS&POLES
                                            </a>
                                        </li>
                                        <hr className="mt-2" />
                                        <li>
                                            <a
                                                href="#"
                                                className="hover:text-black text-[#666666D9] text-[9px]"
                                            >
                                                FOOTPRINTS&CARPETS
                                            </a>
                                        </li>
                                        <hr className="mt-2" />
                                        <li>
                                            <a
                                                href="#"
                                                className="hover:text-black text-[#666666D9] text-[9px]"
                                            >
                                                GROUNDSHEETS&TARPS
                                            </a>
                                        </li>
                                        <hr className="mt-2" />
                                        <li>
                                            <a
                                                href="#"
                                                className="hover:text-black text-[#666666D9] text-[9px]"
                                            >
                                                TENT CARE&REPAIR
                                            </a>
                                        </li>
                                        <hr className="mt-2" />
                                        <li>
                                            <a
                                                href="#"
                                                className="hover:text-black text-[#666666D9] text-[9px]"
                                            >
                                                TENT ACCESSORIES
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                                {/* Column 4 */}
                                <div>
                                    <p className="text-gray-800 font-bold text-[9px] mb-2">
                                        TOILETS&ACCESSORIES
                                    </p>
                                    <hr className="mt-2" />
                                    <ul className="text-gray-600 space-y-1">
                                        <li>
                                            <a
                                                href="#"
                                                className="hover:text-black text-[#666666D9] text-[9px]"
                                            >
                                                UTILITY TENTS
                                            </a>
                                        </li>
                                        <hr className="mt-2" />
                                        <li>
                                            <a
                                                href="#"
                                                className="hover:text-black text-[#666666D9] text-[9px]"
                                            >
                                                TOILETS
                                            </a>
                                        </li>
                                        <hr className="mt-2" />
                                        <li>
                                            <a
                                                href="#"
                                                className="hover:text-black text-[#666666D9] text-[9px]"
                                            >
                                                TOILET CHEMICALS
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="relative group z-10">
                        <button className="font-semibold text-[10px] focus:outline-none text-[#666666D9] hover:text-black">
                            SLEEPING <i className="fas fa-chevron-down text-xs ml-1"></i>
                        </button>
                        <div className="absolute left-0 mt-2 w-[420px] bg-white shadow-lg rounded-md border border-gray-200 opacity-0 group-hover:opacity-100 pointer-events-none group-hover:pointer-events-auto transition-opacity duration-300">
                            <div className="grid grid-cols-4 gap-3 p-6 justify-center">
                                {/* Column 1 */}
                                <div>
                                    <a
                                        href="#"
                                        className="text-gray-800 font-bold text-[9px] mb-2"
                                    >
                                        SLEEPING
                                    </a>
                                    <hr className="mt-2" />
                                    <ul className="text-gray-600 text-sm space-y-1">
                                        <li>
                                            <a
                                                href="#"
                                                className="hover:text-black text-[#666666D9] text-[9px]"
                                            >
                                                SLEEPING BAGS SINGLE
                                            </a>
                                        </li>
                                        <hr className="mt-2" />
                                        <li>
                                            <a
                                                href="#"
                                                className="hover:text-black text-[#666666D9] text-[9px]"
                                            >
                                                SLEEPING BAGS DOUBLE
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                                {/* Column 2 */}
                                <div>
                                    <a
                                        href="#"
                                        className="text-gray-800 font-bold mb-2 text-[9px]"
                                    >
                                        BEDS
                                    </a>
                                    <hr className="mt-2" />
                                    <ul className="text-gray-600 text-sm space-y-1">
                                        <li>
                                            <a
                                                href="#"
                                                className="hover:text-black text-[#666666D9] text-[9px]"
                                            >
                                                CAMP BEDS
                                            </a>
                                        </li>
                                        <hr className="mt-2" />
                                        <li>
                                            <a
                                                href="#"
                                                className="hover:text-black text-[#666666D9] text-[9px]"
                                            >
                                                AIRBEDS
                                            </a>
                                        </li>
                                        <hr className="mt-2" />
                                        <li>
                                            <a
                                                href="#"
                                                className="hover:text-black text-[#666666D9] text-[9px]"
                                            >
                                                SELF INFLATING MATS
                                            </a>
                                        </li>
                                        <hr className="mt-2" />
                                        <li>
                                            <a
                                                href="#"
                                                className="hover:text-black text-[#666666D9] text-[9px]"
                                            >
                                                FOAM ROLL MATS
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                                {/* Column 3 */}
                                <div>
                                    <a
                                        href="#"
                                        className="text-gray-800 font-bold mb-2 text-[9px]"
                                    >
                                        ACCESSORIES
                                    </a>
                                    <hr className="mt-2" />
                                    <ul className="text-gray-600 text-sm space-y-1">
                                        <li>
                                            <a
                                                href="#"
                                                className="hover:text-black text-[#666666D9] text-[9px]"
                                            >
                                                PILLOWS
                                            </a>
                                        </li>
                                        <hr className="mt-2" />
                                        <li>
                                            <a
                                                href="#"
                                                className="hover:text-black text-[#666666D9] text-[9px]"
                                            >
                                                NETS&LINERS
                                            </a>
                                        </li>
                                        <hr className="mt-2" />
                                        <li>
                                            <a
                                                href="#"
                                                className="hover:text-black text-[#666666D9] text-[9px]"
                                            >
                                                AIR PUMPS
                                            </a>
                                        </li>
                                        <hr className="mt-2" />
                                        <li>
                                            <a
                                                href="#"
                                                className="hover:text-black text-[#666666D9] text-[9px]"
                                            >
                                                BLANKETS
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="relative group z-10">
                        <button className="font-semibold text-[10px] focus:outline-none text-[#666666D9] hover:text-black">
                            KITCHEN <i className="fas fa-chevron-down text-xs ml-1"></i>
                        </button>
                        <div className="absolute left-0 mt-2 w-[500px] bg-white shadow-lg rounded-md border border-gray-200 opacity-0 group-hover:opacity-100 pointer-events-none group-hover:pointer-events-auto transition-opacity duration-300">
                            <div className="grid grid-cols-4 gap-4 p-6">
                                {/* Column 1 */}
                                <div>
                                    <a className="text-gray-800 font-bold text-[9px] mb-2">
                                        STOVES
                                    </a>
                                    <hr className="mt-2" />
                                    <ul className="text-gray-600 text-sm space-y-1">
                                        <li key="single-burner">
                                            <a
                                                href="#"
                                                className="hover:text-black text-[#666666D9] text-[9px]"
                                            >
                                                SINGLE BURNER STOVES
                                            </a>
                                        </li>
                                        <hr className="mt-2" />
                                        <li key="double-burner">
                                            <a
                                                href="#"
                                                className="hover:text-black text-[#666666D9] text-[9px]"
                                            >
                                                DOUBLE BURNER STOVES
                                            </a>
                                        </li>
                                        <hr className="mt-2" />
                                        <li key="regulators">
                                            <a
                                                href="#"
                                                className="hover:text-black text-[#666666D9] text-[9px]"
                                            >
                                                REGULATORS
                                            </a>
                                        </li>
                                        <hr className="mt-2" />
                                        <li key="spares">
                                            <a
                                                href="#"
                                                className="hover:text-black text-[#666666D9] text-[9px]"
                                            >
                                                SPARES - GAS & PETROL
                                            </a>
                                        </li>
                                    </ul>
                                    <a className="text-gray-800 font-bold text-[9px] mt-2 mb-2">
                                        BBQ'S
                                    </a>
                                    <ul className="text-gray-600 text-sm space-y-1">
                                        <li key="bbqs">
                                            <a
                                                href="#"
                                                className="hover:text-black text-[#666666D9] text-[9px]"
                                            >
                                                BBQS
                                            </a>
                                        </li>
                                        <hr className="mt-2" />
                                        <li key="bbq-accessories">
                                            <a
                                                href="#"
                                                className="hover:text-black text-[#666666D9] text-[9px]"
                                            >
                                                BBQ ACCESSORIES
                                            </a>
                                        </li>
                                    </ul>
                                </div>

                                {/* Column 2 */}
                                <div>
                                    <a className="text-gray-800 font-bold text-[9px] mb-2">
                                        FUEL
                                    </a>
                                    <hr className="mt-2" />
                                    <ul className="text-gray-600 text-sm space-y-1">
                                        <li key="gas-cartridges">
                                            <a
                                                href="#"
                                                className="hover:text-black text-[#666666D9] text-[9px]"
                                            >
                                                GAS CARTRIDGES
                                            </a>
                                        </li>
                                        <hr className="mt-2" />
                                        <li key="solid-fuels">
                                            <a
                                                href="#"
                                                className="hover:text-black text-[#666666D9] text-[9px]"
                                            >
                                                SOLID FUELS
                                            </a>
                                        </li>
                                        <hr className="mt-2" />
                                        <li key="liquid-fuels">
                                            <a
                                                href="#"
                                                className="hover:text-black text-[#666666D9] text-[9px]"
                                            >
                                                LIQUID FUELS
                                            </a>
                                        </li>
                                        <hr className="mt-2" />
                                        <li key="lighters-matches">
                                            <a
                                                href="#"
                                                className="hover:text-black text-[#666666D9] text-[9px]"
                                            >
                                                LIGHTERS & MATCHES
                                            </a>
                                        </li>
                                    </ul>
                                </div>

                                {/* Column 3 */}
                                <div>
                                    <a className="text-gray-800 font-bold text-[9px] mb-2">
                                        OTHER
                                    </a>
                                    <hr className="mt-2" />
                                    <ul className="text-gray-600 text-sm space-y-1">
                                        <li key="picnic">
                                            <a
                                                href="#"
                                                className="hover:text-black text-[#666666D9] text-[9px]"
                                            >
                                                PICNIC
                                            </a>
                                        </li>
                                        <hr className="mt-2" />
                                        <li key="household">
                                            <a
                                                href="#"
                                                className="hover:text-black text-[#666666D9] text-[9px]"
                                            >
                                                HOUSEHOLD
                                            </a>
                                        </li>
                                        <hr className="mt-2" />
                                        <li key="general-cleaning">
                                            <a
                                                href="#"
                                                className="hover:text-black text-[#666666D9] text-[9px]"
                                            >
                                                GENERAL CLEANING
                                            </a>
                                        </li>
                                        <hr className="mt-2" />
                                        <li key="tableware">
                                            <a
                                                href="#"
                                                className="hover:text-black text-[#666666D9] text-[9px]"
                                            >
                                                TABLEWARE
                                            </a>
                                        </li>
                                        <hr className="mt-2" />
                                        <li key="240v-appliances">
                                            <a
                                                href="#"
                                                className="hover:text-black text-[#666666D9] text-[9px]"
                                            >
                                                240V APPLIANCES
                                            </a>
                                        </li>
                                        <hr className="mt-2" />
                                        <li key="12v-appliances">
                                            <a
                                                href="#"
                                                className="hover:text-black text-[#666666D9] text-[9px]"
                                            >
                                                12V APPLIANCES
                                            </a>
                                        </li>
                                    </ul>
                                </div>

                                {/* Column 4 */}
                                <div>
                                    <h4 className="text-gray-800 font-bold text-[9px] mb-2">
                                        STORAGE & PREP
                                    </h4>
                                    <hr className="mt-2" />
                                    <ul className="text-gray-600 text-sm space-y-1">
                                        <li key="kitchen-storage">
                                            <a
                                                href="#"
                                                className="hover:text-black text-[#666666D9] text-[9px]"
                                            >
                                                KITCHEN & STORAGE
                                            </a>
                                        </li>
                                        <hr className="mt-2" />
                                        <li key="fridges-utensils">
                                            <a
                                                href="#"
                                                className="hover:text-black text-[#666666D9] text-[9px]"
                                            >
                                                FRIDGES & UTENSILS
                                            </a>
                                        </li>
                                        <hr className="mt-2" />
                                        <li key="pots-pans">
                                            <a
                                                href="#"
                                                className="hover:text-black text-[#666666D9] text-[9px]"
                                            >
                                                POTS, PANS & UTENSILS
                                            </a>
                                        </li>
                                        <hr className="mt-2" />
                                        <li key="bottles-flasks">
                                            <a
                                                href="#"
                                                className="hover:text-black text-[#666666D9] text-[9px]"
                                            >
                                                BOTTLES & FLASKS
                                            </a>
                                        </li>
                                        <hr className="mt-2" />
                                        <li key="water-carriers">
                                            <a
                                                href="#"
                                                className="hover:text-black text-[#666666D9] text-[9px]"
                                            >
                                                WATER CARRIERS
                                            </a>
                                        </li>
                                        <hr className="mt-2" />
                                        <li key="food-storage">
                                            <a
                                                href="#"
                                                className="hover:text-black text-[#666666D9] text-[9px]"
                                            >
                                                FOOD STORAGE & PREP
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="relative group z-10">
                        <button className="font-semibold text-[10px] focus:outline-none text-[#666666D9] hover:text-black">
                            LIGHT & LANTERNS{" "}
                            <i className="fas fa-chevron-down text-xs ml-1"></i>
                        </button>
                        <div className="absolute left-0 mt-2 w-[420px] bg-white shadow-lg rounded-md border border-gray-200 opacity-0 group-hover:opacity-100 pointer-events-none group-hover:pointer-events-auto transition-opacity duration-300">
                            <div className="grid grid-cols-3 gap-4 p-6">
                                {/* Column 1 */}
                                <div>
                                    <a className="text-gray-800 font-bold text-[9px] mb-2">
                                        TORCHES & LANTERNS
                                    </a>
                                    <hr className="mt-2" />
                                    <ul className="text-gray-600 text-sm space-y-1">
                                        <li>
                                            <a
                                                href="#"
                                                className="hover:text-black text-[#666666D9] text-[9px]"
                                            >
                                                HEAD TORCHES
                                            </a>
                                        </li>
                                        <hr className="mt-2" />
                                        <li>
                                            <a
                                                href="#"
                                                className="hover:text-black text-[#666666D9] text-[9px]"
                                            >
                                                LANTERNS BATTERY
                                            </a>
                                        </li>
                                        <hr className="mt-2" />
                                        <li>
                                            <a
                                                href="#"
                                                className="hover:text-black text-[#666666D9] text-[9px]"
                                            >
                                                LANTERNS-GAS&FUEL
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                                {/* Column 2 */}
                                <div>
                                    <a className="text-gray-800 font-bold mb-2 text-[9px]">
                                        HEATING
                                    </a>
                                    <hr className="mt-2" />
                                    <ul className="text-gray-600 text-sm space-y-1">
                                        <li>
                                            <a
                                                href="#"
                                                className="hover:text-black text-[#666666D9] text-[9px]"
                                            >
                                                HEATING-ELECTRIC
                                            </a>
                                        </li>
                                        <hr className="mt-2" />
                                        <li>
                                            <a
                                                href="#"
                                                className="hover:text-black text-[#666666D9] text-[9px]"
                                            >
                                                HEATING-GAS
                                            </a>
                                        </li>
                                        <hr className="mt-2" />
                                        <li>
                                            <a
                                                href="#"
                                                className="hover:text-black text-[#666666D9] text-[9px]"
                                            >
                                                HEATING-SOLID FUEL
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                                {/* Column 3 */}
                                <div>
                                    <a className="text-gray-800 mb-2 text-[9px] font-bold">
                                        DEHER LIGHTING
                                    </a>
                                    <hr className="mt-2" />
                                    <ul className="text-gray-600 text-sm space-y-1">
                                        <li>
                                            <a
                                                href="#"
                                                className="hover:text-black text-[#666666D9] text-[9px]"
                                            >
                                                LIGHTING-12V
                                            </a>
                                        </li>
                                        <hr className="mt-2" />
                                        <li>
                                            <a
                                                href="#"
                                                className="hover:text-black text-[#666666D9] text-[9px]"
                                            >
                                                LIGHTERS-240V
                                            </a>
                                        </li>
                                        <hr className="mt-2" />
                                        <li>
                                            <a
                                                href="#"
                                                className="hover:text-black text-[#666666D9] text-[9px]"
                                            >
                                                SPARES GAS & PETROL
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="relative group z-10">
                        <button className="font-semibold text-[10px] focus:outline-none text-[#666666D9] hover:text-black">
                            FURNITURE <i className="fas fa-chevron-down text-xs ml-1"></i>
                        </button>
                        <div className="absolute left-0 mt-2 w-[210px] bg-white shadow-lg rounded-md border border-gray-200 opacity-0 group-hover:opacity-100 pointer-events-none group-hover:pointer-events-auto transition-opacity duration-300">
                            <div className="grid grid-cols-1 gap-4 p-6">
                                {/* Column 1 */}
                                <div>
                                    <ul className="text-gray-600 text-sm space-y-1">
                                        <li>
                                            <a
                                                href="#"
                                                className="hover:text-black text-[#666666D9] text-[9px]"
                                            >
                                                STATING
                                            </a>
                                        </li>
                                        <hr />
                                        <li>
                                            <a
                                                href="#"
                                                className="hover:text-black text-[#666666D9] text-[9px]"
                                            >
                                                TABLES
                                            </a>
                                        </li>
                                        <hr />
                                        <li>
                                            <a
                                                href="#"
                                                className="hover:text-black text-[#666666D9] text-[9px]"
                                            >
                                                KITCHEN & STORAGE
                                            </a>
                                        </li>
                                        <hr />
                                        <li>
                                            <a
                                                href="#"
                                                className="hover:text-black text-[#666666D9] text-[9px]"
                                            >
                                                CAMP BEDS
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="relative group z-10">
                        <button className=" font-semibold text-[10px] focus:outline-none text-[#666666D9] hover:text-black ">
                            CLOTHING <i className="fas fa-chevron-down text-xs ml-1"></i>
                        </button>
                        <div className="absolute left-0 mt-2  w-[500px] bg-white shadow-lg rounded-md border border-gray-200 opacity-0 group-hover:opacity-100 pointer-events-none group-hover:pointer-events-auto transition-opacity duration-300 ">
                            <div className="grid grid-cols-4 gap-4 p-6">
                                {/* <!-- Column 1 --> */}
                                <div>
                                    <a className="text-gray-800 font-bold  text-[9px] mb-2 ">
                                        MENT
                                    </a>
                                    <hr className="mt-2" />
                                    <ul className="text-gray-600 text-sm space-y-1">
                                        <li>
                                            <a
                                                href="#"
                                                className="hover:text-black text-[#666666D9] text-[9px] "
                                            >
                                                JACKETS-MENS
                                            </a>
                                        </li>
                                        <hr className="mt-2" />
                                        <li>
                                            <a
                                                href="#"
                                                className="hover:text-black text-[#666666D9] text-[9px]"
                                            >
                                                WATERPROOFS
                                            </a>
                                        </li>
                                        <hr className="mt-2" />
                                        <li>
                                            <a
                                                href="#"
                                                className="hover:text-black text-[#666666D9] text-[9px]"
                                            >
                                                FLEECE $ SWEAT-MENS
                                            </a>
                                        </li>
                                        <hr className="mt-2" />
                                        <li>
                                            <a
                                                href="#"
                                                className="hover:text-black text-[#666666D9] text-[9px]"
                                            >
                                                BASE LAYER
                                            </a>
                                        </li>
                                        <hr className="mt-2" />
                                        <li>
                                            <a
                                                href="#"
                                                className="hover:text-black text-[#666666D9] text-[9px]"
                                            >
                                                TROUSERS & SHIRTS-MENS
                                            </a>
                                        </li>
                                        <hr className="mt-2" />
                                        <li>
                                            <a
                                                href="#"
                                                className="hover:text-black text-[#666666D9] text-[9px]"
                                            >
                                                T-SHIRTS & SHIRTS-MENS
                                            </a>
                                        </li>
                                        <hr className="mt-2" />
                                        <li>
                                            <a
                                                href="#"
                                                className="hover:text-black text-[#666666D9] text-[9px]"
                                            >
                                                SWIMWEAR-MENS
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                                {/* <!-- Column 2 --> */}
                                <div>
                                    <a className="text-gray-800 font-bold  mb-2 text-[9px]">
                                        WOMEN{" "}
                                    </a>
                                    <hr className="mt-2" />
                                    <ul className="text-gray-600 text-sm space-y-1">
                                        <li>
                                            <a
                                                href="#"
                                                className="hover:text-black text-[#666666D9] text-[9px]"
                                            >
                                                JACKETS-WOMENS
                                            </a>{" "}
                                        </li>
                                        <hr className="mt-2" />
                                        <li>
                                            <a
                                                href="#"
                                                className="hover:text-black text-[#666666D9]  text-[9px]"
                                            >
                                                WAITERPROOFS
                                            </a>
                                        </li>
                                        <hr className="mt-2" />
                                        <li>
                                            <a
                                                href="#"
                                                className="hover:text-black text-[#666666D9]  text-[9px]"
                                            >
                                                FLEECE & SWEAT-WOMENS
                                            </a>
                                        </li>
                                        <hr className="mt-2" />
                                        <li>
                                            <a
                                                href="#"
                                                className="hover:text-black text-[#666666D9]  text-[9px]"
                                            >
                                                BASELAYER-WOMENS
                                            </a>
                                        </li>
                                        <hr className="mt-2" />
                                        <li>
                                            <a
                                                href="#"
                                                className="hover:text-black text-[#666666D9] text-[9px]"
                                            >
                                                TROUSERS & SHORTS-WOMEN
                                            </a>
                                        </li>
                                        <hr className="mt-2" />
                                        <li>
                                            <a
                                                href="#"
                                                className="hover:text-black text-[#666666D9]  text-[9px]"
                                            >
                                                T-SHIRTS & TOPS-WOMENS
                                            </a>
                                        </li>
                                        <hr className="mt-2" />
                                        <li>
                                            <a
                                                href="#"
                                                className="hover:text-black text-[#666666D9]  text-[9px]"
                                            >
                                                SWIMWEAR-WOMENS
                                            </a>
                                        </li>
                                        <hr className="mt-2" />
                                        <li>
                                            <a
                                                href="#"
                                                className="hover:text-black text-[#666666D9]  text-[9px]"
                                            >
                                                GYMWEAR-WOMENS
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                                {/* <!-- Column 3 --> */}
                                <div>
                                    <a className="text-gray-800   mb-2 text-[9px] font-bold">
                                        KIDS
                                    </a>
                                    <hr className="mt-2" />
                                    <ul className="text-gray-600 text-sm space-y-1">
                                        <li>
                                            <a
                                                href="#"
                                                className="hover:text-black text-[#666666D9] text-[9px] "
                                            >
                                                JEACK-KIDS
                                            </a>
                                        </li>
                                        <hr className="mt-2" />
                                        <li>
                                            <a
                                                href="#"
                                                className="hover:text-black text-[#666666D9] text-[9px]"
                                            >
                                                WATERPROOFS-KIDS
                                            </a>
                                        </li>
                                        <hr className="mt-2" />
                                        <li>
                                            <a
                                                href="#"
                                                className="hover:text-black text-[#666666D9] text-[9px]"
                                            >
                                                FLEECE & SWEAT-KIDS
                                            </a>
                                        </li>
                                        <hr className="mt-2" />
                                        <li>
                                            <a
                                                href="#"
                                                className="hover:text-black text-[#666666D9] text-[9px]"
                                            >
                                                TROUSERS & SH.KIDS
                                            </a>
                                        </li>
                                        <hr className="mt-2" />
                                        <li>
                                            <a
                                                href="#"
                                                className="hover:text-black text-[#666666D9] text-[9px]"
                                            >
                                                T-SHIRTS-KIDS
                                            </a>
                                        </li>
                                        <hr className="mt-2" />
                                        <li>
                                            <a
                                                href="#"
                                                className="hover:text-black text-[#666666D9] text-[9px]"
                                            >
                                                SWIMWEAR-KIDS
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                                <div>
                                    <a className="text-gray-800   mb-2 text-[9px] font-bold">
                                        ACCESSORIES
                                    </a>
                                    <hr className="mt-2" />
                                    <ul className="text-gray-600 text-sm space-y-1">
                                        <li>
                                            <a
                                                href="#"
                                                className="hover:text-black text-[#666666D9] text-[9px] "
                                            >
                                                GLOVES-ALL
                                            </a>
                                        </li>
                                        <hr className="mt-2" />
                                        <li>
                                            <a
                                                href="#"
                                                className="hover:text-black text-[#666666D9] text-[9px]"
                                            >
                                                HATS-SUMMER
                                            </a>
                                        </li>
                                        <hr className="mt-2" />
                                        <li>
                                            <a
                                                href="#"
                                                className="hover:text-black text-[#666666D9] text-[9px]"
                                            >
                                                HATS-WINTER
                                            </a>
                                        </li>
                                        <hr className="mt-2" />
                                        <li>
                                            <a
                                                href="#"
                                                className="hover:text-black text-[#666666D9] text-[9px]"
                                            >
                                                SCRAVES & NECK TUBES
                                            </a>
                                        </li>
                                        <hr className="mt-2" />
                                        <li>
                                            <a
                                                href="#"
                                                className="hover:text-black text-[#666666D9] text-[9px]"
                                            >
                                                BELTS
                                            </a>
                                        </li>
                                        <hr className="mt-2" />
                                        <li>
                                            <a
                                                href="#"
                                                className="hover:text-black text-[#666666D9] text-[9px]"
                                            >
                                                UMBRELLAS
                                            </a>
                                        </li>
                                        <hr className="mt-2" />
                                        <li>
                                            <a
                                                href="#"
                                                className="hover:text-black text-[#666666D9] text-[9px]"
                                            >
                                                CARE & ACCESSORIES
                                            </a>
                                        </li>
                                        <hr className="mt-2" />
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="relative group z-10">
                        <button className=" font-semibold text-[10px] focus:outline-none text-[#666666D9] hover:text-black ">
                            FOOTWEAR <i className="fas fa-chevron-down text-xs ml-1"></i>
                        </button>
                        <div
                            className="absolute left-0 mt-2  w-[500px] bg-white shadow-lg rounded-md border border-gray-200 opacity-0 group-hover:opacity-100 pointer-events-none group-hover:pointer-events-auto transition-opacity duration-300 ">
                            <div className="grid grid-cols-4 gap-4 p-6">
                                {/* <!-- Column 1 --> */}
                                <div>
                                    <a className="text-gray-800 font-bold text-[9px] mb-2 ">MENS</a>
                                    <hr className="mt-2" />
                                    <ul className="text-gray-600 text-sm space-y-1">
                                        <li><a href="#" className="hover:text-black text-[#666666D9] text-[9px] ">WALKING SHOES - MENS</a></li>
                                        <hr className="mt-2" />
                                        <li><a href="#" className="hover:text-black text-[#666666D9] text-[9px]">WALKING BOOTS - MENS</a></li>
                                        <hr className="mt-2" />
                                        <li><a href="#" className="hover:text-black text-[#666666D9] text-[9px]" >WELLINGTONS - MENS</a></li>
                                        <hr className="mt-2" />
                                        <li><a href="#" className="hover:text-black text-[#666666D9] text-[9px]" >SANDALS - MENS</a></li>
                                        <hr className="mt-2" />
                                        <li><a href="#" className="hover:text-black text-[#666666D9] text-[9px]" >SOCKS & INSOLES - MENS</a></li>



                                    </ul>
                                </div>
                                {/* <!-- Column 2 --> */}
                                <div>
                                    <a className="text-gray-800 font-bold  mb-2 text-[9px]">WOMENS </a>
                                    <hr className="mt-2" />
                                    <ul className="text-gray-600 text-sm space-y-1">
                                        <li><a href="#" className="hover:text-black text-[#666666D9]  text-[9px]">WALKING SHOES - WMNS</a> </li>
                                        <hr className="mt-2" />
                                        <li><a href="#" className="hover:text-black text-[#666666D9]  text-[9px]">WALKING BOOTS - WMNS</a></li>
                                        <hr className="mt-2" />
                                        <li><a href="#" className="hover:text-black text-[#666666D9] text-[9px]">WELLINGTONS - WMNS</a></li>
                                        <hr className="mt-2" />
                                        <li><a href="#" className="hover:text-black text-[#666666D9]  text-[9px]">SANDALS - WMNS</a></li>
                                        <hr className="mt-2" />
                                        <li><a href="#" className="hover:text-black text-[#666666D9]  text-[9px]">SOCKS & INSOLES - WMNS</a></li>


                                    </ul>
                                </div>
                                {/* <!-- Column 3 --> */}
                                <div>
                                    <a className="text-gray-800   mb-2 text-[9px] font-bold">KIDS</a>
                                    <hr className="mt-2" />
                                    <ul className="text-gray-600 text-sm space-y-1">
                                        <li><a href="#" className="hover:text-black text-[#666666D9] text-[9px] ">WELLINGTONS - KIDS</a></li>
                                        <hr className="mt-2" />
                                        <li><a href="#" className="hover:text-black text-[#666666D9] text-[9px]">SANDALS - KIDS</a></li>
                                        <hr className="mt-2" />
                                        <li><a href="#" className="hover:text-black text-[#666666D9] text-[9px]">SOCKS & INSOLES - KIDS</a></li>

                                    </ul>
                                </div>
                                <div>
                                    <a className="text-gray-800   mb-2 text-[9px] font-bold">ALL</a>
                                    <hr className="mt-2" />
                                    <ul className="text-gray-600 text-sm space-y-1">
                                        <li><a href="#" className="hover:text-black text-[#666666D9] text-[9px] ">OTHER FOOTWEAR</a></li>
                                        <hr className="mt-2" />
                                        <li><a href="#" className="hover:text-black text-[#666666D9] text-[9px]">FOOTWEAR CARE</a></li>
                                        <hr className="mt-2" />
                                        <li><a href="#" className="hover:text-black text-[#666666D9] text-[9px]">GAITERS</a></li>

                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="relative group z-10">
                        <button className=" font-semibold text-[10px] focus:outline-none text-[#666666D9] hover:text-black ">
                            RUCKSACKS & BAGS <i className="fas fa-chevron-down text-xs ml-1"></i>
                        </button>
                        <div
                            className="absolute left-0 mt-2  w-[470px] bg-white shadow-lg rounded-md border border-gray-200 opacity-0 group-hover:opacity-100 pointer-events-none group-hover:pointer-events-auto transition-opacity duration-300">
                            <div className="grid grid-cols-4 gap-4 p-6">
                                {/* <!-- Column 1 --> */}
                                <div>
                                    <a className="text-gray-800 font-bold  text-[9px] mb-2 ">RUCKSACKS</a>
                                    <hr className="mt-2" />
                                    <ul className="text-gray-600 text-sm space-y-1">
                                        <li><a href="#" className="hover:text-black text-[#666666D9] text-[9px] ">DAY BACK PACKS</a></li>
                                        <hr className="mt-2" />
                                        <li><a href="#" className="hover:text-black text-[#666666D9] text-[9px]">LARGER RUCKSACKS</a></li>
                                        <hr className="mt-2" />
                                        <li><a href="#" className="hover:text-black text-[#666666D9] text-[9px]" >RAIN COVERS</a></li>



                                    </ul>
                                </div>
                                {/* <!-- Column 2 --> */}
                                <div>
                                    <a className="text-gray-800 font-bold  mb-2 text-[9px]">BAGS </a>
                                    <hr className="mt-2" />
                                    <ul className="text-gray-600 text-sm space-y-1">
                                        <li><a href="#" className="hover:text-black text-[#666666D9]  text-[9px]">BOOT BAGS</a> </li>
                                        <hr className="mt-2" />
                                        <li><a href="#" className="hover:text-black text-[#666666D9]  text-[9px]">DRY BAGS</a></li>
                                        <hr className="mt-2" />
                                        <li><a href="#" className="hover:text-black text-[#666666D9]  text-[9px]">OTHER BAGS</a></li>

                                    </ul>
                                </div>
                                {/* <!-- Column 3 --> */}
                                <div>
                                    <a className="text-gray-800   mb-2 text-[9px] font-bold">ACCESSORIES</a>
                                    <hr className="mt-2" />
                                    <ul className="text-gray-600 text-sm space-y-1">
                                        <li><a href="#" className="hover:text-black text-[#666666D9] text-[9px] ">BELT BAGS & WALLETS</a></li>
                                        <hr className="mt-2" />
                                        <li><a href="#" className="hover:text-black text-[#666666D9] text-[9px]">HYDRATION PACKS</a></li>
                                        <hr className="mt-2" />
                                        <li><a href="#" className="hover:text-black text-[#666666D9] text-[9px]">WASH BAGS</a></li>
                                        <hr className="mt-2" />
                                        <li><a href="#" className="hover:text-black text-[#666666D9] text-[9px]">TRAVEL ACCESSORIES</a></li>

                                    </ul>
                                </div>

                            </div>
                        </div>
                    </div>
                    <div className="relative group z-10">
                        <button className=" font-semibold text-[10px] focus:outline-none text-[#666666D9] hover:text-black ">
                            HIKING <i className="fas fa-chevron-down text-xs ml-1"></i>
                        </button>
                        <div
                            className="absolute left-0 mt-2  w-[210px] bg-white shadow-lg rounded-md border border-gray-200 opacity-0 group-hover:opacity-100 pointer-events-none group-hover:pointer-events-auto transition-opacity duration-300">
                            <div className="grid grid-cols-1 gap-4 p-6">
                                {/* <!-- Column 1 --> */}
                                <div>

                                    <ul className="text-gray-600 text-sm space-y-1">
                                        <li><a href="#" className="hover:text-black text-[#666666D9] text-[9px] ">HIKE POLES & STICKS</a></li>
                                        <hr className="mt-2" />
                                        <li><a href="#" className="hover:text-black text-[#666666D9] text-[9px]">BOOKS & GUIDES</a></li>
                                        <hr className="mt-2" />
                                        <li><a href="#" className="hover:text-black text-[#666666D9] text-[9px]" >MAPS & CASES</a></li>
                                        <hr className="mt-2" />
                                        <li><a href="#" className="hover:text-black text-[#666666D9] text-[9px]" >MAP READING TOOLS</a></li>
                                        <hr className="mt-2" />
                                        <li><a href="#" className="hover:text-black text-[#666666D9] text-[9px]" >BINOCULARS</a></li>
                                        <hr className="mt-2" />
                                        <li><a href="#" className="hover:text-black text-[#666666D9] text-[9px]" >NOURISHMENT</a></li>
                                        <hr className="mt-2" />
                                        <li><a href="#" className="hover:text-black text-[#666666D9] text-[9px]" >INSECT REPELLENTS</a></li>
                                        <hr className="mt-2" />
                                        <li><a href="#" className="hover:text-black text-[#666666D9] text-[9px]" >SURVIVAL</a></li>

                                    </ul>
                                </div>


                            </div>
                        </div>
                    </div>
                    <div className="relative group z-10">
                        <button className=" font-semibold text-[10px] focus:outline-none text-[#666666D9] hover:text-black ">
                            EVERYTHING ELSE <i className="fas fa-chevron-down text-xs ml-1"></i>
                        </button>
                        <div
                            className="absolute left-1/2 mt-2 hidden  w-[640px] bg-white shadow-lg rounded-md border border-gray-200 opacity-0 group-hover:opacity-100 pointer-events-none group-hover:block transform -translate-x-1/2 transition-opacity duration-300">
                            <div className="grid grid-cols-4 gap-4 p-6">
                                {/* <!-- Column 1 --> */}
                                <div>
                                    <a className="text-gray-800 font-bold  text-[9px] mb-2 ">ELECTRICAL</a>
                                    <hr className="mt-2" />
                                    <ul className="text-gray-600 text-sm space-y-1">
                                        <li><a href="#" className="hover:text-black text-[#666666D9] text-[9px] ">HOOKUP LEADS & PLUGS</a></li>
                                        <hr className="mt-2" />
                                        <li><a href="#" className="hover:text-black text-[#666666D9] text-[9px]">BATTERIES</a></li>
                                        <hr className="mt-2" />
                                        <li><a href="#" className="hover:text-black text-[#666666D9] text-[9px]" >12V ACCESSORIES</a></li>


                                    </ul>
                                </div>
                                {/* <!-- Column 2 --> */}
                                <div>
                                    <a className="text-gray-800 font-bold  mb-2 text-[9px]">LEISURE </a>
                                    <hr className="mt-2" />
                                    <ul className="text-gray-600 text-sm space-y-1">
                                        <li><a href="#" className="hover:text-black text-[#666666D9]  text-[9px]">WATER SPORTS</a> </li>
                                        <hr className="mt-2" />
                                        <li><a href="#" className="hover:text-black text-[#666666D9]  text-[9px]">CYCLING</a></li>
                                        <hr className="mt-2" />
                                        <li><a href="#" className="hover:text-black text-[#666666D9]  text-[9px]">TOYS-INDOOR</a></li>
                                        <hr className="mt-2" />
                                        <li><a href="#" className="hover:text-black text-[#666666D9]  text-[9px]">TOYS-OUTDOOR</a></li>
                                        <hr className="mt-2" />
                                        <li><a href="#" className="hover:text-black text-[#666666D9]  text-[9px]">FISHING EQUIPMENT</a></li>
                                        <hr className="mt-2" />
                                        <li><a href="#" className="hover:text-black text-[#666666D9]  text-[9px]">POOLS & SPAS</a></li>


                                    </ul>
                                </div>
                                {/* <!-- Column 3 --> */}
                                <div>
                                    <a className="text-gray-800   mb-2 text-[9px] font-bold">CARAVAN & MOTORHOME</a>
                                    <hr className="mt-2" />
                                    <ul className="text-gray-600 text-sm space-y-1">
                                        <li><a href="#" className="hover:text-black text-[#666666D9] text-[9px] ">CLEANING & SERVICING</a></li>
                                        <hr className="mt-2" />
                                        <li><a href="#" className="hover:text-black text-[#666666D9] text-[9px]">CARAVAN & MOTORHOME EXTERIOR</a></li>
                                        <hr className="mt-2" />
                                        <li><a href="#" className="hover:text-black text-[#666666D9] text-[9px]">CARAVAN & MOTORHOME INTERIOR</a></li>
                                        <hr className="mt-2" />
                                        <li><a href="#" className="hover:text-black text-[#666666D9] text-[9px]">CARAVAN STEPS</a></li>
                                        <hr className="mt-2" />
                                        <li><a href="#" className="hover:text-black text-[#666666D9] text-[9px]">PLUMBING</a></li>

                                    </ul>
                                </div>
                                <div>
                                    <a className="text-gray-800   mb-2 text-[9px] font-bold">OTHER</a>
                                    <hr className="mt-2" />
                                    <ul className="text-gray-600 text-sm space-y-1">
                                        <li><a href="#" className="hover:text-black text-[#666666D9] text-[9px] ">D.I.Y ITEMS</a></li>
                                        <hr className="mt-2" />
                                        <li><a href="#" className="hover:text-black text-[#666666D9] text-[9px]">GIFT & HOME</a></li>
                                        <hr className="mt-2" />
                                        <li><a href="#" className="hover:text-black text-[#666666D9] text-[9px]">MOTORING</a></li>
                                        <hr className="mt-2" />
                                        <li><a href="#" className="hover:text-black text-[#666666D9] text-[9px]">FIRST AID</a></li>
                                        <hr className="mt-2" />
                                        <li><a href="#" className="hover:text-black text-[#666666D9] text-[9px]">PERSONAL ITEMS</a></li>
                                        <hr className="mt-2" />
                                        <li><a href="#" className="hover:text-black text-[#666666D9] text-[9px]">PET CARE</a></li>
                                        <hr className="mt-2" />
                                        <li><a href="#" className="hover:text-black text-[#666666D9] text-[9px]">WILDLIFE CARE</a></li>
                                        <hr className="mt-2" />
                                        <li><a href="#" className="hover:text-black text-[#666666D9] text-[9px]">SECURITY</a></li>
                                        <hr className="mt-2" />
                                        <li><a href="#" className="hover:text-black text-[#666666D9] text-[9px]">STORAGE</a></li>
                                        <hr className="mt-2" />
                                        <li><a href="#" className="hover:text-black text-[#666666D9] text-[9px]">TOOLS</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>

            {/* Main Content */}
            <div className=" mx-auto grid grid-cols-6 gap-4 p-4">
                {/* <!-- Item --> */}
                <Link to={"/men-tents1"}>
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
        </div>
    );
};

export default MainTents;
