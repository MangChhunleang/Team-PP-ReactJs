import React from 'react'

const DetailTents = () => {
    return (
        <div>
            <nav className="mx-24">
                <h2 className="uppercase text-gray-600">Home / Tents / 2 Man Tents</h2>
            </nav>
            <div>
                <div
                    className="flex flex-col justify-around gap-20 md:flex-row bg-white shadow-xl rounded-lg mx-auto mt-10 max-w-6xl">
                    {/* <!-- Image Carousel --> */}
                    <div className="md:w-1/2 p-4">
                        <div id="carousel" className="relative" data-carousel="static">
                            {/* <!-- Carousel wrapper --> */}
                            <div className="relative z-0 h-[300px] overflow-hidden rounded-lg border-2 border-gray-300">
                                {/* <!-- Items --> */}
                                <div className="hidden duration-700 ease-in-out" data-carousel-item>
                                    <img src="src/assets/tentshome/tentDetail/tentDetail1.png" className="block w-full h-[300px] object-contain"
                                        alt="Tent Image 1" />
                                </div>
                                <div className="hidden duration-700 ease-in-out" data-carousel-item>
                                    <img src="src/assets/tentshome/tentDetail/tentDetail2.png" className="block w-full h-[300px] object-contain"
                                        alt="Tent Image 2" />
                                </div>
                                <div className="hidden duration-700 ease-in-out" data-carousel-item>
                                    <img src="src/assets/tentshome/tentDetail/tentDetail3.png" className="block w-full h-[300px] object-contain"
                                        alt="Tent Image 3" />
                                </div>
                                <div className="hidden duration-700 ease-in-out" data-carousel-item>
                                    <img src="src/assets/tentshome/tentDetail/tentDetail4.png" className="block w-full h-[300px] object-contain"
                                        alt="Tent Image 4" />
                                </div>
                                <div className="hidden duration-700 ease-in-out" data-carousel-item>
                                    <img src="src/assets/tentshome/tentDetail/tentDetail5.png" className="block w-full h-[300px] object-contain"
                                        alt="Tent Image 5" />
                                </div>
                                <div className="hidden duration-700 ease-in-out" data-carousel-item>
                                    <img src="src/assets/tentshome/tentDetail/tentDetail6.png" className="block w-full h-[300px] object-contain"
                                        alt="Tent Image 6" />
                                </div>
                                <div className="hidden duration-700 ease-in-out" data-carousel-item>
                                    <img src="src/assets/tentshome/tentDetail/tentDetail7.png" className="block w-full h-[300px] object-contain"
                                        alt="Tent Image 7" />
                                </div>
                                <div className="hidden duration-700 ease-in-out" data-carousel-item>
                                    <img src="src/assets/tentshome/tentDetail/tentDetail8.png" className="block w-full h-[300px] object-contain"
                                        alt="Tent Image 8" />
                                </div>
                                {/* <!-- Add more images as necessary --> */}
                            </div>

                            {/* <!-- Slider controls --> */}
                            <button type="button"
                                className="absolute top-0 left-0 z-30 flex items-center justify-center h-full px-4 group focus:outline-none"
                                data-carousel-prev>
                                <span
                                    className="inline-flex items-center justify-center w-8 h-8 bg-white border border-gray-400 rounded-full">
                                    <svg aria-hidden="true" className="w-5 h-5 text-gray-800" fill="none" stroke="currentColor"
                                        viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"></path>
                                    </svg>
                                </span>
                            </button>
                            <button type="button"
                                className="absolute top-0 right-0 z-30 flex items-center justify-center h-full px-4 group focus:outline-none"
                                data-carousel-next>
                                <span
                                    className="inline-flex items-center justify-center w-8 h-8 bg-white border border-gray-400 rounded-full">
                                    <svg aria-hidden="true" className="w-5 h-5 text-gray-800" fill="none" stroke="currentColor"
                                        viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
                                    </svg>
                                </span>
                            </button>
                        </div>
                    </div>

                    {/* <!-- Product Details --> */}
                    <div className="md:w-1/2 p-6">
                        <h2 className="text-2xl font-bold text-gray-800">
                            Easy Camp Spirit 200 2 Man Tent <br />
                            Rustic Green
                        </h2>
                        <p className="text-lg text-black font-semibold mt-2">$54.95</p>
                        <p className="text-sm text-[#019B7E] mt-1">In stock</p>
                        <div className="flex gap-24">
                            <div className="mt-4">
                                <label for="size" className="block text-sm font-medium text-gray-700">
                                    Size
                                </label>
                                <select id="size" name="size"
                                    className="block mt-5 border-2 px-4 py-1 border-gray-500 shadow-sm items-center">
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
                            <button
                                className="px-4 py-2 text-white bg-[#019B7E] rounded-md hover:bg-green-700 focus:ring-2 focus:ring-[#019B7E] focus:outline-none">
                                Add to Basket
                            </button>
                            <button
                                className="px-4 py-2 text-white bg-[#019B7E] rounded-md hover:bg-green-700 focus:ring-2 focus:ring-[#019B7E] focus:outline-none">
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
        </div>
    )
}

export default DetailTents;