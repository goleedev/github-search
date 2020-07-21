import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import '../src/App.css';
import './components/Join/Join'
import Join from './components/Join/Join';
import UserDetail from './components/UserDetail/UserDetail'

function App() {
  return (
    <BrowserRouter>
      <Route exact path="/" component={Join} />
      <Route exact path="/github" component={UserDetail} />
    </BrowserRouter>
  );
}

export default App;
