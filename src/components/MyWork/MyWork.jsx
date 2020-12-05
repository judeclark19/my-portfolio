import React from "react";
import Card from "./Card";
import "./MyWork.css";

//images
import menorah from "../files/menorahSS.png";
import capture from "../files/captureSS.png";
import letsRoll from "../files/letsrollSS.png";
import dataTable from "../files/dataTableSS.png";
import bookish from "../files/bookishSS.png";
import personaGen from "../files/personaGenSS.png";
import weather from "../files/weatherSS.png";
import jsQuiz from "../files/codingQuizSS.png";

function MyWork() {
  return (
    <section className="my-work" id="my-work">
      <span id="my-work-title">My Work</span>
      {/* <div className="line2"></div> */}
      <div className="gallery">
        <Card
          projectName="Virtual Menorah"
          image={menorah}
          description="A ReactJS virtual menorah to share on-screen while celebrating zoom Hanukkah."
          deployed="https://spacial-fray-menorah.netlify.app/"
          github="https://github.com/judeclark19/menorah"
        />
        <Card
          projectName="Capture"
          image={capture}
          description="A mock portfolio website that features transition framer-motion, demonstrating how the addition of animations deeply impacts the user experience."
          deployed="https://spacial-fray-capture.netlify.app/"
          github="https://github.com/judeclark19/capture"
        />
        <Card
          projectName="Let's Roll"
          image={letsRoll}
          description="Let's Roll is a PWA for people who love quad skating to connect and share information about great places to fun, safe places to skate outdoors."
          deployed="https://gt-lets-roll.herokuapp.com/"
          github="hhttps://github.com/judeclark19/Lets-Roll"
        />
        <Card
          projectName="React-Table"
          image={dataTable}
          description="This table shows the contact info of myself and my classmates from GA Tech's full stack coding Bootcamp in October 2020. Click on any column header to sort the table by that column. Type anything in the search input to filter the table."
          deployed="https://judeclark19.github.io/user-data-table"
          github="https://github.com/judeclark19/user-data-table"
        />
        <Card
          projectName="Bookish"
          image={bookish}
          description="The concept for Bookish is a social app where readers can form virtual book clubs of up to 10 members for the purpose of discussing a specific book."
          deployed="http://gt-bookish.herokuapp.com/"
          github="https://github.com/judeclark19/bookish"
        />
        <Card
          projectName="personaGen"
          image={personaGen}
          description="personaGen is an easy-to-use and customizable generator of fake user identities. The ideal user is a developer who is generating personas to test in their own project."
          deployed="https://judeclark19.github.io/personaGen/"
          github="https://github.com/judeclark19/personaGen"
        />
        <Card
          projectName="Weather Dashboard"
          image={weather}
          description="Use this simple weather app to view the current weather conditions, as well as a 5-day forecast, for the city of your choice. Simply type in the name of a city and click 'Search' to view the weather data."
          deployed="https://judeclark19.github.io/weather-dashboard/"
          github="https://github.com/judeclark19/weather-dashboard"
        />
        <Card
          projectName="JavaScript Quiz"
          image={jsQuiz}
          description="Try to answer knowledge questions about JavaScript within a given time limit. Incorrect answers will take 10 seconds off the clock!"
          deployed="https://judeclark19.github.io/coding-quiz/"
          github="https://github.com/judeclark19/coding-quiz"
        />
      </div>
    </section>
  );
}

export default MyWork;
