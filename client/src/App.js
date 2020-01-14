import React, {Component} from 'react';
import Header from './components/header/header.jsx'
import Section from './components/section/section.jsx'
import Footer from './components/footer/footer.jsx'
import './App.css'
import axios from 'axios'
import {connect} from 'react-redux'

class App extends Component {

  constructor(props) {
    super(props)
  }

  async componentWillMount(){
    const {setPost} = this.props;
    await axios
      .get('http://localhost:4000/')
      .then(async ({data}) => {
          setPost(data);
      })
  }

  render() {
  
    return (
      <div className="wrap">
        <Header />
        <Section posts={this.props.posts.posts}/>
        <hr />
        <Footer />
      </div>
    );
  }
}

const state = (props) => {
  return {
    ...props
  }
}

const action = (dispatch) => ({
  setPost: data => dispatch({
    type: 'GET_POSTS',
    payload: data
  })
})

export default connect(state, action)(App);
