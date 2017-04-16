import React, { Component } from 'react';

class ShowCaptions extends Component {
  // constructor(props){
  //   super(props)
  //   this.state = {
  //     captions: this.props.captions
  //   }
  // }

  render(){
    var captions = this.props.captions.map((caption, index) => {
      return(
        <div key={index}>
          <p className="content">{caption.content}</p>
          <p>Submitted by: {caption.author}</p>
        </div>
      )
    })
    return(
      <div className="captions-container">
        {captions}
      </div>
    )
  }
}

export default ShowCaptions;
