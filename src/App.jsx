// src/App.jsx
import { Routes, Route } from "react-router-dom";
import HomePage from "./components/HomePage";
import JadwalGuru from "./components/JadwalGuru";
import ArtikelPage from "./components/ArtikelPage";
import TestimoniPage from "./components/TestimoniPage";
import KontakPage from "./components/KontakPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/jadwal" element={<JadwalGuru />} />
      <Route path="/artikel" element={<ArtikelPage />} />
      <Route path="/testimoni" element={<TestimoniPage />} />
      <Route path="/kontak" element={<KontakPage />} />
    </Routes>
  );
}

export default App;
