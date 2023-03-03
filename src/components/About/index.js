import React from "react";
import crewImage from "../../assets/large/people/crew.jpg"; 

function About() {
  return (
    <section className="my-2 font-pirata text-lg">
      <h1 id="about">Who Are We?</h1>
      <img src={crewImage} className="my-2" style={{ width: "100%" }} alt="cover" />
    </section>
  );
}

export default About;
