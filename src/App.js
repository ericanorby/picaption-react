import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Redirect
} from 'react-router-dom'

import Pictures from './components/Pictures'

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <header>
            <h1>Picaption</h1>
          </header>
          <main>
            <Route
              exact path="/"
              render={() => {
                return(
                  <Pictures />
                )
              }}
            />
          </main>
        </div>
      </Router>
    );
  }
}

export default App;
