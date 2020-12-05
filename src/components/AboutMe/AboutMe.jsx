import React from "react";
import "./AboutMe.css";
import picofme from "../files/picofme.jpg";

function AboutMe() {
  return (
    <section className="about-me" id="about-me">
      <div className="box bio">
        <div className="hello">Hello, I'm Jude.</div>
        {/* <div className="line"></div> */}
        <p>
          I am a 28 year old full-stack web developer living in Duluth, GA. My
          coworkers nicknamed me "the human computer". My attention to detail,
          efficiency, and ability to conceptualize complex systems are qualities
          that help me to excel at building and maintaining websites.
        </p>
        <p>
          I started my education as a musician, completing a Bachelor's of Music
          Composition from the University of South Carolina in 2014. After
          university, I worked in the classical music industry for four years,
          after which I had the desire to try something new. In 2018 I returned
          to my hometown of Duluth, GA with the goal of building a nice life for
          myself and my husband (and two cats).
        </p>
        <p>
          I received my certificate in full-stack web development from Georgia
          Tech in November 2020. Since then, I have had a blast learning about
          the coding world! My other interests include: makeup, the Olympics,
          Nederlands spreken.
        </p>
        <br />
        <button>Download my resume</button>
      </div>
      <div className="box portrait">
        <img src={picofme} alt="" />
      </div>
    </section>
  );
}

export default AboutMe;
