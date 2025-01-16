import React from 'react'
import { Link } from 'react-router-dom';


const OrderSummary = () => {
    return (
        <div>
            <header className="flex items-center justify-between p-8 mb-10 bg-white shadow-md border-b border-gray-200">
                {/* Back to cart */}
                <div className="flex items-center">
                    <Link to="/check-card" className="text-gray-700 text-sm">
                        <i className="fas fa-chevron-left mr-2"></i> Back to cart
                    </Link>
                </div>

                {/* Logo */}
                <div className="absolute inset-x-0 flex justify-center">
                    <Link to="/">
                        <img src="src/assets/homme/Camphaven.png" alt="Logo" className="w-17 h-12" />
                    </Link>
                </div>
            </header>

            <div className="w-full mx-auto py-8 px-28">
                {/* Main Content */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                    {/* Left Section */}
                    <div className="lg:col-span-2 space-y-4">
                        {/* Personal Information */}
                        <div>
                            <div className="flex items-center justify-between p-4 bg-[#019B7E] text-white rounded-t-lg">
                                <h2 className="text-sm font-bold">01. Personal Information</h2>
                                <button className="text-sm underline">Edit</button>
                            </div>
                            <div className="p-4 bg-white">
                                <p className="text-sm text-[#636064]">
                                    Connected as
                                    <a href="#" className="text-[#2786DD] underline"> Mike Brown</a>.
                                    <a href="#" className="text-blue-500 underline"> Change account</a>
                                </p>
                                <p className="text-xs text-[#C0C0C5] mt-1">
                                    Note: Your cart will be emptied if you sign out
                                </p>
                                <Link to={"/order-summary2"}>
                                    <button className="mt-4 bg-[#019B7E] text-white text-sm font-bold py-2 px-4 rounded">
                                        Next step
                                    </button>
                                </Link>
                            </div>
                        </div>
                        {/* Steps */}
                        <button className="w-full text-left p-4 bg-[#019B7E] text-[#d9d9d9] text-sm font-bold rounded-lg">
                            02. Addresses
                        </button>
                        <button className="w-full text-left p-4 bg-[#019B7E] text-[#d9d9d9] text-sm font-bold rounded-lg">
                            03. Delivery Method
                        </button>
                        <button className="w-full text-left p-4 bg-[#019B7E] text-[#d9d9d9] text-sm font-bold rounded-lg">
                            04. Payment
                        </button>
                    </div>

                    {/* Right Section */}
                    <div>
                        <div className="p-4">
                            <h3 className="text-lg text-[#444444] mb-4">Order summary</h3>
                            {/* Product */}
                            <div className="flex items-center mb-4">
                                <img src="src/assets/tentshome/detailTent/detailTent1.jpg" alt="Product Image" className="w-16 h-16 rounded-md mr-4" />
                                <div className="flex-1">
                                    <p className="text-sm text-[#444444]">Riverside 100 20" Kids...</p>
                                    <p className="text-xs text-[#444444]">Model Code: 4480940</p>
                                    <p className="text-sm text-[#444444]">Quantity: 1</p>
                                </div>
                                <p className="text-sm text-[#444444]">$159.00</p>
                            </div>

                            {/* Voucher Code */}
                            <div className="border-t pt-4">
                                <p className="text-sm text-[#019B7E] mb-3">Have a voucher code?</p>

                                <div className="flex items-center flex-col space-y-3">
                                    <input
                                        className="border border-[#D4D4D5] w-80 p-3 h-8"
                                        type="text"
                                        placeholder="Voucher code"
                                    />
                                    <button className="bg-[#019B7E] text-white font-bold px-4 py-2 rounded-lg w-80">
                                        Add
                                    </button>
                                </div>
                            </div>

                            {/* Price Details */}
                            <div className="mt-4">
                                <div className="flex justify-between text-sm text-[#514957]">
                                    <p>Subtotal</p>
                                    <p>$159.00</p>
                                </div>
                                <div className="flex justify-between text-sm text-gray-700">
                                    <p className="mt-2">Delivery</p>
                                    <p className="mt-2">Free</p>
                                </div>
                                <div className="flex justify-between text-sm text-gray-700 border-b-4 border-[#019B7E] mt-5"></div>
                                <div className="mt-2 pt-2 flex justify-between text-lg text-[#019B7E]">
                                    <p>Total</p>
                                    <p>$159.00</p>
                                </div>
                            </div>

                            {/* Note */}
                            <p className="mt-4 text-xs text-gray-500">
                                *Delivery fee will be calculated after the checkout step is
                                completed.
                            </p>
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
    )
}



export default OrderSummary;
