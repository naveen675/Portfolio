import React from "react";
import ReactDom from "react-dom";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import "./styles.css";
import profileImage from "./Images/profile.JPG";
import Contact from "./contact";

// function App() {
//   return (
//     <Router>
//       <Switch>
//         <Route exact path="/contact" component={Contact} />
//       </Switch>
//     </Router>
//   );
// }
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

function Footer() {
  return (
    <footer class="footer">
      <p>Hasitation will stop working of brilliant minds</p>
    </footer>
  );
}

function Title(props) {
  return (
    <div className={props.className}>
      <div class="name">
        <h1> NAVEEN SAI</h1>
        <h3>Engineer By Mistake</h3>
      </div>
      <img className="profileImage" src={profileImage} alt="Naveen Sai" />
    </div>
  );
}

function About() {
  return (
    <div className="content">
      <h2>About</h2>
      <p>Working As Software Engineer</p>
      <p>Enthusiastic towards Problem Solving And Learning new things</p>
      <p>
        I have been working as ETL developer in data integration with 1.9 Years
        of Experience
      </p>
      <p> Familiar with below technologies and tools </p>
      <img
        alt="Java"
        src="https://qph.cf2.quoracdn.net/main-qimg-317f4ff0db8d0ba328fc6d627af72d89"
        title="Java"
      />
      <img
        alt="Visual Studio Code"
        src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg"
        title="VS Code"
      />
      <img
        alt="HTML5"
        src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg"
        title="HTML5"
      />
      <img
        alt="CSS3"
        src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg"
        title="CSS"
      />
      <img
        alt="JavaScript"
        src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg"
        title="javascript"
      />
      <img
        alt="React"
        src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg"
        title="react"
      />
      <img
        alt="Node.js"
        src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg"
        title="nodejs"
      />
      <img
        alt="GitHub"
        src="https://user-images.githubusercontent.com/3369400/139447912-e0f43f33-6d9f-45f8-be46-2df5bbc91289.png"
        title="Github"
      />
      <img
        alt="GCP"
        src="https://www.gstatic.com/devrel-devsite/prod/v96fe7c72c7b00a90a6621d124258058ede00fa09bdb0b7e43bfa676d03923593/cloud/images/cloud-logo.svg"
        title="Google cloud"
      />
      <img
        alt="Jira"
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTw08jO1GdNZjfEbs5m54SsjEoysCmfPrzBfA&usqp=CAU"
        title="Jira"
      />
    </div>
  );
}

const root = (
  <>
    <Navigation />
    <Title className={"title"} />
    <About />
    <Footer />
  </>
);

ReactDom.render(root, document.getElementById("root"));
