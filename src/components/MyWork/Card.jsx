import React from "react";

function Card({ image, projectName, description, deployed, github }) {
  return (
    <div className="card">
      {projectName}
      <img src={image} alt="" />
      {description}
      <div className="buttons">
        <a href={deployed}>
          <button>Deployed App</button>
        </a>
        <a href={github}>
          <button>GitHub Repo</button>
        </a>
      </div>
    </div>
  );
}

export default Card;
