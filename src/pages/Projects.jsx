import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

export default function Projects() {
  const projects = [
    {
      title: "ZenVest",
      description:
        "A stock trading platform inspired by Zerodha. Built using React, Node.js, Express, and MongoDB with authentication and live chart .",
      tech: ["React", "Node.js", "Express", "MongoDB"],
      image: "./zenvest.png",
      github: "https://github.com/shalvi-srivastava/ZenVest",
      live: "#",
    },
    {
      title: "CRUD App",
      description:
        "A simple full-stack CRUD app demonstrating user data management with RESTful API and responsive design.",
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
