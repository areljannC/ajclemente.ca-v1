import React, { Component } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import Navbar   from './_components/Navbar';
import Home     from './_sections/Home';
import Projects from './_sections/Projects';
import AboutMe  from './_sections/AboutMe';

import './_stylesheets/bulma-custom.css';
import './_stylesheets/custom.css';
class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Navbar   />
          <Home     />
          <AboutMe  />
          <Projects />
        </div>
      </Router>
    );
  }
}

export default App;
