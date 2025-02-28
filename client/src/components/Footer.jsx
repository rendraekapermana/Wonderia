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
    <>
      <div id="footer">
        <div
          id="container"
          className="flex flex-col items-center text-center text-[#975DC1] font-[Inter]"
        >
          <div id="footer-social-media">
            <h1 className="font-black text-3xl">More Information?</h1>
            <p className="text-base font-normal">
              Feel free to have a look at our social media accounts.
            </p>
            <div
              id="social-media"
              className="text-[#975DC1] text-3xl flex gap-3 justify-center"
            >
              <a href="https://www.facebook.com/">
                <FontAwesomeIcon icon={faFacebook} />
              </a>
              <a href="https://www.instagram.com/">
                <FontAwesomeIcon icon={faInstagram} />
              </a>
              <a href="https://www.tiktok.com/">
                <FontAwesomeIcon icon={faTiktok} />
              </a>
              <a href="https://www.youtube.com/">
                <FontAwesomeIcon icon={faYoutube} />
              </a>
              <a href="https://www.linkedin.com/">
                <FontAwesomeIcon icon={faLinkedin} />
              </a>
            </div>
          </div>
          <img
            src="https://ihqqppufevqblzjtbdrn.supabase.co/storage/v1/object/sign/footer-image/footer%20wonderia%202.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJmb290ZXItaW1hZ2UvZm9vdGVyIHdvbmRlcmlhIDIucG5nIiwiaWF0IjoxNzQwNzAwNjY1LCJleHAiOjE3NzIyMzY2NjV9.cTubGCHJy2THz-50DBaKCRWqYnbg3XBnmcbOy_Tn0ug"
            alt="Footer Image"
            className="w-full h-44 mt-10"
          />
          <div id="container-footer" className="w-full bg-[#975DC1]">
            <ul className="flex flex-row justify-between px-56 my-14 text-white font[Inter] font-black">
              <div className="flex flex-col gap-6">
                <li>ABOUT US</li>
                <li>HELPDESK</li>
              </div>
              <div className="flex flex-col text-left space-y-1">
                <li className="mb-6">CONTACT US</li>
                <li className="font-normal text-xs">+62 123 456 789</li>
                <li className="font-normal text-xs">informasi@wonderia.com</li>
              </div>
              <div className="flex flex-col gap-6 text-left">
                <li>HEADQUARTERS</li>
                <li className="font-normal text-xs">Tegalsari, Candisari, Kota Semarang, Jawa Tengah</li>
              </div>
            </ul>
            <p></p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
