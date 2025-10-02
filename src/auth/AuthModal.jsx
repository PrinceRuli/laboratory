import React, { useState, useEffect, useRef } from "react";

const AuthModal = ({ isOpen, onClose }) => {
  const [isLogin, setIsLogin] = useState(true); // toggle login/register
  const emailRef = useRef(null); // untuk fokus otomatis

  // Fokus input email saat modal muncul
  useEffect(() => {
    if (isOpen && emailRef.current) {
      emailRef.current.focus();
    }
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <>
      {/* Overlay */}
      <div
        className="fixed inset-0 bg-cyan-500 bg-opacity-30 z-40"
        onClick={onClose} // klik overlay menutup modal
      />

      {/* Modal */}
      <div className="fixed inset-0 flex items-center justify-center z-50 p-4">
        <div
          className="bg-white rounded-2xl shadow-xl max-w-md w-full p-6 relative"
          onClick={(e) => e.stopPropagation()} // klik di dalam modal tidak menutup
        >
          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 text-gray-600 hover:text-gray-800"
          >
            ✕
          </button>

          {/* Header */}
          <h2 className="text-2xl font-bold text-gray-800 mb-4 text-center">
            {isLogin ? "Login" : "Register"}
          </h2>

          {/* Form */}
          <form className="flex flex-col space-y-4">
            <input
              type="email"
              placeholder="Email"
              ref={emailRef} // fokus otomatis
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-400"
              required
            />
            {!isLogin && (
              <input
                type="text"
                placeholder="Nama Lengkap"
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-400"
                required
              />
            )}
            <input
              type="password"
              placeholder="Password"
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-400"
              required
            />
            <button
              type="submit"
              className="bg-cyan-500 text-white py-3 rounded-lg font-semibold shadow-lg hover:bg-cyan-600 transition"
            >
              {isLogin ? "Login" : "Register"}
            </button>
          </form>

          {/* Toggle Login/Register */}
          <p className="text-sm text-gray-600 mt-4 text-center">
            {isLogin ? "Belum punya akun?" : "Sudah punya akun?"}{" "}
            <button
              className="text-cyan-500 font-semibold hover:underline"
              onClick={() => setIsLogin(!isLogin)}
            >
              {isLogin ? "Register" : "Login"}
            </button>
          </p>

          {/* Skip / Close */}
          <p className="text-sm text-gray-400 mt-2 text-center">
            Atau <button className="hover:underline" onClick={onClose}>lewati</button>
          </p>
        </div>
      </div>
    </>
  );
};

export default AuthModal;
