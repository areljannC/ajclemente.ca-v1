import React, { Component } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import Navbar from './_components/Navbar';
import Home   from './_sections/Home';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Navbar />
          <Home   />
        </div>
      </Router>
    );
  }
}

export default App;
