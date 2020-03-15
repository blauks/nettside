import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <h1>Jonathan Brooks</h1>
      <p>Informatics student, NTNU Trondheim</p>
      <div className="sosialeMedier">
        <a href="https://www.linkedin.com/in/brooks-jonathan/" target="_blank" rel="noopener noreferrer">
          <img className="sosiallogo" alt="Linkedin" src={process.env.PUBLIC_URL + "/LinkedinLogo.png"}/>
        </a>
        <a href="https://www.instagram.com/jonybrooks/" target="_blank" rel="noopener noreferrer">
          <img className="sosiallogo" alt="Instagram" src={process.env.PUBLIC_URL + "/InstagramLogo.png"}/>
        </a>
        <a href="https://github.com/blauks" target="_blank" rel="noopener noreferrer">
          <img className="sosiallogo" alt="Github" src={process.env.PUBLIC_URL + "/GithubLogo.png"}/>
        </a>
      </div>
    </div>
  );
}

export default App;
