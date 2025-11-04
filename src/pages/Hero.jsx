import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

export default function Hero() {
  return (
    <section className="d-flex align-items-center justify-content-center vh-100  text-dark text-center">
      <div className="container" id="hero">
        <h1 className=" display-4 mb-3 text-start">
          Hello, I'm{" "}
          <div className=" text-start  fw-bold">Shalvi Srivastava</div>
        </h1>
        <h4 className="mb-4 text-start"> Full-Stack Developer</h4>
        <p className="lead mb-5 text-start">
          Computer Science Engineering student specializing in Full-Stack
          Web Development. <br />
          I focus on designing and developing scalable, high-performance web
          applications using the MERN stack. <br />I believe in writing clean,
          efficient, and maintainable code to deliver seamless digital
          experiences.
        </p>
        <div className="text-start">
          <a href="/projects" className="btn btn-outline-dark btn-md me-2">
            View Projects
          </a>
          <a href="/contact" className="btn btn-warning btn-md">
            Contact Me
          </a>
        </div>
      </div>
    </section>
  );
}
