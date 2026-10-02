import "./styles/global.css";
import Hero from "./components/Hero/Hero.jsx";
import Navbar from "./components/Navbar/Navbar.jsx";
import Projects from "./components/Projects/Projects.jsx";

export default function App() {
  return (
    <div className="app-container">
      <Hero />
      <Navbar />
      <Projects />
    </div>
  );
}
