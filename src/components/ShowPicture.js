import React, { Component } from 'react'
import axios from 'axios'
import { Redirect } from 'react-router-dom'

import NewCaption from './NewCaption'
import ShowCaptions from './ShowCaptions'

class ShowPicture extends Component {
  constructor(props){
    super(props)
    this.state = {
      pic: this.props.location.state.selected,
      captionCreated: false,
      captions: [],
      deleted: false
    }
  }

  showCaptions(){
    axios.get(`https://picaption.herokuapp.com/api/pictures/${this.state.pic._id}/captions`)
    .then((res) => {
      this.setState({
        captionCreated: true,
        captions: res.data
      })
    })
  }

  handleNewCaption(caption){
    axios.post(`https://picaption.herokuapp.com/api/pictures/${this.state.pic._id}/captions`, caption)
    .catch((err) => {
      return err
    })
  }

  deletePhoto(){
    axios.delete(`https://picaption.herokuapp.com/api/pictures/${this.state.pic._id}`)
    .then((res) => {
      this.setState({
        deleted: true
      })
    })
    .catch((err) => {
      return err
    })
  }

  render(){
    if (this.state.deleted) {
      return <Redirect to="/pictures" />
    }
    let link = undefined
    if (this.state.captionCreated){
      link = <ShowCaptions captions={this.state.captions} />
    } else {
      link = <NewCaption handleNewCaption={(e) => this.handleNewCaption(e)} showCaptions={() => this.showCaptions()} />
    }
    return(
      <div className="show-pic">
        <img src={this.state.pic.photo_url} alt={this.state.pic.alt} />
        { link }
        <a onClick={() => this.deletePhoto()}><i className="fa fa-minus-square" aria-hidden="true"></i> delete</a>
      </div>
    )
  }
}

export default ShowPicture
