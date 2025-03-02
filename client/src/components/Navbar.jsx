import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
  return (
    <>
      <div id="navbar" className="flex items-center justify-between mt-5 px-20">
        <img
          src="https://ihqqppufevqblzjtbdrn.supabase.co/storage/v1/object/public/logos//Logo%20Wonderia.png"
          alt="Logo Wonderia"
          className=""
        />
        <ul id="navbar-content" className="flex flex-row gap-8 ml-72">
          <li className="flex gap-2.5 items-center">
            <a href="/">Tickets</a>
            <FontAwesomeIcon icon={faChevronDown} />
          </li>

          <li className="flex gap-2.5 items-center">
            <a href="/about">Attractions</a>
            <FontAwesomeIcon icon={faChevronDown} />
          </li>

          <li>
            <a href="/about">About Us</a>
          </li>

          <li>
            <a href="/about">Help</a>
          </li>
        </ul>

        <ul id="navbar-auth" className="flex flex-row gap-4">
          <li className="bg-white px-6 py-2 border-2 border-black rounded-xl shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-none transition-all">
            <a href="/login">Login</a>
          </li>
          <li className="bg-[#975DC1] text-white px-6 py-2 border-2 border-black rounded-xl shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-none transition-all">
            <a href="/register">Create free account</a>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Navbar;
