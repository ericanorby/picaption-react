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
    axios.get("https://picaption.herokuapp.com/api/pictures")
    .then((res) => {
      this.setState({
        pictures: res.data
      })
    })
    .catch((err) => {
      return err
    })
  }

  componentDidMount(){
    this.loadData()
  }

  componentWillReceiveProps(nextProps){
    this.loadData()
  }

  render(){
    let pictures
    if (this.state.pictures.length){
      pictures = this.state.pictures.map((pic, index) => {
        let pathname = `/pictures/${pic._id}`
        return(
          <Link key={index} to={{pathname, state: {selected: pic}}}>
            <div className="picture-thumbnail">
              <img src={pic.photo_url} alt={pic.alt} />
            </div>
          </Link>
        )
      })
    } else {
      pictures = <div><h1>Loading...</h1><div className="spinner"></div></div>
    }

    return(
      <div className="pictures-container">
        {pictures}
      </div>
    )
  }
}

export default Pictures
