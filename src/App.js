import React, { Component } from 'react';
import './App.css';
// eslint-disable-next-line
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import Home from './Home.js'
import Work from './Work.js'
import Contact from './Contact.js'

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">

          <Route exact path="/" component={ Home }/>
          <Route path="/work" component={ Work }/>
          <Route path="/contact" component={ Contact }/>

          <footer>
            <span>
              Evan Amezcua &rarr; Developer &rarr; Melbourne, AU
            </span>
          </footer>
        </div>
      </Router>
    );
  }
}

export default App;
