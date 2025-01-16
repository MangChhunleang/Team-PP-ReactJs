import React from 'react'

export const Footer = () => {
  return (
    
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
  )
}
