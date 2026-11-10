import React from "react";
import { Hero } from "./components/Hero";
import { ServicesGallery } from "./components/ServicesGallery";
import { Packages } from "./components/Packages";
function App() {
  return (
    <main className="bg-[#0b071a] min-h-screen text-white selection:bg-[#A11DA0] selection:text-white">
      <Hero />
      <ServicesGallery />
      <Packages />
    </main>
  );
}

export default App;
