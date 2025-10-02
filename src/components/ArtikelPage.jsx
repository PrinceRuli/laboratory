import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

import artikelData from "../data/artikelData"; // data artikel

const ArtikelPage = () => {
  return (
    <div className="bg-gray-50 min-h-screen flex flex-col items-center px-6 py-12 space-y-8 overflow-x-hidden">
      <div className="max-w-6xl w-full flex flex-col space-y-6">
        {/* Judul */}
        <div className="bg-white rounded-lg shadow p-6 text-center">
          <h2 className="text-2xl sm:text-3xl md:text-3xl text-gray-600">ARTIKEL</h2>
          <h3 className="text-4xl sm:text-5xl md:text-4xl lg:text-5xl font-black text-cyan-500">
            Kegiatan
          </h3>
        </div>

        {/* Konten Video + Artikel */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 overflow-hidden">
          {/* Kiri: Video + ringkasan */}
          <div className="bg-white rounded-lg shadow p-6 flex flex-col space-y-4">
            <div className="aspect-video w-full rounded-lg overflow-hidden shadow-lg">
              <iframe
                className="w-full h-full max-w-full"
                src="https://www.youtube.com/embed/dQw4w9WgXcQ"
                title="Video Kegiatan"
                frameBorder="0"
                allowFullScreen
              ></iframe>
            </div>
            <p className="text-gray-600 text-sm md:text-base">
              Ini adalah dokumentasi kegiatan laboratorium terbaru. Video ini
              menampilkan aktivitas siswa dan guru selama sesi praktikum.
            </p>
          </div>

          {/* Kanan: Artikel dalam Swiper */}
          <div className="bg-white rounded-lg shadow p-6 overflow-hidden">
            <Swiper
              modules={[Pagination]}
              pagination={{ clickable: true }}
              spaceBetween={20}
              breakpoints={{
                320: { slidesPerView: 1 },   // sm: 1 kolom
                768: { slidesPerView: 2 },   // md: 2 kolom
                1024: { slidesPerView: 3 },  // lg: 3 kolom
              }}
              className="overflow-hidden"
            >
              {artikelData.map((artikel) => (
                <SwiperSlide key={artikel.id}>
                  <div className="bg-gray-100 rounded-xl p-4 shadow-md flex flex-col space-y-2
                                  transform transition duration-300 hover:scale-105 hover:shadow-xl">
                    <img
                      src={artikel.gambar}
                      alt={artikel.judul}
                      loading="lazy"
                      className="w-full h-36 object-cover rounded-md"
                    />
                    <h2 className="text-gray-800 font-semibold">{artikel.judul}</h2>
                    <h3 className="text-cyan-500 font-semibold text-sm">{artikel.kegiatan}</h3>
                    <p className="text-sm text-gray-600 line-clamp-4">
                      {artikel.isi}
                    </p>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>

        {/* Section Quote */}
        <div className="bg-white rounded-lg shadow p-6 text-center">
          <p className="text-gray-700 text-lg md:text-xl italic">
            "Genius is 1% inspiration and 99% perspiration." — Thomas Alva Edison
          </p>
        </div>
      </div>
    </div>
  );
};

export default ArtikelPage;
