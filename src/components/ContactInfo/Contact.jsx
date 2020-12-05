import React from "react";
import "./Contact.css";

//icons
import phone from "../files/phoneicon.png";
import gmail from "../files/gmail.png";
import linkedIn from "../files/linkedin.png";
import github from "../files/github.png";

function Contact() {
  return (
    <section className="contact-info" id="contact-info">
      <div>
        <span id="contact-me-title">Contact Me</span>
        {/* <div className="line3"></div> */}
        <p>
          judeclark2019@gmail.com&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;678-825-JUDE
          (5833)
        </p>
        <br />
        <p>
          <a href="https://github.com/judeclark19">
            <img src={github} alt="GitHub logo" />
          </a>
          <a href="https://www.linkedin.com/in/jude-clark-89262634/">
            <img src={linkedIn} alt="LinkedIn logo" />
          </a>
        </p>
      </div>
    </section>
  );
}

export default Contact;