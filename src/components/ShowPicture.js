import React, { Component } from 'react';
import axios from 'axios'

import NewCaption from './NewCaption'
import ShowCaptions from './ShowCaptions'

class ShowPicture extends Component {
  constructor(props){
    super(props)
    this.state = {
      pic: this.props.location.state.selected,
      captionCreated: false,
      captions: []
    }
  }

  showCaptions(){
    axios.get(`http://localhost:3001/api/pictures/${this.state.pic._id}/captions`)
    .then((res) => {
      this.setState({
        captionCreated: true,
        captions: res.data
      })
    })
  }

  handleNewCaption(caption){
    axios.post(`http://localhost:3001/api/pictures/${this.state.pic._id}/captions`, caption)
    .catch((err) => {
      console.log(err);
    })
  }

  render(){
    var link = undefined
    if (this.state.captionCreated){
      link = <ShowCaptions captions={this.state.captions} />
    } else {
      link = <NewCaption handleNewCaption={(e) => this.handleNewCaption(e)} showCaptions={() => this.showCaptions()} />
    }
    return(
      <div className="show-pic">
        <img src={this.state.pic.photo_url} alt={this.state.pic.alt} />
        { link }
      </div>
    )
  }
}

export default ShowPicture;
