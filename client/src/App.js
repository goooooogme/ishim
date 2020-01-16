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
import { BrowserRouter, Route} from 'react-router-dom';
import Content from './components/section/content/content.jsx'
import Sidebar from './components/section/sidebar/sidebar.jsx'
import Post from './components/post/post'

class App extends Component {

  constructor(props) {
    super(props)
  }

  async componentWillMount() {
    //  const url = document.location.href;
    //  const index = url.indexOf('page=')+5;
    //  const id = url.slice(index)
    //  this.getData(id);
    const url = document.location.href;
    const index = url.indexOf('post/')+5;
    const id = url.slice(index)
    await this.getOnePost(id);
  }

  async getData(page){
    const {getPosts, getCountPage} = this.props;
    await axios
      .get(`http://192.168.11.233:4000/page=${page}`)
      .then(async ({data}) => {
          getPosts(data.posts);
          getCountPage(data.countPage);
      })
  }

  async getOnePost(id){
    const {getPost} = this.props;
    await axios
      .get(`http://192.168.11.233:4000/api/post/${id}`)
      .then(async ({data}) => {
          getPost(data);
      })
  }

  onChange(pageNumber) {
    const url = "http://192.168.11.233:3000/page="+pageNumber;
    window.location.href= url;

 
    //window.history.pushState(null, null, url);
  }

  render() {
    const {posts} = this.props.posts;
    const {post} = this.props.post;
    const {page} = this.props.page;
    const url = document.location.href;
    const index = url.indexOf('page=')+5;
    const id = url.slice(index)
 
    const postInfo = post[0] || [];

    return (
      <BrowserRouter>
        <div className="wrap">
          <Header />
          <hr />
          
          <Route path="/post/" render ={ () => <Post post={postInfo}/>} />
         
          {/*<div className="section">
            <div className="content">
              <Content posts={posts} countPage={page/5} getData={() => this.getData()}/>
              <Pagination defaultCurrent={+id} total={page} defaultPageSize={5} onChange={this.onChange}/>
            </div>
            <Sidebar />
            </div>*/}
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
  getPosts: data => dispatch({
    type: 'GET_POSTS',
    payload: data
  }),
  getCountPage: data => dispatch({
    type: 'GET_PAGE',
    payload: data
  }),
  getPost: data => dispatch({
    type: 'GET_POST',
    payload: data
  })
})

export default connect(state, action)(App);
