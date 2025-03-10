import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faInstagram,
  faLinkedin,
  faTiktok,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <footer className="w-full flex flex-col justify-between bg-white text-[#975DC1] font-[Inter]">
      {/* Konten Utama */}
      <div className="flex-none pt-20 flex flex-col items-center text-center px-6 md:px-12 lg:px-20">
        {/* Social Media Section */}
        <div className="w-full max-w-screen-lg">
          <h1 className="font-black text-2xl md:text-3xl">More Information?</h1>
          <p className="text-sm md:text-base font-normal">
            Feel free to have a look at our social media accounts.
          </p>
          <div className="text-2xl md:text-3xl flex gap-4 justify-center mt-4">
            <a
              href="https://www.facebook.com/"
              className="hover:text-blue-600 transition-all"
            >
              <FontAwesomeIcon icon={faFacebook} />
            </a>
            <a
              href="https://www.instagram.com/"
              className="hover:text-pink-500 transition-all"
            >
              <FontAwesomeIcon icon={faInstagram} />
            </a>
            <a
              href="https://www.tiktok.com/"
              className="hover:text-black transition-all"
            >
              <FontAwesomeIcon icon={faTiktok} />
            </a>
            <a
              href="https://www.youtube.com/"
              className="hover:text-red-500 transition-all"
            >
              <FontAwesomeIcon icon={faYoutube} />
            </a>
            <a
              href="https://www.linkedin.com/"
              className="hover:text-blue-700 transition-all"
            >
              <FontAwesomeIcon icon={faLinkedin} />
            </a>
          </div>
        </div>

        {/* Footer Image */}
        <div className="w-screen pt-20">
          <img
            src="https://ihqqppufevqblzjtbdrn.supabase.co/storage/v1/object/sign/footer-image/footer%20wonderia%202.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJmb290ZXItaW1hZ2UvZm9vdGVyIHdvbmRlcmlhIDIucG5nIiwiaWF0IjoxNzQwNzAwNjY1LCJleHAiOjE3NzIyMzY2NjV9.cTubGCHJy2THz-50DBaKCRWqYnbg3XBnmcbOy_Tn0ug"
            alt="Footer Image"
            className="w-screen h-auto object-cover block"
          />
        </div>
      </div>

      {/* Footer Info Section */}
      <div className="w-full bg-[#975DC1] text-white py-8 px-6 md:px-12 lg:px-20">
        <div className="flex flex-col md:flex-row justify-between max-w-screen-lg mx-auto text-center md:text-left">
          <div className="flex flex-col gap-4 mb-6 md:mb-0">
            <h2 className="font-black text-lg">ABOUT US</h2>
            <h2 className="font-black text-lg">HELPDESK</h2>
          </div>
          <div className="flex flex-col gap-2 mb-6 md:mb-0">
            <h2 className="font-black text-lg">CONTACT US</h2>
            <p className="text-sm font-normal">+62 123 456 789</p>
            <p className="text-sm font-normal">informasi@wonderia.com</p>
          </div>
          <div className="flex flex-col gap-4">
            <h2 className="font-black text-lg">HEADQUARTERS</h2>
            <p className="text-sm font-normal">
              Tegalsari, Candisari, Kota Semarang, Jawa Tengah
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
