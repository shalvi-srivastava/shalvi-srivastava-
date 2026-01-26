import { useEffect } from "react";
import * as bootstrap from "bootstrap";

import Navbar from "./components/Navbar";
import Hero from "./pages/Hero";
import About from "./pages/About";
import Skills from "./pages/Skills";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";

import "./App.css";

export default function App() {
  useEffect(() => {
    const scrollSpy = new bootstrap.ScrollSpy(document.body, {
      target: "#mainNavbar",
      offset: 100,
    });

    return () => scrollSpy.dispose();
  }, []);

  return (
    <>
      <Navbar />

      <div
        data-bs-spy="scroll"
        data-bs-target="#mainNavbar"
        data-bs-offset="100"
        tabIndex="0"
      >
        <section id="home">
          <Hero />
        </section>

        <section id="about">
          <About />
        </section>

        <section id="skills">
          <Skills />
        </section>

        <section id="projects">
          <Projects />
        </section>

        <section id="contact">
          <Contact />
        </section>
      </div>
    </>
  );
}
