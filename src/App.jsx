import "./styles/global.css";
import Hero from "./components/Hero/Hero.jsx";
import Navbar from "./components/Navbar/Navbar.jsx";
import Projects from "./components/Projects/Projects.jsx";
import CultureGallery from "./components/CultureGallery/CultureGallery.jsx";
import Packages from "./components/Packages/Packages.jsx";
import Contact from "./components/Contact/Contact.jsx";
import WhatsAppButton from "./components/WhatsAppButton/WhatsAppButton.jsx";
export default function App() {
  return (
    <div className="app-container">
      <Hero />
      <Navbar />
      <Projects />
      <Packages />
      <CultureGallery />
      <Contact />
      <WhatsAppButton />
    </div>
  );
}
