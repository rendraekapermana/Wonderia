import React from 'react';

const AboutUs = () => {
    return (
        <div className="py-20 relative overflow-visible"> {/* Hapus overflow-hidden dan tambahkan padding lebih besar */}
            {/* Bola besar berwarna di belakang */}
            <div className="absolute -top-40 -left-40 w-96 h-96 bg-gradient-to-r from-pink-500 to-purple-500 rounded-full opacity-50 blur-2xl"></div>
            <div className="absolute -bottom-40 -right-40 w-96 h-96 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full opacity-50 blur-2xl"></div>

            <div className="container mx-auto px-8 relative z-10">
                {/* Container untuk gambar dan teks */}
                <div className="flex flex-col md:flex-row items-center justify-center gap-4">
                    {/* Gambar di kiri */}
                    <div className="w-full md:w-1/3">
                        <img 
                            src="src/assets/about-us.png" // Ganti dengan path gambar Anda
                            alt="About Us"
                            className="max-w-full max-h-96 rounded-lg shadow-lg"
                        />
                    </div>
                    {/* Teks di kanan (dalam layout atas-bawah) */}
                    <div className="w-full md:w-2/3">
                        <h2 className="text-3xl font-bold mb-6">About Us</h2>
                        <p className="text-lg text-gray-700 leading-relaxed mb-6">
                            Wonderia was born from a dream to create a place where families and friends could come together 
                            to celebrate life's most joyful moments. Since our grand opening in [year], we've been dedicated 
                            to delivering world-class entertainment, state-of-the-art attractions, and exceptional guest service.
                            Our mission is simple: to make every visit to Wonderia an adventure you'll cherish forever.
                        </p>
                        <button className="bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600 transition-colors">
                            Learn More
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutUs;