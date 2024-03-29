import React from "react";
import experienceImg from "../../assets/img/experience.webp";

function Experience() {
  return (
    <div className="experience">
      <div className="expCard">
        <img src={experienceImg} alt="experience" />
        <div className="text">
          <h1>Experience</h1>
          <h2>Work & Internship</h2>
          <p>
            I have worked with many evolving startups as ML and DL Developer,
            Designer and Software Architect. I have also worked with some well
            established companies mostly as AI Developer. I love organising
            events and that is why I am also involved with many opensource
            communities as a representative.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Experience;
