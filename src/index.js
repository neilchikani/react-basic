import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import React, { Component } from 'react';
import MyComponent from '../src/component/MyComponent.jsx';
import Todo from '../src/component/todo'
class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Route path="/" component={MyComponent}/>
          <Route path="/todo" component={Todo}/>
        </div>
      </Router>
    )
  }
}

export default App;