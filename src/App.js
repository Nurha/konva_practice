import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';
import StarDragDrop from './views/star_drag_drop';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Route exact path='/' component={StarDragDrop} /> 
        </div>
      </Router>
    );
  }
}

export default App;
