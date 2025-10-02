import React, { useState } from "react";
import guruData from "../data/guruData";

const JadwalGuruPage = () => {
  const [flipped, setFlipped] = useState({});

  const toggleFlip = (id) => {
    // hanya satu card terbuka
    setFlipped((prev) => {
      const newState = {};
      newState[id] = !prev[id];
      return newState;
    });
  };

  return (
    <div className="bg-gray-50 min-h-screen flex flex-col items-center px-6 py-12 space-y-10">
      <div className="max-w-6xl w-full flex flex-col lg:flex-row gap-10">
        {/* Section Kiri */}
        <div className="lg:w-1/3 flex flex-col space-y-6 bg-white p-6 rounded-lg shadow">
          <h2 className="text-2xl sm:text-3xl md:text-3xl text-gray-600">JADWAL</h2>
          <h3 className="text-4xl sm:text-5xl md:text-4xl lg:text-5xl font-black text-cyan-500">Praktikum</h3>
          <p className="text-gray-500 text-sm sm:text-base md:text-base lg:text-lg max-w-md">
            "Semangat belajar, semangat mengajar. Setiap hari adalah kesempatan baru untuk menciptakan karya dan inovasi di laboratorium."
          </p>
        </div>

        {/* Section Kanan */}
        <div className="lg:w-2/3 flex overflow-x-auto gap-6 pb-4">
          {guruData.map((guru) => (
            <div
              key={guru.id}
              className="w-64 lg:w-72 h-96 perspective cursor-pointer flex-shrink-0"
              onClick={() => toggleFlip(guru.id)}
            >
              <div
                className={`relative w-full h-full duration-700 transform-style-preserve-3d ${
                  flipped[guru.id] ? "rotate-y-180" : ""
                }`}
              >
                {/* Front */}
                <div className="absolute inset-0 rounded-2xl shadow-lg backface-hidden overflow-hidden">
                  {/* Foto Guru */}
                  <img
                    src={guru.foto}
                    alt={guru.nama}
                    loading="lazy"
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                  
                  {/* Overlay teks di atas foto */}
                  <div className="absolute bottom-0 w-full bg-gradient-to-t from-black/60 to-transparent p-4 text-center">
                    <h2 className="font-semibold text-lg text-white drop-shadow">
                      {guru.nama}
                    </h2>
                    <p className="text-cyan-200 text-sm">{guru.jabatan}</p>
                  </div>
                </div>


                {/* Back */}
                <div className="absolute inset-0 bg-cyan-500 text-white rounded-2xl shadow-lg rotate-y-180 backface-hidden p-4 flex flex-col justify-center">
                  <h3 className="font-bold text-xl mb-2">{guru.kegiatan}</h3>
                  <p className="text-sm">{guru.ringkasan}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Section Bawah */}
      <div className="max-w-6xl w-full bg-white p-8 rounded-lg shadow text-center">
        <p className="text-xl md:text-2xl italic text-gray-700">
          "Imagination is more important than knowledge." — Albert Einstein
        </p>
      </div>
    </div>
  );
};

export default JadwalGuruPage;
