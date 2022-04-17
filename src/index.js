import React from "react";
import ReactDom from "react-dom";
import "./styles.css";
import profileImage from "./Images/profile.JPG";

function Navigation() {
  return (
    <header className="header">
      <div className="nav">
        <p>Home</p>
        <p>Projects</p>
        <p>Contact</p>
      </div>
    </header>
  );
}

function Title(props) {
  return (
    <div className={props.className}>
      <div class="name">
        <h1> NAVEEN SAI</h1>
        <h1> DEVELOPER </h1>
      </div>
      <img className="profileImage" src={profileImage} alt="Naveen Sai" />
    </div>
  );
}

function About() {
  return (
    <div className="content">
      <h3>About</h3>
      <p>Working As Software Engineer</p>
      <p>Enthusiastic Towards Solving problems</p>
      <p>
        I have been working as ETL developer in data integration with 1.9 Years
        of Experience
      </p>
      <p> Familiar with below technologies and tools </p>
    </div>
  );
}

const root = (
  <>
    <Navigation />
    <Title className={"title"} />
    <About />
  </>
);

ReactDom.render(root, document.getElementById("root"));
