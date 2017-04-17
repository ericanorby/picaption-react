import React, { Component } from 'react';

class NewPicture extends Component {
  constructor(props){
    super(props)
    this.state = {
      url: "",
      alt: ""
    }
  }

  handleUrl(event){
    this.setState({
      url: event.target.value
    })
  }

  handleAlt(event){
    this.setState({
      alt: event.target.value
    })
  }

  handleSubmit(event){
    event.preventDefault()
    let url = this.state.url.trim()
    let alt = this.state.alt.trim()
    this.props.handleNewPicture({url, alt})
    this.props.closeModal()
  }

  render(){
    return(
      <div>
        <h1 className="modal-header">Upload a new picture</h1>
        <form onSubmit={(e) => this.handleSubmit(e)}>
          <div>
            <input type="text" placeholder="Photo URL" onChange={(e) => {this.handleUrl(e)}} required />
          </div>
          <div>
            <input type="text" placeholder="Enter a short description" onChange={(e) => {this.handleAlt(e)}} required />
          </div>
          <div>
            <button type="submit">Upload</button>
          </div>
        </form>
        <button id="close-modal-btn" onClick={() => this.props.closeModal()}><span>&#10005;</span></button>
      </div>
    )
  }
}

export default NewPicture;
