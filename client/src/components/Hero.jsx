const Hero = () => {
    return (
        <div id="hero" className="relative flex items-center justify-center h-screen z-[-2]">
            {/* Gambar */}
            <img 
                src="src/assets/hero.png" 
                alt="hero" 
                className="absolute top-[-65px] inset-0 w-full h-full object-cover brightness-85"
            />

            {/* Teks dengan font Spicy Rice */}
            <h1 
                className="top-[50px] left-[80px] absolute text-5xl font-bold text-white z-10"
                style={{ fontFamily: "'Spicy Rice', cursive" }}
            >
                Get Ready to visit the <br />
                biggest <span className="text-purple-500">Amusement Park</span> in Semarang ! !
            </h1>
        </div>
    );
}

export default Hero;