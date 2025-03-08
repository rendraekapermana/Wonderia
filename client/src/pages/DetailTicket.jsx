import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faClock,
  faCircleInfo,
  faPerson,
  faTriangleExclamation,
  faChevronDown,
} from "@fortawesome/free-solid-svg-icons";


const DetailTicket = () => {
  return (
    <div id="detail-ticket" className="w-[90%] max-w-[1350px] mx-auto my-12">
      <div
        id="container-detail-ticket"
        className="flex flex-col px-10 bg-[#DADAFB] rounded-xl"
      >
        <div
          id="detail-ticket-content"
          className="flex flex-col w-full h-[650px]"
        >
          {/* Gambar Utama */}
          <img
            src="https://ihqqppufevqblzjtbdrn.supabase.co/storage/v1/object/sign/DetailTicket/White%20and%20Purple%20Fun%20Tiket%20Pertunjukan%20dan%20Wahana%20Pasar%20Malam.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJEZXRhaWxUaWNrZXQvV2hpdGUgYW5kIFB1cnBsZSBGdW4gVGlrZXQgUGVydHVuanVrYW4gZGFuIFdhaGFuYSBQYXNhciBNYWxhbS5wbmciLCJpYXQiOjE3NDA4MDM4MjAsImV4cCI6MTc3MjMzOTgyMH0.d-dyDamg-YJPPhSAObZcejmSAifgiRJPsGe3ra3h0LY"
            alt="Ticket Wahana"
            className="w-full mt-10 mb-5 rounded-xl"
          />

          <div className="w-full overflow-x-auto snap-x snap-mandatory scroll-smooth scrollbar-thin scrollbar-thumb-secondary scrollbar-track-gray-200 rounded-lg">
            <ul className="flex flex-nowrap gap-5 whitespace-nowrap [&::-webkit-scrollbar]:hidden">
              {[...Array(6)].map((_, index) => (
                <li key={index} className="shrink-0 snap-start">
                  <img
                    src="https://ihqqppufevqblzjtbdrn.supabase.co/storage/v1/object/sign/DetailTicket/Detail%20Ticket%20Additional.jpg?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJEZXRhaWxUaWNrZXQvRGV0YWlsIFRpY2tldCBBZGRpdGlvbmFsLmpwZyIsImlhdCI6MTc0MDgwMzg0NiwiZXhwIjoxNzcyMzM5ODQ2fQ.5w48S7-3RaYJM1z_2mYaLDQAO36iK9sStQrEhL1cKUg"
                    alt="Ticket Wahana Additional"
                    className="w-[224px] rounded-xl"
                  />
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Detail Wahana */}
      <div id="detail-ticket-title" className="font-[Inter] ">
        {/* Judul Perusahaan */}
        <h1 id="company-title" className="text-2xl font-bold mb-6 mt-10">
          Wonderia
        </h1>
        {/* Judul Wahana */}
        <h1 id="ticket-title" className="text-4xl font-bold mb-2">
          Tiket Wahana Roller Coaster
        </h1>
        {/* Deskripsi Wahana */}
        <p id="ticket-description" className="text-base font-normal mb-3">
          Nikmati pengalaman seru dan mendebarkan di Roller Coaster Wonderia!
          Wahana ini dirancang untuk menghadirkan sensasi kecepatan tinggi,
          tikungan tajam, dan turunan curam yang memacu adrenalin. Dengan
          standar keamanan terbaik, roller coaster ini siap memberikan
          pengalaman yang tak terlupakan bagi para pencinta tantangan.
        </p>
      </div>

      {/* Informasi Wahana */}
      <div id="ticket-information" className="flex flex-col flex-start">
        <h1
          id="ticket-information-title"
          className="text-2xl font-bold mb-6 mt-8"
        >
          Informasi Wahana
        </h1>
        <ul className="flex w-full justify-between">
          {/* Durasi */}
          <li className="flex items-start w-36 gap-5">
            <FontAwesomeIcon
              icon={faClock}
              className="text-3xl mt-1.5 text-secondary"
            />
            <div className="flex flex-col">
              <span className="font-medium text-xl">Durasi</span>
              <span className="font-normal text-base text-[#5C5C5F]">
                10 Menit
              </span>
            </div>
          </li>

          {/* Audience */}
          <li className="flex gap-5 items-start w-76 text-justify">
            <FontAwesomeIcon
              icon={faPerson}
              className="text-3xl mt-1.5 text-secondary"
            />
            <div className="flex flex-col">
              <span className="font-medium text-xl">Audience</span>
              <span className="font-normal text-base text-[#5C5C5F]">
                Minimal berumur 8 tahun dan maksimal 50 tahun
              </span>
            </div>
          </li>

          {/* Detail */}
          <li className="flex gap-5 items-start w-76 text-justify">
            <FontAwesomeIcon
              icon={faCircleInfo}
              className="text-3xl mt-1.5 text-secondary"
            />
            <div className="flex flex-col">
              <span className="font-medium text-xl">Detail</span>
              <span className="font-normal text-base text-[#5C5C5F]">
                Panjang lintasan: 100 M
              </span>
              <span className="font-normal text-base text-[#5C5C5F]">
                Kecepatan maksimum: 80 km/jam
              </span>
            </div>
          </li>

          {/* Perhatian */}
          <li className="flex gap-5 items-start w-76 text-justify">
            <FontAwesomeIcon
              icon={faTriangleExclamation}
              className="text-3xl mt-1.5 text-secondary"
            />
            <div className="flex flex-col">
              <span className="font-medium text-xl">Perhatian</span>
              <span className="font-normal text-base text-[#5C5C5F]">
                Memiliki riwayat penyakit jantung, tekanan darah tinggi, ibu
                hamil, dan takut ketinggian dilarang menaiki wahana.{" "}
              </span>
            </div>
          </li>
        </ul>
      </div>

      {/* Kategori Tiket */}
      <div id="ticket-category" className="flex flex-col mb-30">
        <h1 className="text-2xl font-bold mb-6 mt-10">Kategori Tiket</h1>

        <div id="ticket-types-container" className="flex flex-col gap-7">
          {/* Tiket Pertama */}
          <div className="flex flex-row items-center justify-between bg-white text-black px-4 border-2 h-36 border-secondary rounded-xl shadow-[4px_4px_0px_0px_rgba(242,180,6,1)] hover:shadow-none transition-all">
            <div className="flex flex-col">
              <h1 className="text-2xl font-semibold">
                Tiket Roller Coaster - Regular
              </h1>
              <div className="flex flex-row items-end gap-2 mt-3">
                <p>From</p>
                <p className="text-2xl font-bold">Rp 15.000</p>
              </div>
              <div className="flex flex-row items-center gap-3 mt-2">
                <p>View Details</p>
                <FontAwesomeIcon icon={faChevronDown} />
              </div>
            </div>
            <div className="px-15 py-1.5 rounded-md text-white bg-secondary mx-20 hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-all">
              <h1>Buy Tickets</h1>
            </div>
          </div>

          {/* Tiket Kedua */}
          <div className="flex flex-row items-center justify-between bg-white text-black px-4 border-2 h-36 border-secondary rounded-xl shadow-[4px_4px_0px_0px_rgba(242,180,6,1)] hover:shadow-none transition-all">
            <div className="flex flex-col">
              <h1 className="text-2xl font-semibold">
                Tiket Roller Coaster - VIP
              </h1>
              <div className="flex flex-row items-end gap-2 mt-3">
                <p>From</p>
                <p className="text-2xl font-bold">Rp 25.000</p>
              </div>
              <div className="flex flex-row items-center gap-3 mt-2">
                <p>View Details</p>
                <FontAwesomeIcon icon={faChevronDown} />
              </div>
            </div>
            <div className="px-15 py-1.5 rounded-md text-white bg-secondary mx-20 hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-all">
              <h1>Buy Tickets</h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailTicket;
