import React, { useState } from "react";
import "./Contact.css";
import { FiPhone } from "react-icons/fi";
import { FaRegEnvelope } from "react-icons/fa";
import { HiOutlineLocationMarker } from "react-icons/hi";
import Header from "../Header/Header";
import email from "emailjs-com";

function Contact() {
  const [input, setInput] = useState({
    name: "",
    email: "",
    project: "",
    message: "",
  });

  const sendEmail = (e) => {
    e.preventDefault();

    email
      .sendForm(
        "service_8pnfs3n",
        "template_94gg8j9",
        e.target,
        "user_jDtQoNUIrSgIvZ6ObUWNg"
      )
      .then((result) => {
        console.log(result.text);
      })
      .catch((error) => console.log(error));
    setInput({ name: "", email: "", project: "", message: "" });
  };

  const onChangeHandler = (e) => {
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div id="contact" className="contact">
      <Header title="Contact" subtitle="get in touch" />
      <div className="contact-bot">
        <div className="contact-bot-left">
          <div className="row">
            <div className="content">
              <div className="contact-content">
                <i className="contact-icon">
                  <FiPhone />
                </i>
                <div className="contact-text">
                  <span className="contact-span">Call Me</span>
                  <span className="under-text">+54 221 5673629</span>
                </div>
              </div>
              <div className="contact-content">
                <i className="contact-icon">
                  <FaRegEnvelope />
                </i>
                <div className="contact-text">
                  <span className="contact-span">Email</span>
                  <span className="under-text">gregoriomartocci@gmail.com</span>
                </div>
              </div>
              <div className="contact-content">
                <i className="contact-icon">
                  <HiOutlineLocationMarker />
                </i>
                <div className="contact-text">
                  <span className="contact-span">Location</span>
                  <span className="under-text">
                    Argentina, Buenos Aires, La Plata
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="contact-bot-right">
          <form onSubmit={(e) => sendEmail(e)}>
            <div className="input_element">
              <span className="contact-input-span">Name</span>
              <input
                className="contact-input"
                onChange={(e) => onChangeHandler(e)}
                name="name"
                type="text"
                value={input.name}
              ></input>
            </div>
            <div className="input_element">
              <span className="contact-input-span">Email</span>
              <input
                className="contact-input"
                onChange={(e) => onChangeHandler(e)}
                name="email"
                type="email"
                value={input.email}
              ></input>
            </div>
            <div className="input_element">
              <span className="contact-input-span">Project</span>
              <input
                className="contact-input"
                onChange={(e) => onChangeHandler(e)}
                name="project"
                type="text"
                value={input.project}
              ></input>
            </div>
            <div className="input_element contact-message">
              <span className="contact-input-span">Message</span>
              <textarea
                className="contact-input contact-message"
                onChange={(e) => onChangeHandler(e)}
                name="message"
                type="message"
                value={input.message}
              ></textarea>
            </div>
            <input className="contact-btn" type="submit" value="Send Message" />
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contact;
