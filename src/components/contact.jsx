import React, { useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationPin, faPhone } from "@fortawesome/free-solid-svg-icons";
import { faPaperPlane } from "@fortawesome/free-regular-svg-icons";
import emailjs from "@emailjs/browser";

function Info({ icon, title, mine }) {
  return (
    <div className="part1">
      <div className="icon">
        <FontAwesomeIcon icon={icon} size="2x" color="black" />
      </div>
      <div className="contactInfo">
        <h4>{title}</h4>
        <p>{mine}</p>
      </div>
    </div>
  );
}

export default function Contact() {
  useEffect(() => {
    emailjs.init("unP-wO2Jaem_zyHhf");
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();
    emailjs
      .sendForm("portfolio_contact", "template_portifolio", event.target)
      .then(() => {
        console.log("SUCCESS");
        event.target.reset()
      })
      .catch((error) => {
        console.log("Failed...", error);
      });
  };

  return (
    <>
      <div className="contact-point">
        <Info icon={faLocationPin} title="Location" mine="Kigali, Nyamirambo" />
        <div className="special">
          <Info icon={faPaperPlane} title="Email" mine="benjaminwell250@gmail.com" />
        </div>
        <Info icon={faPhone} title="Contact" mine="+250787899063" />
      </div>
      <form id="contact-form" onSubmit={handleSubmit}>
        <input type="text" placeholder="Name" name="name" required />
        <input type="email" placeholder="example@gmail.com" name="email" required />
        <input type="text" name="subject" placeholder="Subject" required />
        <textarea name="message" placeholder="Your Text" required></textarea>
        <input type="submit" value="Submit" />
      </form>
    </>
  );
}
