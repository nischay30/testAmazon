import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import injectTapEventPlugin from 'react-tap-event-plugin';

import HomePage from './components/HomePage.jsx';

import { Router, Route, hashHistory } from 'react-router';

injectTapEventPlugin();
class App extends Component {
  render() {
    return (
      <div>
        <MuiThemeProvider>
          <div>
            <Router history={hashHistory}>
              <Route path='/' component={ HomePage }/>
            </Router>        
          </div>
        </MuiThemeProvider>
      </div>
    );
  }
}

export default App;
