import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css'; // Import Swiper styles
import 'swiper/css/navigation'; // Import Navigation module
import 'swiper/css/pagination'; // Import Pagination module
import { Navigation, Pagination } from 'swiper/modules';

const Attraction = () => {
    // Data dummy untuk card (hanya gambar dan teks button)
    const cards = [
        {
            id: 1,
            image: "src/assets/roller-coaster.png", // Ganti dengan path gambar Anda
            buttonText: "Details >>",
            buttonColor: "#002ED6",
        },
        {
            id: 2,
            image: "src/assets/ferris-wheel.png", // Ganti dengan path gambar Anda
            buttonText: "Ferris Wheel",
            buttonColor: "#009387",
        },
        {
            id: 3,
            image: "src/assets/flamingo.png", // Ganti dengan path gambar Anda
            buttonText: "Flamingo Park",
            buttonColor: "#FEC4DF",
        },
        {
            id: 4,
            image: "src/assets/haunted-house.png", // Ganti dengan path gambar Anda
            buttonText: "Haunted House",
            buttonColor: "#6C0000",
        },
    ];

    return (
        <div className="py-10 bg-white">
            <h2 className="text-3xl font-bold text-center mb-8">Our Attractions</h2>
            <Swiper
                modules={[Navigation]}
                spaceBetween={30}
                slidesPerView={3}
                navigation
                pagination={{ clickable: true,
                    renderBullet: (index, className) => {
                        return `<span class="${className} bg-gray-400 w-3 h-3 rounded-full mx-1"></span>`;
                    },
                }}
                loop={true}
                breakpoints={{
                    320: {
                        slidesPerView: 1,
                    },
                    768: {
                        slidesPerView: 2,
                    },
                    1024: {
                        slidesPerView: 3,
                    },
                }}
            >
                {cards.map((card) => (
                    <SwiperSlide key={card.id}>
                        <div className="relative group">
                            {/* Gambar */}
                            <img 
                                src={card.image} 
                                alt={card.buttonText} 
                                className="w-full h-64 object-cover rounded-lg"
                            />
                            {/* Button dengan efek hover */}
                            <button 
                                style={{ backgroundColor: card.buttonColor }}
                                className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-white px-6 py-2 rounded-lg shadow-lg hover:bg-opacity-80 hover:shadow-xl hover:scale-105 transition-all duration-300"
                            >
                                {card.buttonText}
                            </button>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
};

export default Attraction;