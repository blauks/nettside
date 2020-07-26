import React, { useState } from 'react';
import {
  HashRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import './App.css';
import Main from './f1/main.js';

function App() {

  const [xds, addxds] = useState({
    obj: [],
  })

  const handleMouseClick = event => {
    addxds({
      obj: [...xds.obj ,{
        left: event.pageX-20,
        top: event.pageY-20,
        position: 'absolute'
      }]
    })
  }
  
  return (
    <Router>
      <Switch>
        <Route exact path="/f1">
          <Main/> 
        </Route>
        <Route exact path="/">
          <div className="App" onClick={handleMouseClick}>
            <div className="circles">
              {xds.obj.map(function(d, i){
                return <div className="circle" key={i} style={d}/>
              })}
          </div>
          <div className="content">
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
          </div>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
