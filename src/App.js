import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import { Provider } from 'react-redux';
import store from './store/index';

import './globalStyle.css';
import Home from './pages/Home';

function App() {
  return (
    <div className="App">
      <Provider store={store}>
      <Router>
        <Switch>
          <Route exact path="/" component={Home}/>
        </Switch>
      </Router>
      </Provider>
    </div>
  );
}

export default App;
