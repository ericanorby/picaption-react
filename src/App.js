import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'
import Modal from 'react-modal'

import Home from './components/Home'
import Pictures from './components/Pictures'
import ShowPicture from './components/ShowPicture'

const customStyles = {
  content : {
    top                   : '50%',
    left                  : '50%',
    right                 : 'auto',
    bottom                : 'auto',
    marginRight           : '-50%',
    transform             : 'translate(-50%, -50%)'
  }
};

class App extends Component {
  constructor() {
    super();
    this.state = {
      modalIsOpen: false
    }
    this.openModal = this.openModal.bind(this);
    this.afterOpenModal = this.afterOpenModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }

  openModal() {
    this.setState({modalIsOpen: true});
  }

  afterOpenModal() {
    // references are now sync'd and can be accessed.
    this.refs.subtitle.style.color = '#f00';
  }

  closeModal() {
    this.setState({modalIsOpen: false});
  }

  render() {
    return (
      <Router>
        <div>

          <Modal
            isOpen={this.state.modalIsOpen}
            onAfterOpen={this.afterOpenModal}
            onRequestClose={this.closeModal}
            style={customStyles}
            contentLabel="uploadPhoto"
          >
            <h1>Upload a new picture</h1>
            <form>
              <div>
                <input type="text" placeholder="Photo URL" />
              </div>
              <div>
                <input type="text" placeholder="an alt" />
              </div>
              <div>
                <button type="submit">Upload</button>
              </div>
            </form>
          </Modal>

          <header>
            <h1><Link to="/pictures">Picaption</Link></h1>
            <button id="add-pic-btn" onClick={() => this.openModal()}><span>+</span></button>
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
