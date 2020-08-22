import React from 'react';
import './App.css';
import Navbar from './component/Navbar/Navbar';
import Home from './component/Home/Home'
import About from './component/About/About'
import Skills from './component/Skills/Skills'
import Projects from './component/Projects/Projects'
import Contact from './component/Contact/Contact'
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom'

function App() {
  return (
    <Router>
        <div className="App">
          <Navbar />
          <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/About" component={About} />
              <Route exact path="/Skills" component={Skills} />
              <Route exact path="/Projects" component={Projects} />
              <Route exact path="/Contact" component={Contact} />
          </Switch>
        </div>
    </Router>
    
  );
}

export default App;
