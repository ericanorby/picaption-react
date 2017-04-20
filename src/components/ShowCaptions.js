import React, { Component } from 'react'

class ShowCaptions extends Component {

  render(){
    var listCaptions
    if (this.props.captions.length === 0) {
      listCaptions = <p>No one else has submitted a caption yet, check back later <i className="fa fa-smile-o" aria-hidden="true"></i></p>
    } else {
      listCaptions = this.props.captions.map((caption, index) => {
          return(
            <div key={index}>
              <p className="content">{caption.content}</p>
              <p>Submitted by: {caption.author}</p>
            </div>
          )
      })
    }
    return(
      <div className="captions-container">
        <h1><i className="fa fa-check-circle" aria-hidden="true"></i> Thanks for submitting your caption! Now check out what other users submitted:</h1>
        {listCaptions}
      </div>
    )
  }
}

export default ShowCaptions
