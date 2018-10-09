import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';
import StarDragDrop from './views/star_drag_drop';
import Images from './views/images';
import Rectangles from './views/rec';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Route exact path='/' component={StarDragDrop} /> 
          <Route exact path='/images' component={Images} /> 
          <Route exact path='/rec' component={Rectangles}/>
        </div>
      </Router>
    );
  }
}

export default App;
