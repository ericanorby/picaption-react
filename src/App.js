import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Redirect
} from 'react-router-dom'

import Home from './components/Home'
import Pictures from './components/Pictures'
import ShowPicture from './components/ShowPicture'

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <header>
            <Link to="/pictures">
              <h1>Picaption</h1>
            </Link>
          </header>
          <main>
            <Route
              exact path="/"
              render={() => {
                return(
                  <Home />
                )
              }}
            />
            <Route
              exact path="/pictures"
              render={() => {
                return(
                  <Pictures />
                )
              }}
            />
            <Route
              path="/pictures/:id"
              component={ ShowPicture }
            />
          </main>
        </div>
      </Router>
    );
  }
}

export default App;
