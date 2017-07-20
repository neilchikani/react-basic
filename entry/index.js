import { Router, Route, hashHistory } from 'react-router'
import React from 'react';
import ReactDOM from 'react-dom';
import MyComponent from '../src/MyComponent.jsx';
import '../less/main.less'
ReactDOM((
  <Router history={hashHistory}>
    <Route path="/" component={MyComponent}/>
  </Router>
), document.getElementById('app'));