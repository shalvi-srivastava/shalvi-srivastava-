import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

export default function Skills() {
  const skills = [
    {
      name: "HTML5",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
    },
    {
      name: "CSS3",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
    },
    {
      name: "JavaScript",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
    },
    {
      name: "Bootstrap",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg",
    },
    {
      name: "React",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
    },
    {
      name: "Node.js",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
    },
    {
      name: "Express",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg",
    },
    {
      name: "MongoDB",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
    },
    {
      name: "Git",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
    },
    {
      name: "GitHub",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg",
    },
    {
      name: "Java",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg",
    },
    // { name: "VSCode", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg" },
  ];

  return (
    <section className="py-5  text-light text-center">
      <div className="container">
        <h2 className="fw-bold mb-5 section-title">Technical Skills</h2>
        <div className="row justify-content-center g-4">
          {skills.map((skill, index) => (
            <div key={index} className="col-4 col-sm-3 col-md-2">
              <div className="card bg-transparent border-0">
                <div className="card-body">
                  <img
                    src={skill.logo}
                    alt={skill.name}
                    className="img-fluid mb-2 skill-logo"
                    style={{
                      height: "60px",
                      filter: "drop-shadow(0 0 5px rgba(255,255,255,0.3))",
                    }}
                  />
                  <p className="text-light mt-2 small">{skill.name}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
