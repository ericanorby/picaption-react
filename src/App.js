import React, { Component } from 'react'
import {
  BrowserRouter as Router,
  Route,
  Link,
  Redirect
} from 'react-router-dom'
import Modal from 'react-modal'
import axios from 'axios'

import Home from './components/Home'
import Pictures from './components/Pictures'
import ShowPicture from './components/ShowPicture'
import NewPicture from './components/NewPicture'

const customStyles = {
  content : {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)'
  }
}

class App extends Component {
  constructor(){
    super()
    this.state = {
      modalIsOpen: false,
      update: {}
    }
    this.openModal = this.openModal.bind(this)
    this.closeModal = this.closeModal.bind(this)
  }

  openModal(){
    this.setState({
      modalIsOpen: true
    })
  }

  closeModal(){
    this.setState({
      modalIsOpen: false
    })
  }

  update(pic){
    this.setState({
      update: pic
    })
  }

  handleNewPicture(picture){
    axios.post(`https://picaption.herokuapp.com/api/pictures`, picture)
    .then((res) => {
      this.update(res.data)
    })
    .catch((err) => {
      return err
    })
  }

  render(){
    return(
      <Router>
        <div>

          <Modal
            isOpen={this.state.modalIsOpen}
            onAfterOpen={this.afterOpenModal}
            onRequestClose={this.closeModal}
            style={customStyles}
            contentLabel="uploadPhoto"
          >
            <NewPicture closeModal={() => this.closeModal()} handleNewPicture={(e) => this.handleNewPicture(e)} />
          </Modal>

          <header>
            <Link to="/pictures">
              <div id="view-pics-btn">
                <i className="fa fa-picture-o" aria-hidden="true"></i>
                <span> Browse Photos</span>
              </div>
            </Link>
            <h1><Link to="/home">Picaption</Link></h1>
            <button id="add-pic-btn" onClick={() => this.openModal()}><span>+</span></button>
          </header>

          <main>
            <Route
              exact path="/home"
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
                  <Pictures update={this.state.update} />
                )
              }}
            />
            <Route
              path="/pictures/:id"
              component={ShowPicture}
            />
            <Route
              path="/*"
              render={() => {
                return <Redirect to="/home" />
              }}
            />
          </main>

          <footer>
            <span>created by Erica Norby</span>
            <a href="https://github.com/ericanorby" target="_blank"><i id="github" className="fa fa-github" aria-hidden="true"></i></a>
            <a href="http://www.ericanorby.com" target="_blank"><span id="website">ericanorby.com</span></a>
          </footer>
        </div>
      </Router>
    );
  }
}

export default App
