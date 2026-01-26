import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

export default function Projects() {
 const projects = [
  {
    title: "PeerMeet",
    description:
      "A real-time video meeting platform built with React and WebRTC, featuring audio/video calls, instant chat using Socket.IO, and secure room-based communication.",
    tech: ["React", "WebRTC", "Socket.IO", "Node.js", "Express"],
    image: "./peermeet.png",
    github: "https://github.com/shalvi-srivastava/PeerMeet",
    live: "https://peermeetfrontend-q67z.onrender.com/",
  },
  {
    title: "ZenVest",
    description:
      "A stock trading platform built using the MERN stack, featuring user authentication, dashboard views, and real-time stock charts for tracking investments.",
    tech: ["React", "Node.js", "Express", "MongoDB"],
    image: "./zenvest.png",
    github: "https://github.com/shalvi-srivastava/ZenVest",
    live: "https://zenvest.up.railway.app/",
  },
  {
    title: "CRUD App",
    description:
      "A full-stack CRUD application built with React and Express, featuring RESTful APIs, user data management, and a clean responsive interface.",
    tech: ["React", "Express", "MongoDB", "Bootstrap"],
    image: "./wanderlust.png",
    github: "https://github.com/shalvi-srivastava/Wanderlust",
    live: "https://wanderlust-fkrb.onrender.com/",
  },
];


  return (
    <section className="projects-section py-5" id="projects">
      <div className="container">
        <h2 className="text-center fw-bold mb-5 section-title">Projects</h2>
        <div className="row g-4">
          {projects.map((project, index) => (
            <div className="col-md-6 col-lg-4" key={index}>
              <div className="project-card h-100">
                <img
                  src={project.image}
                  className="project-img"
                  alt={project.title}
                />
                <div className="card-body d-flex flex-column p-3">
                  <h5 className="fw-bold">{project.title}</h5>
                  <p
                    className="text-light flex-grow-1 "
                    style={{ fontSize: "1rem" }}
                  >
                    {project.description}
                  </p>
                  <div className="mb-3">
                    {project.tech.map((t, i) => (
                      <span key={i} className="badge tech-badge me-1">
                        {t}
                      </span>
                    ))}
                  </div>
                  <div className="">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-outline-dark btn-sm me-2"
                    >
                      GitHub
                    </a>
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-warning btn-sm"
                    >
                      Live Demo
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
