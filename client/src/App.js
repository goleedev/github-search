import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import '../src/App.css';
import './components/Join/Join';
import Join from './components/Join/Join';
import UserDetail from './components/UserDetail/UserDetail';
import Error from './components/Error/Error';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Join} />
        <Route exact path="/github" component={UserDetail} />
        <Route path='*'>
              <Error></Error>
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
