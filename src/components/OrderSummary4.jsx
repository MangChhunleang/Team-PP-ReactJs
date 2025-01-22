import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const OrderSummary4 = () => {
    const [isChecked, setIsChecked] = useState(false);
    const [selectedPayment, setSelectedPayment] = useState(null);
    const [isOrderComplete, setIsOrderComplete] = useState(false);

    const handleCheckboxChange = () => {
        setIsChecked(!isChecked);
    };

    const handlePaymentSelection = (paymentMethod) => {
        setSelectedPayment(paymentMethod);
    };

    const handleCompleteOrder = () => {
        setIsOrderComplete(true);
    };

    const handleClosePopup = () => {
        setIsOrderComplete(false);
    };

    return (
        <>
            {isOrderComplete && (
                <div className="fixed inset-0 w-full h-full flex items-center justify-center z-[9999]">
                    <div className="absolute inset-0 bg-black opacity-50"></div>
                    <div className="bg-white p-8 rounded-lg shadow-lg text-center relative z-50">
                        <img 
                            alt="Order completion icon showing a checkmark" 
                            className="mx-auto mb-4" 
                            height="100"
                            src="src/assets/payment/100+ Alternative Ways to Say _Thank You!_.jpg"
                            width="100" 
                        />
                        <h2 className="text-lg font-bold mb-4">Order Completed!</h2>
                        <p className='text-gray-700 mb-4'>
                            Thank you for your purchase. Your order has been successfully completed.
                        </p>
                        <button
                            className="bg-[#019b7e] text-white text-sm font-bold rounded-[7px] px-4 py-2"
                            onClick={handleClosePopup}
                        >
                            Close
                        </button>
                    </div>
                </div>
            )}
            <div>
                <header className="flex items-center justify-between p-8 mb-10 bg-white shadow-md border-b border-gray-200">
                    <div className="flex items-center">
                        <a href="#" className="text-gray-700 text-sm">
                            <i className="fas fa-chevron-left mr-2"></i> Back to cart
                        </a>
                    </div>
                    <div className="absolute inset-x-0 flex justify-center">
                        <Link to={"/header-after-login"}>
                            <img src="src/assets/homme/Camphaven.png" alt="Logo" className="w-17 h-12" />
                            </Link>
                    </div>
                </header>

                <div className="w-full mx-auto py-8 px-28">
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                        <div className="lg:col-span-2 space-y-4">
                            <div className="flex items-center p-4 bg-[#019B7E] text-white rounded-lg">
                                <i className="fas fa-check-circle text-white text-sm mr-2"></i>
                                <h2 className="text-sm font-bold">Personal Information</h2>
                                <button className="ml-auto text-sm underline">Edit</button>
                            </div>
                            <div className="flex items-center p-4 bg-[#019B7E] text-white rounded-lg">
                                <i className="fas fa-check-circle text-white text-sm mr-2"></i>
                                <h2 className="text-sm font-bold">Addresses</h2>
                                <button className="ml-auto text-sm underline">Edit</button>
                            </div>
                            <div className="flex items-center p-4 bg-[#019B7E] text-white rounded-lg">
                                <i className="fas fa-check-circle text-white text-sm mr-2"></i>
                                <h2 className="text-sm font-bold">Delivery Method</h2>
                                <button className="ml-auto text-sm underline">Edit</button>
                            </div>
                            <div className="flex items-center p-4 bg-[#019B7E] text-white rounded-lg">
                                <h2 className="text-sm font-bold">04. Payment</h2>
                            </div>
                            <div className="flex items-center">
                                <input
                                    className="mr-2"
                                    id="agreementCheckbox"
                                    type="checkbox"
                                    checked={isChecked}
                                    onChange={handleCheckboxChange}
                                />
                                <label className="text-gray-800" htmlFor="agreementCheckbox">
                                    I agree to the <a className="text-blue-500 underline" href="#">
                                        terms of service
                                    </a>
                                    and
                                    <span> will adhere to them unconditionally.</span>
                                </label>
                            </div>
                            {isChecked && (
                                <>
                                    <div
                                        className="flex items-center p-7 rounded-br-[3px] border cursor-pointer bg-white shadow-md border-b border-gray-200"
                                        onClick={() => handlePaymentSelection('abaKhqr')}
                                    >
                                        <h2 className="text-sm font-bold">ABA KHQR</h2>
                                    </div>
                                    <div
                                        className="flex items-center p-7 bg-white shadow-md border-b border-gray-200 rounded-br-[3px] border cursor-pointer"
                                        onClick={() => handlePaymentSelection('creditCard')}
                                    >
                                        <h2 className="text-sm font-bold">Credit/Debit Card</h2>
                                    </div>
                                </>
                            )}
                            {isChecked && selectedPayment === 'abaKhqr' && (
                                <div className="flex items-center p-7 rounded-br-[3px] bg-white shadow-md border-b border-gray-200">
                                    <img
                                        alt="QR code for ABA KHQR payment"
                                        className="mr-4"
                                        height="100"
                                        src="src/assets/payment/bakong.png"
                                        width="100"
                                    />
                                    <h2 className="text-sm font-bold">Scan this QR code to pay with ABA KHQR</h2>
                                </div>
                            )}

                            {isChecked && selectedPayment === 'creditCard' && (
                                <div className="flex items-center p-7 rounded-br-[3px] bg-white shadow-md border-b border-gray-200">
                                    <img
                                        alt="Credit/Debit card logo"
                                        className="mr-4"
                                        height="100"
                                        src="https://storage.googleapis.com/a1aa/image/33RYZn3aXe24Xi26RLKGiKkdNaDTyGUleeDQ2jIjnbXBUH0nA.jpg"
                                        width="100"
                                    />
                                    <h2 className="text-sm font-bold">Enter your card details to proceed</h2>
                                </div>
                            )}
                            {isChecked && (
                                <button
                                    className="bg-[#019b7e] text-white text-sm font-bold rounded-[7px] px-4 py-2 mt-16"
                                    onClick={handleCompleteOrder}
                                >
                                    Complete order
                                </button>
                            )}
                        </div>
                        <div>
                            <div className="p-4 bg-white shadow-md border-b border-gray-200">
                                <h3 className="text-lg text-[#444444] mb-4">Order summary</h3>
                                <div className="flex items-center mb-4">
                                    <img src="src/assets/tentshome/detailTent/detailTent1.jpg" alt="Product Image" className="w-16 h-16 rounded-md mr-4" />
                                    <div className="flex-1">
                                        <p className="text-sm text-[#444444]">Riverside 100 20" Kids...</p>
                                        <p className="text-xs text-[#444444]">Model Code: 4480940</p>
                                        <p className="text-sm text-[#444444]">Quantity: 1</p>
                                    </div>
                                    <p className="text-sm text-[#444444]">$159.00</p>
                                </div>
                                <div className="border-t pt-4">
                                    <p className="text-sm text-[#019B7E] mb-3">Have a voucher code?</p>
                                    <div className="flex items-center flex-col space-y-3">
                                        <input className="border border-[#D4D4D5] w-80 p-3 h-8" type="text" placeholder="Voucher code" />
                                        <button className="bg-[#019B7E] text-white text-sm font-bold px-4 py-2 rounded-lg w-80">
                                            Add
                                        </button>
                                    </div>
                                </div>
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
                                <p className="mt-4 text-xs text-gray-500">
                                    *Delivery fee will be calculated after the checkout step is completed.
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
        </>
    );
};

export default OrderSummary4;
