import React, {Component} from 'react';
import Header from './components/header/header.jsx'
import Section from './components/section/section.jsx'
import Footer from './components/footer/footer.jsx'
import './App.css'
import 'antd/dist/antd.css'; 
import axios from 'axios'
import {connect} from 'react-redux'
import ReactPaginate from 'react-paginate';
import { Pagination} from 'antd';
import { BrowserRouter, } from 'react-router-dom';
import Content from './components/section/content/content.jsx'
import Sidebar from './components/section/sidebar/sidebar.jsx'

class App extends Component {

  constructor(props) {
    super(props)
  }

  componentWillMount() {
    const url = document.location.href;
    const index = url.indexOf('page=')+5;
    const id = url.slice(index)
    this.getData(id)
  }

  async getData(page){
    const {getPost, getCountPage} = this.props;
    await axios
      .get(`http://localhost:4000/page=${page}`)
      .then(async ({data}) => {
        console.log(data)
          getPost(data.posts);
          getCountPage(data.countPage);
      })
  }

  onChange(pageNumber) {
    const url = "http://localhost:3000/page="+pageNumber;
    window.location.href= url;

 
    //window.history.pushState(null, null, url);
  }

  render() {
    const {posts} = this.props.posts;
    const {page} = this.props.page;
    const url = document.location.href;
    const index = url.indexOf('page=')+5;
    const id = url.slice(index)
    console.log(id);
    return (
      <BrowserRouter>
        <div className="wrap">
          <Header />
          <div className="section">
            <div className="content">
              <Content posts={posts} countPage={page/5} getData={() => this.getData()}/>
              <Pagination defaultCurrent={+id} total={page} defaultPageSize={5} onChange={this.onChange}/>
            </div>
            <Sidebar />
          </div>
          <hr />
          <Footer />
          
        </div>
      </BrowserRouter>
    );
  }
}

const state = (props) => {
  return {
    ...props
  }
}

const action = (dispatch) => ({
  getPost: data => dispatch({
    type: 'GET_POSTS',
    payload: data
  }),
  getCountPage: data => dispatch({
    type: 'GET_PAGE',
    payload: data
  })
})

export default connect(state, action)(App);
