import React from "react";
import { Hero } from "./components/Hero";
import { ServicesGallery } from "./components/ServicesGallery";
import { Packages } from "./components/Packages";
import { Faq } from "./components/Faq";
import { About } from "./components/About";
import { PhotoGallery } from "./components/PhotoGallery";
import { Navbar } from "./components/Navbar";
import { Footer } from "./components/Footer";

function App() {
  return (
    <main className="bg-[#0b071a] min-h-screen text-white selection:bg-[#A11DA0] selection:text-white">
      <Hero />
      <ServicesGallery />
      <Packages />
      <Faq />
      <About />
      <PhotoGallery />
      <Navbar />
      <Footer />
    </main>
  );
}

export default App;
