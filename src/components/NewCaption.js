import React, { Component } from 'react';

class NewCaption extends Component {
  constructor(props){
    super(props)
    this.state = {
      content: "",
      author: ""
    }
  }

  handleContent(event){
    this.setState({
      content: event.target.value
    })
  }

  handleAuthor(event){
    this.setState({
      author: event.target.value
    })
  }

  handleSubmit(event){
    event.preventDefault()
    let content = this.state.content.trim()
    let author = this.state.author.trim()
    this.props.handleNewCaption({content, author})
  }

  render(){
    return(
      <div>
        <form onSubmit={(e) => {this.handleSubmit(e)}}>
          <div>
              <input type="text" placeholder="Write a silly caption here..." onChange={(e) => {this.handleContent(e)}} />
          </div>
          <div>
              <input type="text" placeholder="Your name" onChange={(e) => {this.handleAuthor(e)}} />
          </div>
          <div>
              <button type="submit">Add my caption!</button>
          </div>
        </form>
      </div>
    )
  }
}

export default NewCaption;
