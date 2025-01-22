import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const CheckCard = () => {
    const [isDropdownVisible, setIsDropdownVisible] = useState(false);
    const [quantity, setQuantity] = useState(1);
    const price = 30;

    const toggleVisibility = () => {
        setIsDropdownVisible(!isDropdownVisible);
    };

    const handleDecrement = () => {
        if (quantity > 1) {
            setQuantity(quantity - 1);
        }
    };

    const handleIncrement = () => {
        setQuantity(quantity + 1);
    };

    const subtotal = price * quantity;

    return (
        <div className="w-full mx-auto">
            {/* Top Navbar */}
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
                        <button onClick={toggleVisibility}>
                            <div className="relative flex items-center justify-center w-[50px] h-10 bg-none-100 rounded-xl text-gray-600 hover:bg-blue-200">
                                <i className="fas fa-user-circle mr-1 text-2xl"></i>
                                <i className="fa-solid fa-caret-down"></i>
                            </div>
                        </button>
                        {/* Dropdown Menu */}
                        <div
                            className={`z-50 fixed absolute left-0 mt-2 w-64 bg-white border border-gray-200 rounded-lg shadow-lg ${isDropdownVisible ? '' : 'hidden'
                                }`}
                        >
                            {/* Add dropdown items */}
                        </div>
                    </div>
                    {/* Basket */}
                    <div className="flex items-center text-gray-700">
                        <span>Basket / ${subtotal.toFixed(2)}</span>
                        <a href="">
                            <i className="fas fa-shopping-cart ml-2">
                                <span className="absolute mr-10 top-4 inline-flex px-2 py-1 text-xs font-bold leading-none text-white bg-red-600 rounded-full">
                                    1
                                </span>
                            </i>
                        </a>
                    </div>
                    <Link to="/order-summary1">
                        <button className="px-6 py-2 bg-[#019B7E] text-white rounded-full hover:bg-green-700">
                            CHECKOUT
                        </button>
                    </Link>
                </div>
            </header>

            <nav className="text-2xl uppercase flex items-center justify-center gap-7 my-10">
                <h2>Shopping Cart</h2>
                <i className="fas fa-angle-right text-gray-400"></i>
                <h2 className="text-gray-400">Checkout details</h2>
                <i className="fas fa-angle-right text-gray-400"></i>
                <h2 className="text-gray-400">Order Complete</h2>
            </nav>
            <div className="flex justify-around">
                <div className="flex justify-between gap-6 text-xl text-gray-500">
                    <div>
                        <h2 className="font-bold">PRODUCT</h2>
                        <span className="flex items-center gap-3 my-10 mt-2">
                            <button className="border border-black rounded-full text-gray-700 text-lg w-8 h-8">
                                ✕
                            </button>
                            <img
                                src="src/assets/tentshome/detailTent/detailTent1.jpg"
                                alt="Tent1"
                                className="w-24"
                            />
                            <p className="text-[#019B7E]">Robens Arrow Head 1 Man Tent</p>
                        </span>
                        <div className="flex gap-5">
                            <button
                                className="text-[#019B7E] py-2 px-4 rounded mb-4 border-2 border-[#019B7E] hover:text-green-700"
                                type="submit"
                            >
                                <i className="fas fa-arrow-left"></i> CONTINUE SHOPPING
                            </button>
                            <button
                                className="bg-[#019B7E] text-white py-2 px-4 rounded mb-4 hover:bg-green-700"
                                type="submit"
                            >
                                UPDATE BASKET
                            </button>
                        </div>
                    </div>
                    <div>
                        <h2 className="font-bold">PRICE</h2>
                        <span className="items-center">
                            <h2 className="mt-11 text-xl text-gray-800">
                                ${price}
                            </h2>
                        </span>
                    </div>

                    <div>
                        <h2 className="font-bold">QUANTITY</h2>
                        <div className="flex items-center justify-center text-black mt-9 border-2 border-gray-500">
                            <button onClick={handleDecrement} className="px-2 py-1 rounded-l">-</button>
                            <span className="px-2 py-1">{quantity}</span>
                            <button onClick={handleIncrement} className="px-2 py-1 rounded-r">+</button>
                        </div>
                    </div>

                    <div>
                        <h2 className="font-bold">SUBTOTAL</h2>
                        <h2 className="mt-11 text-xl text-gray-800">${subtotal.toFixed(2)}</h2>
                    </div>
                </div>

                <div className="text-xl w-1/3">
                    <h2 className="font-bold">Order Summary</h2>
                    <div>
                        <div className="flex justify-between mx-2 my-4">
                            <h2>Subtotal</h2>
                            <p>${subtotal.toFixed(2)}</p>
                        </div>
                        <div className="flex justify-between mx-2 my-4">
                            <h2>*Delivery</h2>
                            <p>-----</p>
                        </div>
                        <div className="flex justify-between mx-2 my-4">
                            <h2>*Taxes</h2>
                            <p>-----</p>
                        </div>
                        <div className="my-4">
                            <h2 className="text-[#019B7E]">Have a voucher code?</h2>
                            <div className="my-4">
                                <input
                                    className="shadow appearance-none border border-gray-500 rounded w-full py-2 px-3 mb-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                    type="text"
                                />
                                <button
                                    className="bg-[#019B7E] text-white font-bold py-2 px-4 rounded w-full mb-4 hover:bg-green-700"
                                    type="submit"
                                >
                                    Add
                                </button>
                            </div>
                            <div className="border-t-2 border-black mb-4 w-full"></div>
                            <div className="text-gray-700">
                                <div className="flex justify-between mx-2 my-4">
                                    <h2 className="font-bold">Estimated Total</h2>
                                    <p>${subtotal.toFixed(2)}</p>
                                </div>
                                <Link to={"/checkout"}>
                                    <button className="bg-[#019B7E] text-white font-bold py-2 px-4 rounded w-full mb-4 hover:bg-green-700"
                                        type="submit">
                                        Checkout
                                    </button>
                                </Link>
                                <Link to="/order-summary1">
                                    <p className="text-gray-600 text-base">
                                        *Delivery Fee will be calculated after the checkout step is
                                        completed.
                                    </p>
                                </Link>
                            </div>
                        </div>
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
    );
};

export default CheckCard;
