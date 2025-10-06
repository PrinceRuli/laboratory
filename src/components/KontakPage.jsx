import React, { useState } from "react";
import { FaInstagram, FaTwitter, FaFacebookF } from "react-icons/fa";
import { SiTiktok } from "react-icons/si";

const KontakPage = () => {
  const [formData, setFormData] = useState({
    nama: "",
    email: "",
    pesan: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    alert("Pesan berhasil dikirim!");
    setFormData({ nama: "", email: "", pesan: "" });
  };

  return (
    <div className="bg-gray-50 min-h-screen flex flex-col overflow-x-hidden">

      {/* Konten Utama */}
      <div className="max-w-6xl w-full mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-2 gap-12">

        {/* Judul + kalimat pendukung */}
        <div className="flex flex-col justify-center space-y-6">
          <h2 className="text-2xl sm:text-3xl md:text-3xl text-gray-600">KONTAK</h2>
          <h3 className="text-4xl sm:text-5xl md:text-4xl lg:text-5xl font-black text-cyan-500">
            Kami
          </h3>
          <p className="text-gray-600 text-lg">
            Kami siap menjawab pertanyaan dan masukan Anda. Silahkan isi form di
            sebelah kanan, atau hubungi kami melalui media sosial. Tim MUGA Lab
            akan merespon secepatnya.
          </p>
        </div>

        {/* Form Kontak */}
        <div className="bg-white rounded-xl shadow-lg p-8">
          <form onSubmit={handleSubmit} className="flex flex-col space-y-4">
            <div>
              <label
                htmlFor="nama"
                className="block text-gray-700 font-semibold mb-1"
              >
                Nama
              </label>
              <input
                type="text"
                name="nama"
                id="nama"
                value={formData.nama}
                onChange={handleChange}
                placeholder="Nama lengkap"
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-400"
                required
              />
            </div>

            <div>
              <label
                htmlFor="email"
                className="block text-gray-700 font-semibold mb-1"
              >
                Email
              </label>
              <input
                type="email"
                name="email"
                id="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Email Anda"
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-400"
                required
              />
            </div>

            <div>
              <label
                htmlFor="pesan"
                className="block text-gray-700 font-semibold mb-1"
              >
                Pesan
              </label>
              <textarea
                name="pesan"
                id="pesan"
                value={formData.pesan}
                onChange={handleChange}
                placeholder="Tulis pesan Anda"
                rows={5}
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-400"
                required
              />
            </div>

            <button
              type="submit"
              className="bg-cyan-500 text-white py-3 rounded-lg font-semibold shadow hover:bg-cyan-600 transition"
            >
              Kirim Pesan
            </button>
          </form>
        </div>
      </div>

      {/* Footer */}
      <footer className=" mt-auto w-full">
        <div className="max-w-6xl mx-auto px-6">
          <div className="rounded-lg border border-gray-200 shadow 
                          px-6 py-6 flex flex-col md:flex-row 
                          justify-between items-center 
                          mx-0 mb-6">
            {/* Info Sekolah */}
            <div className="text-center md:text-left mb-4 md:mb-0">
              <h4 className="text-lg font-bold text-gray-800">
                SMA Muhammadiyah 3 Jakarta
              </h4>
              <p className="text-gray-600 text-sm">
                Jl. Kramat Raya No. 49, Jakarta Pusat, Indonesia
              </p>
              <p className="text-gray-600 text-sm">Telp: (021) 123-4567</p>
            </div>

            {/* Copyright + Sosmed */}
            <div className="flex flex-col md:items-end items-center space-y-3">
              <p className="text-gray-600 text-sm">
                &copy; 2025 MUGA Lab. All rights reserved.
              </p>
              <div className="flex space-x-4 text-gray-600 text-xl">
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-cyan-500"
                >
                  <FaInstagram />
                </a>
                <a
                  href="https://twitter.com"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-cyan-500"
                >
                  <FaTwitter />
                </a>
                <a
                  href="https://tiktok.com"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-cyan-500"
                >
                  <SiTiktok />
                </a>
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-cyan-500"
                >
                  <FaFacebookF />
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default KontakPage;
