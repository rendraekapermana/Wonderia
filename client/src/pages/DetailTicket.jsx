import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faClock,
  faCircleInfo,
  faPerson,
  faTriangleExclamation,
} from "@fortawesome/free-solid-svg-icons";

const DetailTicket = () => {
  return (
    <div id="detail-ticket" className="w-[90%] max-w-[1350px] mx-auto my-12">
      {/* Container utama */}
      <div className="flex flex-col px-5 md:px-10 pb-10 bg-[#DADAFB] rounded-xl">
        {/* Gambar utama */}
        <img
          src="https://ihqqppufevqblzjtbdrn.supabase.co/storage/v1/object/sign/DetailTicket/White%20and%20Purple%20Fun%20Tiket%20Pertunjukan%20dan%20Wahana%20Pasar%20Malam.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJEZXRhaWxUaWNrZXQvV2hpdGUgYW5kIFB1cnBsZSBGdW4gVGlrZXQgUGVydHVuanVrYW4gZGFuIFdhaGFuYSBQYXNhciBNYWxhbS5wbmciLCJpYXQiOjE3NDA4MDM4MjAsImV4cCI6MTc3MjMzOTgyMH0.d-dyDamg-YJPPhSAObZcejmSAifgiRJPsGe3ra3h0LY"
          alt="Ticket Wahana"
          className="w-full mt-10 mb-5 rounded-xl"
        />

        {/* Gambar tambahan */}
        <div className="w-full overflow-x-auto flex gap-5 scrollbar-thin scrollbar-thumb-secondary scrollbar-track-gray-200 rounded-lg">
          <div className="flex gap-5">
            {[...Array(6)].map((_, index) => (
              <img
                key={index}
                src="https://ihqqppufevqblzjtbdrn.supabase.co/storage/v1/object/sign/DetailTicket/Detail%20Ticket%20Additional.jpg?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJEZXRhaWxUaWNrZXQvRGV0YWlsIFRpY2tldCBBZGRpdGlvbmFsLmpwZyIsImlhdCI6MTc0MDgwMzg0NiwiZXhwIjoxNzcyMzM5ODQ2fQ.5w48S7-3RaYJM1z_2mYaLDQAO36iK9sStQrEhL1cKUg"
                alt="Ticket Wahana Additional"
                className="w-auto max-w-[200px] sm:max-w-[160px] md:max-w-[200px] h-auto rounded-xl flex-shrink-0"
              />
            ))}
          </div>
        </div>
      </div>

      {/* Detail Wahana */}
      <div className="mt-10 font-[Inter] text-center md:text-left">
        <h1 className="text-2xl font-bold">Wonderia</h1>
        <h1 className="text-3xl md:text-4xl font-bold mt-2">
          Tiket Wahana Roller Coaster
        </h1>
        <p className="text-base text-gray-700 mt-3">
          Nikmati pengalaman seru dan mendebarkan di Roller Coaster Wonderia!
          Wahana ini dirancang untuk menghadirkan sensasi kecepatan tinggi,
          tikungan tajam, dan turunan curam yang memacu adrenalin.
        </p>
      </div>

      {/* Informasi Wahana */}
      <div className="mt-8">
        <h1 className="text-2xl font-bold text-center md:text-left">
          Informasi Wahana
        </h1>
        <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 mt-6">
          {[
            { icon: faClock, title: "Durasi", text: "10 Menit" },
            {
              icon: faPerson,
              title: "Audience",
              text: "Minimal 8 tahun, maksimal 50 tahun",
            },
            {
              icon: faCircleInfo,
              title: "Detail",
              text: "Panjang lintasan: 100 M, Kecepatan: 80 km/jam",
            },
            {
              icon: faTriangleExclamation,
              title: "Perhatian",
              text: "Tidak untuk penderita jantung, ibu hamil, dll.",
            },
          ].map((item, index) => (
            <li key={index} className="flex gap-4 items-start">
              <FontAwesomeIcon
                icon={item.icon}
                className="text-3xl text-secondary"
              />
              <div>
                <span className="font-medium text-xl">{item.title}</span>
                <p className="text-gray-700 text-base">{item.text}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>

      {/* Kategori Tiket */}
      <div className="mt-10">
        <h1 className="text-2xl font-bold text-center md:text-left">
          Kategori Tiket
        </h1>
        <div className="flex flex-col gap-6 mt-6">
          {[
            { title: "Regular", price: "Rp 15.000" },
            { title: "VIP", price: "Rp 25.000" },
          ].map((ticket, index) => (
            <div
              key={index}
              className="flex flex-col md:flex-row items-center justify-between bg-white px-6 py-4 border-2 border-secondary rounded-xl shadow-md hover:shadow-lg transition-all"
            >
              <div className="text-center md:text-left">
                <h1 className="text-2xl font-semibold">
                  Tiket Roller Coaster - {ticket.title}
                </h1>
                <p className="text-lg font-bold mt-2">From {ticket.price}</p>
              </div>
              <button className="bg-secondary text-white px-6 py-2 rounded-md mt-4 md:mt-0">
                Buy Tickets
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DetailTicket;
