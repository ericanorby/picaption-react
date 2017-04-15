import React, { Component } from 'react'
import axios from 'axios'

class Pictures extends Component {
  constructor(props){
    super(props)
    this.state = {
      pictures: []
    }
    this.loadData = this.loadData.bind(this)
  }

  loadData(){
    axios.get("http://localhost:3001/api/pictures")
    .then((res) => {
      console.log("yippedoodaday")
      this.setState({
        pictures: res.data
      })
    })
    .catch((err) => {
      console.log(err)
    })
  }

  componentDidMount(){
    this.loadData()
  }

  render(){

    var pictures = this.state.pictures.map((pic, index) => {
      return(
        <div key={index}>
          <img src={pic.photo_url} alt={pic.alt} />
        </div>
      )
    })

    return(
      <div>
        {pictures}
      </div>
    )
  }
}

export default Pictures;
