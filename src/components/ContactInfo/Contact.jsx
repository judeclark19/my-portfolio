import React from 'react';
import './Contact.css';

import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

//icons

import linkedIn from '../../media/linkedin.png';
import github from '../../media/github.png';

function Contact() {
  const sectionVariants = {
    initial: { opacity: 0 },
    animate: { opacity: 1, transition: { duration: 0.8 } },
  };

  const controls = useAnimation();
  const [element, view] = useInView({ threshold: 0.5 });

  if (view) {
    controls.start('animate');
  } else {
    controls.start('initial');
  }

  return (
    <motion.section
      ref={element}
      variants={sectionVariants}
      animate={controls}
      initial="initial"
      className="contact-info"
      id="contact-info"
    >
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
            <img className="contact-icon" src={github} alt="GitHub logo" />
          </a>
          <a href="https://www.linkedin.com/in/jude-clark-89262634/">
            <img className="contact-icon" src={linkedIn} alt="LinkedIn logo" />
          </a>
        </p>
      </div>
    </motion.section>
  );
}

export default Contact;
