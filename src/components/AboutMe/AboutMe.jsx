import React from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import './AboutMe.css';
import picofme from '../../media/picofme.jpeg';
import resume from '../../media/resume.pdf';

function AboutMe() {
  const sectionVariants = {
    initial: { opacity: 0 },
    animate: { opacity: 1, transition: { duration: 0.8 } },
  };

  const controls = useAnimation();
  const [element, view] = useInView({ threshold: 0.2 });

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
      className="about-me"
      id="about-me"
    >
      <div className="box bio">
        <div className="hello">Hello, I'm Jude.</div>
        {/* <div className="line"></div> */}
        <div className="bio-text">
          <p>
            I am a 28 year old full-stack web developer living in Duluth, GA. My
            coworkers nicknamed me "the human computer". My attention to detail,
            efficiency, and ability to conceptualize complex systems are
            qualities that help me to excel at building and maintaining
            websites.
          </p>
          <p>
            I started my education as a musician, completing a Bachelor's of
            Music Composition from the University of South Carolina in 2014.
            After university, I worked in the classical music industry for four
            years, after which I had the desire to try something new. In 2018 I
            returned to my hometown of Duluth, GA with the goal of building a
            nice life for myself and my husband (and two cats).
          </p>
          <p>
            I received my certificate in full-stack web development from{' '}
            <a href="https://bootcamp.pe.gatech.edu/coding/">
              a coding bootcamp at Georgia Tech
            </a>{' '}
            in November 2020 and have fallen in love with coding. I enjoyed the
            coding bootcamp so much that I stayed on as a TA and am now helping
            other students start their coding journeys.
          </p>
          <p>
            My other interests include: makeup, the Olympics, Nederlands
            spreken.
          </p>
        </div>
        <br />
        <a href={resume}>
          <button>Download my resume</button>
        </a>
      </div>
      <div className="box portrait">
        <img src={picofme} alt="" />
      </div>
    </motion.section>
  );
}

export default AboutMe;
