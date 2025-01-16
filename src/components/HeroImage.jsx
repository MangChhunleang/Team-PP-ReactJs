import { useState, useEffect } from 'react';

const HeroImage = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const images = [
        "src/assets/homme/download (1).jpg",
        "src/assets/homme/download (2).jpg",
        "src/assets/homme/download (3).jpg",
        "src/assets/homme/Cristiano ronaldo.jpg",
        "src/assets/homme/Cristiano Ronaldo (1).jpg"
    ];

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, 3000); // Change image every 3 seconds

        return () => clearInterval(interval);
    }, [images.length]);

    return (
        <div>
            <div id="default-carousel" className="relative w-full" data-carousel="slide">
                <div className="relative z-0 m-2 overflow-hidden rounded-lg md:h-[480.11px]">
                    {images.map((src, index) => (
                        <div
                            key={index}
                            className={`duration-700 ease-in-out ${index === currentIndex ? 'block' : 'hidden'}`}
                            data-carousel-item
                        >
                            <img
                                src={src}
                                className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
                                alt={`Slide ${index + 1}`}
                            />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default HeroImage;