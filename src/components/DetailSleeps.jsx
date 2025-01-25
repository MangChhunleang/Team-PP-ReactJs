import React, { useRef, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import sleepDetail1 from '../assets/sleep/sleepDetail/sleepDetail1.png';
import sleepDetail2 from '../assets/sleep/sleepDetail/sleepDetail2.png';
import sleepDetail3 from '../assets/sleep/sleepDetail/sleepDetail3.png';
import sleepDetail4 from '../assets/sleep/sleepDetail/sleepDetail4.png';
import sleepDetail5 from '../assets/sleep/sleepDetail/sleepDetail5.png';
import sleepDetail6 from '../assets/sleep/sleepDetail/sleepDetail6.png';
import sleepDetail7 from '../assets/sleep/sleepDetail/sleepDetail7.png';
import sleepDetail8 from '../assets/sleep/sleepDetail/sleepDetail8.png';

const DetailSleeps = () => {
    const carouselItems = useRef(null);
    const [currentIndex, setCurrentIndex] = useState(0);
    const images = [sleepDetail1, sleepDetail2, sleepDetail3, sleepDetail4, sleepDetail5, sleepDetail6, sleepDetail7, sleepDetail8];

    const handlePrevClick = () => {
        setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
    };

    const handleNextClick = () => {
        setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
    };

    return (
        <div>
            <header className="flex items-center justify-between p-4 bg-white shadow-md border-b border-gray-200">

                {/* Logo */}
                <Link to={"/header-login"}>
                
                <div className="flex items-center space-x-2">
                    
                    <img
                        src="src/assets/homme/Camphaven.png"
                        alt="Logo"
                        className="w-17 h-12"
                    />
                </div>
                </Link>
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
                        <Link to="/check-card1">
                            <i className="fas fa-shopping-cart ml-2">
                                <span className="absolute mr-10 top-4 inline-flex px-2 py-1 text-xs font-bold leading-none text-white bg-red-600 rounded-full">
                                    1
                                </span>
                            </i>
                        </Link>
                    </div>
                    <Link to={""}>
                        <button className="px-6 py-2 bg-[#019B7E] text-white rounded-full hover:bg-green-700">
                            CHECKOUT
                        </button>
                        </Link>
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
                                            <a
                                                href="#"
                                                className="hover:text-black text-[#666666D9] text-[9px]"
                                            >
                                                1MAN TENTS
                                            </a>
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
            <nav className="mx-24">
                <h2 className="uppercase text-gray-600">Home / SLEEPING / Sleeping Bags Single
                </h2>
            </nav>
            <div>
                <div className="flex flex-col justify-around gap-20 md:flex-row bg-white shadow-xl rounded-lg mx-auto mt-10 max-w-6xl">
                    <div className="md:w-1/2 p-4">
                        <div id="carousel" className="relative" data-carousel="static">
                            <div className="relative z-0 h-[300px] overflow-hidden rounded-lg border-2 border-gray-300" ref={carouselItems}>
                                {images.map((image, index) => (
                                    <div key={index} className={`duration-700 ease-in-out ${index === currentIndex ? 'block' : 'hidden'}`} data-carousel-item>
                                        <img src={image} className="block w-full h-[300px] object-contain" alt={`Tent Image ${index + 1}`} />
                                    </div>
                                ))}
                            </div>
                            
                            <button 
                                onClick={handlePrevClick}
                                className="absolute top-0 left-0 z-30 flex items-center justify-center h-full px-4 group focus:outline-none"
                            >
                                <span className="inline-flex items-center justify-center w-8 h-8 bg-white border border-gray-400 rounded-full">
                                    <svg aria-hidden="true" className="w-5 h-5 text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"></path>
                                    </svg>
                                </span>
                            </button>
                            
                            <button 
                                onClick={handleNextClick}
                                className="absolute top-0 right-0 z-30 flex items-center justify-center h-full px-4 group focus:outline-none"
                            >
                                <span className="inline-flex items-center justify-center w-8 h-8 bg-white border border-gray-400 rounded-full">
                                    <svg aria-hidden="true" className="w-5 h-5 text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                                    </svg>
                                </span>
                            </button>
                        </div>
                    </div>
                    <div className="md:w-1/2 p-6">
                        <h2 className="text-2xl font-bold text-gray-800">
                        Outwell Camper Lux Sleeping Bag Single  <br />
                        Left Hand Zip
                        </h2>
                        <p className="text-lg text-black font-semibold mt-2">$54.95</p>
                        <p className="text-sm text-[#019B7E] mt-1">In stock</p>
                        <div className="flex gap-24">
                            <div className="mt-4">
                                <label htmlFor="size" className="block text-sm font-medium text-gray-700">
                                    Size
                                </label>
                                <select id="size" name="size" className="block mt-5 border-2 px-4 py-1 border-gray-500 shadow-sm items-center">
                                    <option value="No Size">No Size</option>
                                    <option value="Small">Small</option>
                                    <option value="Medium">Medium</option>
                                    <option value="Large">Large</option>
                                </select>
                            </div>
                            <div className="mt-4 items-center">
                                <h2 className="block text-sm font-medium text-gray-700">
                                    Quantity
                                </h2>
                                <div className="flex items-center justify-center text-black mt-5 border-2 border-gray-500">
                                    <button id="decrement" className="px-3 py-1 rounded-l">-</button>
                                    <span id="quantity" className="px-3 py-1">1</span>
                                    <button id="increment" className="px-3 py-1 rounded-r">+</button>
                                </div>
                            </div>
                        </div>
                        <div className="mt-6 flex gap-20">
                            <button className="px-4 py-2 text-white bg-[#019B7E] rounded-md hover:bg-green-700 focus:ring-2 focus:ring-[#019B7E] focus:outline-none">
                                Add to Basket
                            </button>
                            <button className="px-4 py-2 text-white bg-[#019B7E] rounded-md hover:bg-green-700 focus:ring-2 focus:ring-[#019B7E] focus:outline-none">
                                Ask a Question
                            </button>
                        </div>
                        <p className="mt-4 text-xs text-gray-500">SKU: 330068</p>

                    </div>
                </div>
                <div className="bg-white mt-3">
                    <div className="flex justify-center w-full mt-4">
                        <h2 className="rounded-2xl border-2 uppercase font-bold text-[#019B7E] border-[#019B7E] px-5">
                            Description
                        </h2>
                    </div>
                    <div className="mx-3 mt-2">
                        <h2 className="text-xl">Product Description</h2>
                        <p className="text-gray-700 text-sm mt-1">
                            A neat, fast pitching two pole tunnel design of inner tent and
                            flysheet with a front pole for extra headroom, Spirit 200 is ideal
                            for two young outdoor adventurers. Features include a detachable
                            groundsheet in the generous porch area for handy gear storage and
                            three vents for effective ventilation. For convenience, there is a
                            lantern hanging point and an organiser pocket.
                        </p>
                        <p className="text-gray-700 mt-1">
                            <span className="text-black">Type of tent:</span> Tunnel
                            <br />
                            <span className="text-black"> Flysheet:</span> WeatherGuard 2000, 180T
                            polyester PU coated, fire retardant <br />
                            <span className="text-black"> Taping: </span>
                            Taped seams <br />
                            <span className="text-black">Hydrostatic Head:</span>
                            2000 mm <br />
                            <span className="text-black">Sleeps:</span>
                            2 <br />
                            <span className="text-black">Poles:</span>
                            EnduraFlex, fibreglass 7.9 mm <br />
                            <span className="text-black">Inner tent:</span>
                            Breathable polyester <br />
                            <span className="text-black">Floor Inner:</span>
                            Polyethylene <br />
                            <span className="text-black">Groundsheet:</span>
                            Polyethylene <br />
                            <span className="text-black">Colour:</span>
                            Green & Sand <br />
                            <span className="text-black">Textile Fiber Composition:</span>
                            <span className="text-black">Flysheet:</span>
                            100% <span className="text-black">Polyester Inner tent:</span> 100%
                            <span className="text-black">Polyester Mesh:</span>
                            100%
                            <br />
                            <span className="text-black">Polyester Pack size:</span>
                            60 x 18 cm <br />
                            <span className="text-black">Weight:</span>
                            2.9 kg
                        </p>
                        <p className="text-gray-700 text-sm mt-1">
                            Be aware that (UV) ultraviolet rays will damage your tent if you
                            expose it to direct sunlight for longer periods of time. Easy Camp
                            products are made for camping use which is normally 2-5 weeks
                            usage a year. They are not designed for permanent usage. Camping
                            near the sea or lake can further enhance the effect of UV
                            radiation. The same applies to poles and metal parts.
                        </p>
                    </div>
                    <div className="container w-full mx-auto py-8 px-16 mt-5">
                        <div className="relative">
                            {/* <!-- Left Button --> */}
                            <button id="prevButton"
                                className="absolute left-0 top-1/3 transform -translate-y-1/2 bg-gray-200 p-2 rounded-full transition-transform duration-200 ease-out">
                                <i className="fas fa-chevron-left"></i>
                            </button>

                            {/* <!-- Carousel Items Wrapper --> */}
                            <div id="carouselItems" className="flex overflow-x-auto space-x-4 transition-all duration-500">
                                {/* <!-- Item 1 --> */}
                                <div className="min-w-[200px]">
                                    <img alt="Woman wearing a long green jacket" className="w-full" height="300"
                                        src="src/assets/scrollTent/Tent1.png" width="200" />
                                    <div className="text-center mt-2">
                                        <p className="text-sm">2 Man Tent - MH100</p>
                                        <p className="text-black font-bold">$39.00</p>
                                    </div>
                                </div>
                                {/* <!-- Item 2 --> */}
                                <div className="min-w-[200px]">
                                    <img alt="Woman wearing a velour fleece in red" className="w-full" height="300"
                                        src="src/assets/scrollTent/Tent2.png" width="200" />
                                    <div className="text-center mt-2">
                                        <p className="text-sm">2 person pop-up tent - 2 Seconds</p>
                                        <p className="text-black font-bold">$75.00</p>
                                    </div>
                                </div>
                                {/* <!-- Item 3 --> */}
                                <div className="min-w-[200px]">
                                    <img alt="Man wearing a hybrid jacket in black and green" className="w-full" height="300"
                                        src="src/assets/scrollTent/Tent3.png" width="200" />
                                    <div className="text-center mt-2">
                                        <p className="text-sm">Camping Tent MH100 - 3-P - Fresh&Black</p>
                                        <p className="text-black font-bold">$75.00</p>
                                    </div>
                                </div>
                                {/* <!-- Item 4 --> */}
                                <div className="min-w-[200px]">
                                    <img alt="Man wearing a full zip fleece in navy blue" className="w-full" height="300"
                                        src="src/assets/scrollTent/Tent4.png" width="200" />
                                    <div className="text-center mt-2">
                                        <p className="text-sm">Camping tent - 2 SECONDS - 3-person</p>
                                        <p className="text-black font-bold">$85.00</p>
                                    </div>
                                </div>
                                {/* <!-- Item 5 --> */}
                                <div className="min-w-[200px]">
                                    <img alt="Woman wearing a waterproof changing robe in pink" className="w-full" height="300"
                                        src="src/assets/scrollTent/Tent5.png" width="200" />
                                    <div className="text-center mt-2">
                                        <p className="text-sm">
                                            Camping tent 2 Seconds - 2-Person - Fresh&Black
                                        </p>
                                        <p className="text-black font-bold">$99.00</p>
                                    </div>
                                </div>
                                {/* <!-- Item 6 --> */}
                                <div className="min-w-[200px]">
                                    <img alt="Person wearing a fleece lined changing robe in black" className="w-full" height="300"
                                        src="src/assets/scrollTent/Tent6.png" width="200" />
                                    <div className="text-center mt-2">
                                        <p className="text-sm">
                                            Camping tent 2 Seconds - 2-Person - Fresh&Black
                                        </p>
                                        <p className="text-black font-bold">$129.00</p>
                                    </div>
                                </div>
                                <div className="min-w-[200px]">
                                    <img alt="Woman wearing a long green jacket" className="w-full" height="300"
                                        src="src/assets/scrollTent/Tent7.png" width="200" />
                                    <div className="text-center mt-2">
                                        <p className="text-sm">
                                            Camping tent 2 Seconds Easy - 2-Person - Fresh&Black
                                        </p>
                                        <p className="text-black font-bold">$125.00</p>
                                    </div>
                                </div>
                                {/* <!-- Item 2 --> */}
                                <div className="min-w-[200px]">
                                    <img alt="Woman wearing a velour fleece in red" className="w-full" height="300"
                                        src="src/assets/scrollTent/Tent8.png" width="200" />
                                    <div className="text-center mt-2">
                                        <p className="text-sm">
                                            Camping Tent with Poles Arpenaz 4.1 F&B 4 Persons 1 Bedroom
                                        </p>
                                        <p className="text-black font-bold">$249.00</p>
                                    </div>
                                </div>
                                {/* <!-- Item 3 --> */}
                                <div className="min-w-[200px]">
                                    <img alt="Man wearing a hybrid jacket in black and green" className="w-full" height="300"
                                        src="src/assets/scrollTent/Tent9.png" width="200" />
                                    <div className="text-center mt-2">
                                        <p className="text-sm">
                                            Inflatable Camping Tent Air Seconds 4.1 F&B 4 Person 1
                                            Bedroom
                                        </p>
                                        <p className="text-black font-bold">$399.00</p>
                                    </div>
                                </div>
                                {/* <!-- Item 4 --> */}
                                <div className="min-w-[200px]">
                                    <img alt="Man wearing a full zip fleece in navy blue" className="w-full" height="300"
                                        src="src/assets/scrollTent/Tent10.png" width="200" />
                                    <div className="text-center mt-2">
                                        <p className="text-sm">
                                            Camping Tent MH100 - 2-Person - Fresh&Black
                                        </p>
                                        <p className="text-black font-bold">$59.00</p>
                                    </div>
                                </div>
                            </div>

                            {/* <!-- Right Button --> */}
                            <button id="nextButton"
                                className="absolute right-0 top-1/3 transform -translate-y-1/2 bg-gray-200 p-2 rounded-full transition-transform duration-200 ease-out">
                                <i className="fas fa-chevron-right"></i>
                            </button>
                        </div>
                    </div>
                </div>
                <footer className="bg-gray-300 py-6 mt-28 text-[#666666]">
      <div className="container mx-auto">
        <nav className="mb-4 ml-10">
          <div>
            <a href="#" className="mx-2 hover:text-[#019B7E]">Terms & Conditions</a>
            <a href="#" className="mx-2 hover:text-[#019B7E]">Privacy Policy</a>
            <a href="#" className="mx-2 hover:text-[#019B7E]">Returns Policy</a>
            <a href="#" className="mx-2 hover:text-[#019B7E]">Cookie Policy</a>
            <a href="#" className="mx-2 hover:text-[#019B7E]">Contact Us</a>
            <a href="#" className="mx-2 hover:text-[#019B7E]">Facebook</a>
            <a href="#" className="mx-2 hover:text-[#019B7E]">Instagram</a>
            <a href="#" className="mx-2 hover:text-[#019B7E]">Ultimate Guide to Camping</a>
            <a href="#" className="mx-2 hover:text-[#019B7E]">Delivery Charges</a>
          </div>
          <div className="flex justify-end space-x-8 mr-10 ">
            <a href="" className="text-4xl hover:text-[#019B7E]"><i className="fa-brands fa-cc-visa"></i></a>
            <a href="" className="text-4xl hover:text-[#019B7E]"><i className="fa-brands fa-cc-paypal"></i></a>
            <a href="" className="text-4xl hover:text-[#019B7E]"><i className="fa-brands fa-cc-mastercard"></i></a>
          </div>
          <div>
            <p className=" ml-2">Copyright 2024 © Camp Haven</p>
          </div>
        </nav>
      </div>
    </footer>
            </div>
        </div>
    );
}

export default DetailSleeps;

