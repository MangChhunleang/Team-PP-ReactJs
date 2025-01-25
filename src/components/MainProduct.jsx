import React from 'react'
import { Link } from 'react-router-dom';

const MainProduct = () => {
    return (
        <div className="p-2 grid grid-cols-5 gap-4">

            {/* <!-- Tents & Accessories --> */}
                <Link to={"/maintents"}>
                <div className="relative group hover:shadow-lg hover:shadow-black/50 transition-shadow duration-300 rounded-lg">
                    <img src="src/assets/tentshome/tents_img.webp" alt="Tents & Accessories"
                        className="w-full h-full object-cover rounded-lg group-hover:brightness-75 transition duration-300" />
                    <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-40 rounded-lg">
                        <span className="text-white font-bold text-lg group-hover:scale-110 transition-transform duration-300">TENTS &
                            ACCESSORIES</span>
                    </div>
                </div>
                </Link>


            {/* <!-- Sleeping --> */}
            <Link to={"/main-sleeps"}>
                <div className="relative group hover:shadow-lg hover:shadow-black/50 transition-shadow duration-300 rounded-lg">
                    <img src="src/assets/sleep/SLEEPING-23.webp" alt="Sleeping"
                        className="w-full h-full object-cover rounded-lg group-hover:brightness-75 transition duration-300" />
                    <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-40 rounded-lg">
                        <span
                            className="text-white font-bold text-lg group-hover:scale-110 transition-transform duration-300">SLEEPING</span>
                    </div>
                </div>
                </Link>


            {/* <!-- Clothing --> */}
            <a href="">
                <div className="relative group hover:shadow-lg hover:shadow-black/50 transition-shadow duration-300 rounded-lg">
                    <img src="src/assets/clothing/CLOTHING-23.webp" alt="Clothing"
                        className="w-full h-full object-cover rounded-lg group-hover:brightness-75 transition duration-300" />
                    <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-40 rounded-lg">
                        <span
                            className="text-white font-bold text-lg group-hover:scale-110 transition-transform duration-300">CLOTHING</span>
                    </div>
                </div>
            </a>


            {/* <!-- Footwear --> */}
            <a href="">
                <div className="relative group hover:shadow-lg hover:shadow-black/50 transition-shadow duration-300 rounded-lg">
                    <img src="src/assets/footwear/footwearhome.webp" alt="Footwear"
                        className="w-full h-full object-cover rounded-lg group-hover:brightness-75 transition duration-300" />
                    <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-40 rounded-lg">
                        <span
                            className="text-white font-bold text-lg group-hover:scale-110 transition-transform duration-300">FOOTWEAR</span>
                    </div>
                </div>
            </a>


            {/* <!-- Kitchen --> */}
            <a href="">
                <div className="relative group hover:shadow-lg hover:shadow-black/50 transition-shadow duration-300 rounded-lg">
                    <img src="src/assets/kitchen/KITCHEN-23V2.webp" alt="Kitchen"
                        className="w-full h-full object-cover rounded-lg group-hover:brightness-75 transition duration-300" />
                    <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-40 rounded-lg">
                        <span
                            className="text-white font-bold text-lg group-hover:scale-110 transition-transform duration-300">KITCHEN</span>
                    </div>
                </div>
            </a>


            {/* <!-- Light & Heat --> */}
            <a href="">
                <div className="relative group hover:shadow-lg hover:shadow-black/50 transition-shadow duration-300 rounded-lg">
                    <img src="src/assets/light_head/Light-Heat.webp" alt="Light & Heat"
                        className="w-full h-full object-cover rounded-lg group-hover:brightness-75 transition duration-300" />
                    <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-40 rounded-lg">
                        <span className="text-white font-bold text-lg group-hover:scale-110 transition-transform duration-300">LIGHT &
                            HEAT</span>
                    </div>
                </div>
            </a>


            {/* <!-- Furniture --> */}
            <a href="">
                <div className="relative group hover:shadow-lg hover:shadow-black/50 transition-shadow duration-300 rounded-lg">
                    <img src="src/assets/furniture/FURNITURE-23.webp" alt="Furniture"
                        className="w-full h-full object-cover rounded-lg group-hover:brightness-75 transition duration-300" />
                    <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-40 rounded-lg">
                        <span
                            className="text-white font-bold text-lg group-hover:scale-110 transition-transform duration-300">FURNITURE</span>
                    </div>
                </div>
            </a>


            {/* <!-- Rucksacks & Bags --> */}
            <a href="">
                <div className="relative group hover:shadow-lg hover:shadow-black/50 transition-shadow duration-300 rounded-lg">
                    <img src="src/assets/rucksacks_bags/RUCKSACKS-23.webp" alt="Rucksacks & Bags"
                        className="w-full h-full object-cover rounded-lg group-hover:brightness-75 transition duration-300" />
                    <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-40 rounded-lg">
                        <span className="text-white font-bold text-lg group-hover:scale-110 transition-transform duration-300">RUCKSACKS
                            & BAGS</span>
                    </div>
                </div>
            </a>


            {/* <!-- Hiking --> */}
            <a href="">
                <div className="relative group hover:shadow-lg hover:shadow-black/50 transition-shadow duration-300 rounded-lg">
                    <img src="src/assets/hiking/img-1.webp" alt="Hiking"
                        className="w-full h-full object-cover rounded-lg group-hover:brightness-75 transition duration-300" />
                    <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-40 rounded-lg">
                        <span
                            className="text-white font-bold text-lg group-hover:scale-110 transition-transform duration-300">HIKING</span>
                    </div>
                </div>
            </a>


            {/* <!-- Everything Else --> */}
            <a href="">
                <div className="relative group hover:shadow-lg hover:shadow-black/50 transition-shadow duration-300 rounded-lg">
                    <img src="src/assets/everthing_else/Other.webp" alt="Everything Else"
                        className="w-full h-full object-cover rounded-lg group-hover:brightness-75 transition duration-300" />
                    <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-40 rounded-lg">
                        <span className="text-white font-bold text-lg group-hover:scale-110 transition-transform duration-300">EVERYTHING
                            ELSE</span>
                    </div>
                </div>
            </a>

        </div>
    )
}

export default MainProduct;
