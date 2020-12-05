import React from "react";
import Card from "./Card";
import "./MyWork.css";

import menorah from "../files/menorahSS.png";

function MyWork() {
  return (
    <section className="my-work" id="my-work">
      <span id="my-work-title">My Work</span>
      <div className="gallery">
        <Card
          projectName="Virtual Menorah"
          image={menorah}
          description="A ReactJS virtual menorah to share on-screen while celebrating zoom Hanukkah."
          deployed="https://spacial-fray-menorah.netlify.app/"
          github="https://github.com/judeclark19/menorah"
        />
        <Card
          projectName="second proj"
          image="https://via.placeholder.com/600x400.png"
          description="kjlwdiegj gl;kjdgs;lewgj ewgojwegiogjw gjlgjwlg adsg lgsjdgsgfd gsjfs;lg gsdsglg goee gojwojew ds"
        />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    </section>
  );
}

export default MyWork;
