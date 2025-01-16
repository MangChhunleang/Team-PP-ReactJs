import React from 'react'
import { Link } from 'react-router-dom';

const OrderSummary2 = () => {
    return (
        <div>
            <header className="flex items-center justify-between p-8 mb-10 bg-white shadow-md border-b border-gray-200">
                {/* <!-- Back to cart --> */}
                <div className="flex items-center">
                    <a href="./order_sammary.html" className="text-gray-700 text-sm">
                        <i className="fas fa-chevron-left mr-2"></i> Back to cart
                    </a>
                </div>

                {/* <!-- Logo --> */}
                <div className="absolute inset-x-0 flex justify-center">
                    <a href="">
                        <img src="src/assets/homme/Camphaven.png" alt="Logo" className="w-17 h-12" />
                    </a>
                </div>
            </header>

            <div className="w-full mx-auto py-8 px-28">
                {/* <!-- Main Content --> */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 ">
                    {/* <!-- Left Section --> */}
                    <div className="lg:col-span-2 space-y-4 ">
                        {/* <!-- Personal Information --> */}
                        <div className="">
                            <div className="flex items-center p-4 bg-[#019B7E] text-white rounded-t-lg">
                                <i className="fas fa-check-circle text-white text-sm mr-2"></i>
                                <h2 className="text-sm font-bold">Personal Information</h2>
                                <button className="ml-auto text-sm underline">Edit</button>
                            </div>
                        </div>
                        {/* <!-- Steps --> */}
                        <div className="">
                            <div className="flex items-center justify-between p-4 bg-[#019B7E] text-white rounded-t-lg">
                                <h2 className="text-sm font-bold">02. Addresses</h2>
                            </div>
                        </div>

                        {/* <!-- Address Section --> */}
                        <div className="mb-4 p-4 bg-white shadow-md border-b border-gray-200">
                            <h2 className="text-lg font-medium text-[#565356] mb-2">Add a new address</h2>
                            <form className="space-y-4">
                                <div className="grid grid-cols-2 gap-4">
                                    <div>
                                        <label className="block text-sm font-medium text-[#6F6C71] mb-1" for="firstName">* First Name</label>
                                        <input type="text" id="firstName" value="Mike"
                                            className="w-full mt-2 border-2 text-[#71747E] border-gray-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-green-500" />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium  text-[#6F6C71] mb-1" for="lastName">* Last Name</label>
                                        <input type="text" id="lastName" value="Brown"
                                            className="w-full border-2 text-[#71747E] mt-2 border-gray-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-green-500" />
                                    </div>
                                </div>
                                <div>
                                    <label className="block text-sm font-medium  text-[#6F6C71] mb-1" for="phone">* Phone</label>
                                    <input type="text" id="phone" value="+855"
                                        className="w-full border-2 mt-2 text-[#71747E] border-gray-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-green-500" />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium  mt-2 text-[#6F6C71] mb-1" for="street">* Street</label>
                                    <input type="text" id="street"
                                        className="w-full border-2 border-gray-300 mt-2 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-green-500" />
                                </div>
                                <div className="">
                                    <div>
                                        <label className="block text-sm font-medium  text-[#6F6C71] mb-1" for="city">* City/Province</label>
                                        <select id="city"
                                            className="w-full border-2 bg-white mt-2 text-[#71747E] border-gray-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-green-500">
                                            <option value="">- Please choose -</option>
                                        </select>
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium  text-[#6F6C71] mb-1 mt-3" for="district">*
                                            District/Khan</label>
                                        <select id="district"
                                            className="w-full border-2 bg-white mt-2 text-[#71747E] border-gray-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-green-500">
                                            <option value="">- Please choose -</option>
                                        </select>
                                    </div>
                                </div>
                                <div>
                                    <div>
                                        <label className="block text-sm font-medium   text-[#6F6C71] mb-1 " for="commune">* Commune/Sangkat</label>
                                        <select id="commune"
                                            className="w-full border-2 mt-2 bg-white text-[#71747E] border-gray-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-green-500">
                                            <option value="">- Please choose -</option>
                                        </select>
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium  text-[#6F6C71] mb-1 mt-3" for="addressName">* Address
                                            Name</label>
                                        <select id="addressName"
                                            className="w-full border-2 mt-2 border-gray-300 text-[#71747E] bg-white rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-green-500">
                                            <option value="">- Please choose -</option>
                                        </select>
                                    </div>
                                </div>
                                <div>
                                    <label className="block text-sm font-medium  text-[#6F6C71] mb-1" for="additionalStreet">* Street</label>
                                    <input type="text" id="additionalStreet" placeholder="e.g., Home, Office..."
                                        className="w-full border-2 mt-2 border-gray-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-green-500" />
                                </div>
                                <p className="text-sm text-gray-500 pb-10">* - Mandatory fields</p>
                                <Link to={"/order-summary3"}>
                                    <button type="button"
                                        className="bg-[#019B7E] text-white px-6 py-2 rounded-md text-sm font-medium hover:bg-green-700 pb">
                                        Save Address
                                    </button>
                                </Link>
                            </form>
                        </div>

                        <button className="w-full text-left p-4 bg-[#019B7E] text-[#d9d9d9] text-sm font-bold rounded-lg">
                            03. Delivery Method
                        </button>
                        <button className="w-full text-left p-4 bg-[#019B7E] text-[#d9d9d9] text-sm font-bold rounded-lg">
                            04. Payment
                        </button>
                    </div>

                    {/* <!-- Right Section --> */}
                    <div>
                        <div className="p-4 bg-white shadow-md border-b border-gray-200">
                            <h3 className="text-lg text-[#444444] mb-4">Order summary</h3>
                            {/* <!-- Product --> */}
                            <div className="flex items-center mb-4">
                            <img src="src/assets/tentshome/detailTent/detailTent1.jpg" alt="Product Image" className="w-16 h-16 rounded-md mr-4" />
                                <div className="flex-1">
                                    <p className="text-sm text-[#444444]">Riverside 100 20" Kids...</p>
                                    <p className="text-xs text-[#444444]">Model Code: 4480940</p>
                                    <p className="text-sm text-[#444444]">Quantity: 1</p>
                                </div>
                                <p className="text-sm text-[#444444]">$159.00</p>
                            </div>

                            {/* <!-- Voucher Code --> */}
                            <div className="border-t pt-4">
                                <p className="text-sm text-[#019B7E] mb-3">Have a voucher code?</p>

                                <div className="flex items-center flex-col space-y-3">
                                    <input className="border border-[#D4D4D5] w-80 p-3 h-8" type="text" placeholder="Voucher code" />
                                    <button className="bg-[#019B7E] text-white font-bold px-4 py-2 rounded-lg w-80">
                                        Add
                                    </button>
                                </div>
                            </div>

                            {/* <!-- Price Details --> */}
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

                            {/* <!-- Note --> */}
                            <p className="mt-4 text-xs text-gray-500">
                                *Delivery fee will be calculated after the checkout step is
                                completed.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default OrderSummary2;
