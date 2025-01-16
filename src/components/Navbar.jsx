import React from "react";

const Navbar = () => {
  return (
    <div>
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
    </div>
  );
};

export default Navbar;
