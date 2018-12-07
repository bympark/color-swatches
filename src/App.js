import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Frame from './views/Frame';
import Home from './views/Home';
import Details from './views/Details';

class App extends Component {
  render() {
    return (
      <Router>
        <div className='App'>
          <Frame/>
          <div className='content'>
            <Route exact path='/' component={Home} />
            <Route path='/Details' render={(props) => <Details {...props} />} />
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
