import React, { Component } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import Navbar from './_components/Navbar';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Navbar />
        </div>
      </Router>
    );
  }
}

export default App;
