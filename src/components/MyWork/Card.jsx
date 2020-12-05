import React from "react";
import "./Card.css";

function Card({ image, projectName, description, deployed, github }) {
  return (
    <div className="card">
      <div className="top">
        <h2>{projectName}</h2>
      </div>
      <div className="middle">
        <a href={deployed}>
          <img src={image} alt={projectName} />
        </a>
      </div>
      <div className="bottom">
        <p>{description}</p>
        <div className="buttons">
          <a href={deployed}>
            <button>Deployed App</button>
          </a>
          <a href={github}>
            <button>GitHub Repo</button>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Card;
