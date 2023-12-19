import "./App.css";
import Navbar from "./components/NavBar";
import Header from "./components/Header";
import AboutSection from "./components/AboutSection";
import ProjectSection from "./components/ProjectsSection";
import Footer from "./components/Footer";
import React from "react";
import ContactSection from "./components/ContactSection";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Header />
      <AboutSection />
      <ProjectSection />
      <ContactSection />
      <Footer />
    </div>
  );
}

export default App;
