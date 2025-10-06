import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

import testimoniData from "../data/testimoniData";

const TestimoniPage = () => {
  return (
    <div className="bg-gray-50 min-h-screen flex flex-col items-center px-6 py-12 space-y-8">
      <div className="max-w-6xl w-full flex flex-col space-y-6">

        {/* Judul */}
        <div className="bg-white rounded-lg shadow p-6 text-center">
          <h2 className="text-2xl sm:text-3xl md:text-3xl text-gray-600">TESTIMONI</h2>
          <h3 className="text-4xl sm:text-5xl md:text-4xl lg:text-5xl font-black text-cyan-500">Pengunjung</h3> 
          <p className="text-gray-500 mt-2">
            Suara pengalaman dan kesan para siswa serta pengunjung MUGA Lab.
          </p>
        </div>

        {/* Swiper Testimoni */}
        <div className="bg-white rounded-lg shadow p-6">
          <Swiper
            modules={[Pagination]}
            pagination={{ clickable: true }}
            spaceBetween={20}
            breakpoints={{
              320: { slidesPerView: 1 },   
              768: { slidesPerView: 2 },   
              1024: { slidesPerView: 3 },  
            }}
          >
            {testimoniData.map((testimoni) => (
              <SwiperSlide key={testimoni.id}>
                <div className="bg-gray-100 rounded-xl p-4 shadow-md flex flex-col items-center text-center
                                transform transition duration-300 hover:scale-105 hover:shadow-xl">
                  <img
                    src={testimoni.foto}
                    alt={testimoni.nama}
                    loading="lazy"
                    className="w-24 h-24 object-cover rounded-full mb-4 shadow"
                  />
                  <h2 className="text-lg font-semibold text-gray-800 mb-2">{testimoni.nama}</h2>
                  <p className="text-sm text-gray-600">{testimoni.isi}</p>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/* Kutipan Hadits */}
        <div className="bg-white rounded-lg shadow p-6 text-center">
          <p className="text-gray-700 text-lg md:text-xl italic mb-2">
            “Menuntut ilmu itu wajib bagi setiap Muslim.”  
          </p>
          <p className="text-gray-500 text-sm">
            HR. Ibnu Majah, Hadits Shahih
          </p>
        </div>
      </div>
    </div>
  );
};

export default TestimoniPage;
