import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import AuthModal from "../auth/AuthModal";

const HomePage = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isAuthOpen, setIsAuthOpen] = useState(false);

  return (
    <div className="bg-white min-h-screen flex flex-col items-center px-4 sm:px-6 md:px-8 overflow-x-hidden">
      {/* Wrapper Navbar + Hero */}
      <div className="w-full max-w-6xl my-10 flex flex-col gap-8">
        {/* Navbar */}
        <nav className="flex items-center justify-between px-4 sm:px-6 md:px-8 py-4 shadow-md rounded-lg bg-white relative z-20">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="w-5 h-5 bg-cyan-400 rounded-full" />
            <span className="text-lg font-bold text-gray-700">MUGA Laboratorium</span>
          </div>

          {/* Menu Desktop */}
          <div className="hidden md:flex space-x-8 text-md font-medium text-gray-600">
            <Link to="/" className="hover:text-cyan-500">BERANDA</Link>
            <Link to="/jadwal" className="hover:text-cyan-500">JADWAL</Link>
            <Link to="/artikel" className="hover:text-cyan-500">ARTIKEL</Link>
            <Link to="/testimoni" className="hover:text-cyan-500">TESTIMONI</Link>
            <Link to="/kontak" className="hover:text-cyan-500">KONTAK</Link>

            <button
              onClick={() => setIsAuthOpen(true)}
              className="hidden md:inline-block lg:hidden bg-cyan-500 text-white px-6 py-2 md:px-8 md:py-3 rounded-lg font-semibold shadow-lg hover:bg-cyan-600 transition"
            >
              LOGIN
            </button>
          </div>

          {/* Hamburger Button (Mobile) */}
          <button
            className="md:hidden p-2 rounded-lg text-gray-700 hover:bg-gray-100"
            onClick={() => setIsOpen(true)}
          >
            <Menu size={24} />
          </button>
        </nav>

        {/* Sidebar Mobile */}
        <div
          className={`fixed top-0 right-0 h-full w-64 bg-white shadow-2xl transform transition-transform duration-300 z-30 ${
            isOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div className="flex items-center justify-between p-4 border-b">
            <span className="font-bold text-gray-700">Menu</span>
            <button
              className="p-2 rounded-lg text-gray-700 hover:bg-gray-100"
              onClick={() => setIsOpen(false)}
            >
              <X size={24} />
            </button>
          </div>
          <div className="flex flex-col space-y-4 p-6 text-gray-600 font-medium">
            <Link to="/" className="hover:text-cyan-500" onClick={() => setIsOpen(false)}>BERANDA</Link>
            <Link to="/jadwal" className="hover:text-cyan-500" onClick={() => setIsOpen(false)}>JADWAL</Link>
            <Link to="/artikel" className="hover:text-cyan-500" onClick={() => setIsOpen(false)}>ARTIKEL</Link>
            <Link to="/testimoni" className="hover:text-cyan-500" onClick={() => setIsOpen(false)}>TESTIMONI</Link>
            <Link to="/kontak" className="hover:text-cyan-500" onClick={() => setIsOpen(false)}>KONTAK</Link>

            <button
              onClick={() => { setIsAuthOpen(true); setIsOpen(false); }}
              className="block md:hidden bg-cyan-500 text-white px-6 py-2 rounded-lg font-semibold shadow-lg hover:bg-cyan-600 transition mt-4"
            >
              LOGIN
            </button>
          </div>
        </div>

        {/* Overlay */}
        {isOpen && (
          <div
            className="fixed inset-0 bg-black bg-opacity-30 z-20"
            onClick={() => setIsOpen(false)}
          />
        )}

        {/* Main Content / Hero */}
        <div className="flex flex-col md:flex-row items-center bg-white rounded-3xl shadow-xl overflow-hidden w-full">
          {/* Left Text */}
          <div className="md:w-1/2 flex flex-col justify-center p-6 sm:p-10 md:p-12 lg:p-16 space-y-6">
            <h1 className="text-2xl sm:text-3xl md:text-3xl text-gray-600">Selamat Datang di</h1>
            <h2 className="text-4xl sm:text-5xl md:text-4xl lg:text-5xl font-black text-gray-800">MUGA</h2>
            <h2 className="text-4xl sm:text-5xl md:text-4xl lg:text-5xl font-black text-cyan-500">Laboratorium</h2>
            <p className="text-gray-500 text-sm sm:text-base md:text-base lg:text-lg max-w-md">
              "Kami hadir untuk memberikan informasi seputar aktivitas, fasilitas, dan program di laboratorium kami. Semoga website ini bermanfaat bagi seluruh civitas akademika dan masyarakat."
            </p>

            <button
              onClick={() => setIsAuthOpen(true)}
              className="hidden md:block bg-cyan-500 text-white px-6 py-2 md:px-8 md:py-3 rounded-lg font-semibold shadow-lg hover:bg-cyan-600 transition"
            >
              LOGIN
            </button>
          </div>

          {/* Right Image */}
          <div className="md:w-1/2 flex items-center justify-center p-6 sm:p-8 md:p-10 lg:p-12">
            <img
              src="/public/lab.png"
              alt="lab"
              loading="lazy"
              className="object-cover max-w-full h-auto rounded-2xl shadow-2xl"
            />
          </div>
        </div>
      </div>

      {/* Auth Modal */}
      <AuthModal
        isOpen={isAuthOpen}
        onClose={() => setIsAuthOpen(false)}
      />
    </div>
  );
};

export default HomePage;
