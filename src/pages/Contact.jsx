import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
// import "../styles/contact.css"; // create this file

export default function Contact() {
  return (
    <section className="contact-section py-5" id="contact">
      <div className="container">
        <h2 className="text-center fw-bold mb-5 section-title">Contact Me</h2>

        <div className="row justify-content-center">
          <div className="col-md-6">
            <div className="contact-card p-4 rounded">
              <form>
                <div className="mb-3">
                  <label htmlFor="name" className="form-label text-dark">
                    Name
                  </label>
                  <input
                    type="text"
                    className="form-control contact-input"
                    id="name"
                    placeholder="Your Name"
                    required
                  />
                </div>

                <div className="mb-3">
                  <label htmlFor="email" className="form-label text-dark">
                    Email
                  </label>
                  <input
                    type="email"
                    className="form-control contact-input"
                    id="email"
                    placeholder="your@email.com"
                    required
                  />
                </div>

                <div className="mb-3">
                  <label htmlFor="message" className="form-label text-dark">
                    Message
                  </label>
                  <textarea
                    className="form-control contact-input"
                    id="message"
                    rows="4"
                    placeholder="Type your message..."
                    required
                  ></textarea>
                </div>

                <div className="text-center">
                  <button
                    type="submit"
                    className="btn btn-warning fw-semibold px-4"
                  >
                    Send Message
                  </button>
                </div>
              </form>
            </div>

            <div className="text-center mt-4">
              <p className="text-dark mb-1">
                Or reach me directly at{" "}
                <a
                  href="mailto:srivastavashalvi33@gmail.com"
                  className="email-link"
                >
                  srivastavashalvi33@gmail.com
                </a>
              </p>
              <div className="social-icons mt-3">
                <a
                  href="#"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-icon"
                >
                  <i className="bi bi-github"></i>
                </a>
                <a
                  href="#"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-icon"
                >
                  <i className="bi bi-linkedin"></i>
                </a>
                <a
                  href="#"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-icon"
                >
                  <i className="bi bi-twitter-x"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
