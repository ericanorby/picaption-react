import React, { Component } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

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

  componentWillReceiveProps(nextProps){
    this.loadData()
  }

  render(){
    var pictures = this.state.pictures.map((pic, index) => {
      let pathname = `/pictures/${pic._id}`
      return(
        <Link key={index} to={{pathname, state: {selected: pic}}}>
          <div>
            <img src={pic.photo_url} alt={pic.alt} />
          </div>
        </Link>
      )
    })

    return(
      <div className="pictures-container">
        {pictures}
      </div>
    )
  }
}

export default Pictures;
