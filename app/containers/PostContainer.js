import React, { Component } from 'react';
import PostJobsPage from '../components/post/PostJobsPage';

class PostContainer extends Component {
  constructor() {
    super();
    this.state = {};
  }
  render(){
    return (
      <div> 
        <PostJobsPage />
      </div>
    )
  }
}

export default PostContainer;