import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';
import StarDragDrop from './views/star_drag_drop';
import Images from './views/images'

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Route exact path='/' component={StarDragDrop} /> 
          <Route exact path='/images' component={Images} /> 
        </div>
      </Router>
    );
  }
}

export default App;
