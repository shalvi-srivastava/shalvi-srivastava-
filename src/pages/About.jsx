import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

export default function About() {
  return (
    <section className="py-5 text-light" id="about">
      <div className="container">
        <h2 className="text-center fw-bold mb-4 section-title ">About Me</h2>
        <div className=" row justify-content-center">
          <div className="card bg-transparent border-0 col-md-7 ">
            <div className="card-body">
              <p className="lead mb-4 ">
                I am a Computer Science Engineering student with a strong
                interest in software development and modern web technologies. I
                focus on creating scalable, responsive, and efficient
                applications that deliver smooth user experiences.
              </p>
              <p className="lead mb-4 ">
                My core expertise lies in the MERN stack, along with a solid
                understanding of object-oriented programming and backend logic.
                I value writing clean, maintainable code and continuously strive
                to improve both technical and problem-solving skills.
              </p>
              <p className="lead">
                I am motivated by continuous learning and enjoy transforming
                ideas into meaningful digital products through a blend of
                creativity and precision.
              </p>
              {/* </div> */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
