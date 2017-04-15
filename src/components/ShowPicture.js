import React, { Component } from 'react';
import axios from 'axios'

import NewCaption from './NewCaption'

class ShowPicture extends Component {
  constructor(props){
    super(props)
    this.state = {
      pic: this.props.location.state.selected
    }
  }

  handleNewCaption(caption){
    axios.post(`http://localhost:3001/api/pictures/${this.state.pic._id}/captions`, caption)
    .then((res) => {
    })
    .catch((err) => {
      console.log(err);
    })
  }

  render(){
    return(
      <div>
        <img src={this.state.pic.photo_url} alt={this.state.pic.alt} />
        <NewCaption handleNewCaption={(e) => this.handleNewCaption(e)} />
      </div>
    )
  }
}

export default ShowPicture;
