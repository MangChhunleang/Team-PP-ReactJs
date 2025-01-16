import React, { useState, useEffect } from 'react';

const OnFooter = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const items = [
        {
            alt: "Woman wearing a long green jacket",
            src: "https://storage.googleapis.com/a1aa/image/fNpsunOQToxeYk3eYtO7QeTHrg4myugpomn71jJoCjErZQ5OB.jpg",
            description: "Regatta Cambrie II Wmns Long Jacket...",
            price: "$49.95"
        },
        {
            alt: "Woman wearing a velour fleece in red",
            src: "https://storage.googleapis.com/a1aa/image/fUVguBxM0UR6B63k4jeXX9B23v3rXhfeCcZ4ol6AAeWuygydC.jpg",
            description: "Regatta Bardou II Velour Wmns Fleece...",
            price: "$12.49"
        },
        {
            alt: "Man wearing a hybrid jacket in black and green",
            src: "https://storage.googleapis.com/a1aa/image/drQjh1XpBUaXAleuRSBNkJqvfKKZVgQfCfHDX399QcLJXQ5OB.jpg",
            description: "Regatta Andreson VIII Hybrid Jacket...",
            price: "$22.95"
        },
        {
            alt: "Man wearing a full zip fleece in navy blue",
            src: "https://storage.googleapis.com/a1aa/image/zukfBUFes1pmKU949Xl3x92aovrdAfz77beyTYkL4p0gZQ5OB.jpg",
            description: "Regatta Rivake Full Zip Mens Fleece...",
            price: "$18.90"
        },
        {
            alt: "Woman wearing a waterproof changing robe in pink",
            src: "https://storage.googleapis.com/a1aa/image/b93bMOtb6NowEtwJpjDxfThNTYWQ82OveRJ0cd2hWCUBGUuTA.jpg",
            description: "Regatta Adult Waterproof Changing R...",
            price: "$44.95"
        },
        {
            alt: "Person wearing a fleece lined changing robe in black",
            src: "https://storage.googleapis.com/a1aa/image/hSME1mgU1GJgJ5cUiwLylWFxSyJAPmCgQBa2u9RJJu4jBl7E.jpg",
            description: "Osprey Changing Robe – Fleece Lined...",
            price: "$59.95"
        },
        {
            alt: "Woman wearing a long green jacket",
            src: "https://storage.googleapis.com/a1aa/image/fNpsunOQToxeYk3eYtO7QeTHrg4myugpomn71jJoCjErZQ5OB.jpg",
            description: "Regatta Cambrie II Wmns Long Jacket...",
            price: "$49.95"
        },
        {
            alt: "Woman wearing a velour fleece in red",
            src: "https://storage.googleapis.com/a1aa/image/fUVguBxM0UR6B63k4jeXX9B23v3rXhfeCcZ4ol6AAeWuygydC.jpg",
            description: "Regatta Bardou II Velour Wmns Fleece...",
            price: "$12.49"
        },
        {
            alt: "Man wearing a hybrid jacket in black and green",
            src: "https://storage.googleapis.com/a1aa/image/drQjh1XpBUaXAleuRSBNkJqvfKKZVgQfCfHDX399QcLJXQ5OB.jpg",
            description: "Regatta Andreson VIII Hybrid Jacket...",
            price: "$22.95"
        },
        {
            alt: "Man wearing a full zip fleece in navy blue",
            src: "https://storage.googleapis.com/a1aa/image/zukfBUFes1pmKU949Xl3x92aovrdAfz77beyTYkL4p0gZQ5OB.jpg",
            description: "Regatta Rivake Full Zip Mens Fleece...",
            price: "$18.90"
        },
        {
            alt: "Woman wearing a waterproof changing robe in pink",
            src: "https://storage.googleapis.com/a1aa/image/b93bMOtb6NowEtwJpjDxfThNTYWQ82OveRJ0cd2hWCUBGUuTA.jpg",
            description: "Regatta Adult Waterproof Changing R...",
            price: "$44.95"
        },
        {
            alt: "Person wearing a fleece lined changing robe in black",
            src: "https://storage.googleapis.com/a1aa/image/hSME1mgU1GJgJ5cUiwLylWFxSyJAPmCgQBa2u9RJJu4jBl7E.jpg",
            description: "Osprey Changing Robe – Fleece Lined...",
            price: "$59.95"
        }

    ];

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % items.length);
        }, 3000);

        return () => clearInterval(interval);
    }, [items.length]);


    return (
        <div className="container mx-auto py-8 px-16">
            <div className="relative">
                <div id="carouselItems" className="flex space-x-4 transition-all duration-500">
                    {items.map((item, index) => {
                        const isVisible = (index >= currentIndex && index < currentIndex + 5) ||
                            (currentIndex + 5 > items.length && index < (currentIndex + 5) % items.length);
                        return (
                            <div
                                key={index}
                                className={`min-w-[200px] ${isVisible ? 'block' : 'hidden'}`}
                            >
                                <img
                                    alt={item.alt}
                                    className="w-full"
                                    height="300"
                                    src={item.src}
                                    width="200"
                                />
                                <div className="text-center mt-2">
                                    <p className="text-sm">{item.description}</p>
                                    <p className="text-black font-bold">{item.price}</p>
                                </div>
                            </div>
                        );
                    })}

                </div>
            </div>
            <div className="text-center mt-24 text-2xl text-[#555555] ">
                <h1 className="py-2 font-bold">Camp Haven - Discount Online Camping Stores</h1>
                <h2 className="py-2 font-bold">We supply everything You Need For Your Next Camping Trip!</h2>
            </div>
        </div>
    );
};

export default OnFooter;